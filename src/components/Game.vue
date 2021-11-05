<template>
    <div>
        {{ $route.params.slug }}
    </div>
</template>
<script>
import Binjgb from '../../public/js/binjgb.js'
import axios from 'axios'

let emulator = null;
const binjgbPromise = Binjgb();

/* Emulator related code is partially adapted from 
Ben Smith's binji web demo 
https://github.com/binji/binjgb/tree/main/docs
*/

const RESULT_OK = 0;
const RESULT_ERROR = 1;
const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;
const SGB_SCREEN_WIDTH = 256;
const SGB_SCREEN_HEIGHT = 224;
const SGB_SCREEN_LEFT = (SGB_SCREEN_WIDTH - SCREEN_WIDTH) >> 1;
const SGB_SCREEN_RIGHT = (SGB_SCREEN_WIDTH + SCREEN_WIDTH) >> 1;
const SGB_SCREEN_TOP = (SGB_SCREEN_HEIGHT - SCREEN_HEIGHT) >> 1;
const SGB_SCREEN_BOTTOM = (SGB_SCREEN_HEIGHT + SCREEN_HEIGHT) >> 1;
const AUDIO_FRAMES = 4096;
const AUDIO_LATENCY_SEC = 0.1;
const MAX_UPDATE_SEC = 5 / 60;
const CPU_TICKS_PER_SECOND = 4194304;
const EVENT_NEW_FRAME = 1;
const EVENT_AUDIO_BUFFER_FULL = 2;
const EVENT_UNTIL_TICKS = 4;
const REWIND_FRAMES_PER_BASE_STATE = 45;
const REWIND_BUFFER_CAPACITY = 4 * 1024 * 1024;
const REWIND_FACTOR = 1.5;
const REWIND_UPDATE_MS = 16;
const BUILTIN_PALETTES = 83; // See builtin-palettes.def.
const GAMEPAD_POLLING_INTERVAL = 1000 / 60 / 4; // When activated, poll for gamepad input about ~4 times per gameboy frame (~240 times second)
const GAMEPAD_KEYMAP_STANDARD_STR = "standard"; // Try to use "standard" HTML5 mapping config if available

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            fps: 60,
            ticks: 0,
            loaded: false,
            loadedFile: null,
            paused: false,
            extRamUpdated: false,
            canvas: {
                show: false,
                useSgbBorder: false,
                scale: 3,
            },
            rewind: {
                minTicks: 0,
                maxTicks: 0,
            },
            files: {
                show: true,
                selected: 0,
                list: []
            },
            volume: 0.5,
            pal: 0
        }
    },
    created: function() {
        self = this
        axios('/2048.gb', { responseType: 'blob' })
            .then(async function(response) {
                console.log(response)
                Emulator.start(await binjgbPromise, response, null);
            }.bind(Emulator))

        setInterval(() => {
            this.fps = emulator ? emulator.fps : 60;
        }, 500);
        setInterval(() => {
            if (this.extRamUpdated) {
                this.updateExtRam();
                this.extRamUpdated = false;
            }
        }, 1000);

    },
    methods: {
        toggleFullscreen: function() { $('canvas').requestFullscreen(); },
        palDown: function() { this.setPal(this.pal - 1); },
        palUp: function() { this.setPal(this.pal + 1); },
        readFile: function(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onerror = event => reject(event.error);
                reader.onloadend = event => resolve(event.target.result);

                reader.readAsArrayBuffer(file);
            });
        },
        setPal: function(pal) {
            if (pal < 0) { pal = BUILTIN_PALETTES - 1; }
            if (pal >= BUILTIN_PALETTES) { pal = 0; }
            this.pal = pal;
            if (emulator) { emulator.setBuiltinPalette(this.pal); }
        },
        updateTicks: function() {
            this.ticks = emulator.ticks;
        },
        togglePause: function() {
            if (!this.loaded) return;
            this.paused = !this.paused;
        },
        rewindTo: function(event) {
            if (!emulator) return;
            emulator.rewindToTicks(+event.target.value);
            this.updateTicks();
        },
        selectFile: function(index) {
            this.files.selected = index;
        },
        playFile: async function(file) {
            const [romBuffer, extRamBuffer] = await Promise.all([
                readFile(file.rom),
                file.extRam ? readFile(file.extRam) : Promise.resolve(null)
            ]);
            this.paused = false;
            this.loaded = true;
            this.canvas.show = true;
            this.files.show = false;
            this.loadedFile = file;
            Emulator.start(await binjgbPromise, romBuffer, extRamBuffer);
            emulator.setBuiltinPalette(this.pal);
        },
        deleteFile: async function(file) {
            const db = await dbPromise;
            const tx = db.transaction('games', 'readwrite');
            const cursor = await tx.objectStore('games').openCursor(file.sha1);
            if (!cursor) return;
            cursor.delete();
            await tx.complete;
            const index = this.files.list.findIndex(x => x.sha1 === file.sha1);
            if (index < 0) return;
            this.files.list.splice(index, 1);
            if (this.loadedFile && this.loadedFile.sha1 === file.sha1) {
                this.loaded = false;
                this.loadedFile = null;
                this.paused = true;
                this.canvas.show = false;
                Emulator.stop();
            }
        },
        uploadClicked: function() {
            $('#upload').click();
        },
        uploadFile: async function(event) {
            const file = event.target.files[0];
            const [db, buffer] = await Promise.all([dbPromise, readFile(file)]);
            const sha1 = SHA1Digest(buffer);
            const name = file.name;
            const rom = new Blob([buffer]);
            const data = { sha1, name, rom, modified: new Date };
            const tx = db.transaction('games', 'readwrite');
            tx.objectStore('games').add(data)
            await tx.complete;
            this.files.list.push(data);
        },
        updateExtRam: async function() {
            if (!emulator) return;
            const extRamBlob = new Blob([emulator.getExtRam()]);
            const imageDataURL = $('canvas').toDataURL();
            const db = await dbPromise;
            const tx = db.transaction('games', 'readwrite');
            const cursor = await tx.objectStore('games').openCursor(
                this.loadedFile.sha1);
            if (!cursor) return;
            Object.assign(this.loadedFile, cursor.value);
            this.loadedFile.extRam = extRamBlob;
            this.loadedFile.image = imageDataURL;
            this.loadedFile.modified = new Date;
            cursor.update(this.loadedFile);
            return tx.complete;
        },
        toggleOpenDialog: function() {
            this.files.show = !this.files.show;
            if (this.files.show) {
                this.paused = true;
            }
        },
        readFiles: async function() {
            this.files.list.length = 0;
            const db = await dbPromise;
            const tx = db.transaction('games');
            tx.objectStore('games').iterateCursor(cursor => {
                if (!cursor) return;
                this.files.list.push(cursor.value);
                cursor.continue();
            });
            return tx.complete;
        },
        prettySize: function(size) {
            if (size >= 1024 * 1024) {
                return `${(size / (1024 * 1024)).toFixed(1)}Mib`;
            } else if (size >= 1024) {
                return `${(size / 1024).toFixed(1)}Kib`;
            } else {
                return `${size}b`;
            }
        },
        prettyDate: function(date) {
            const options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            return date.toLocaleDateString(undefined, options);
        },
    }
}

class Emulator {
    static start(module, romBuffer, extRamBuffer) {
        Emulator.stop();
        emulator = new Emulator(module, romBuffer, extRamBuffer);
        emulator.run();
    }

    static stop() {
        if (emulator) {
            emulator.destroy();
            emulator = null;
        }
    }

    constructor(module, romBuffer, extRamBuffer) {
        this.module = module;
        this.romDataPtr = this.module._malloc(romBuffer.byteLength);
        makeWasmBuffer(this.module, this.romDataPtr, romBuffer.byteLength)
            .set(new Uint8Array(romBuffer));
        this.e = this.module._emulator_new_simple(
            this.romDataPtr, romBuffer.byteLength, Audio.ctx.sampleRate,
            AUDIO_FRAMES);
        if (this.e == 0) {
            throw new Error('Invalid ROM.');
        }

        this.gamepad = new Gamepad(module, this.e);
        this.audio = new Audio(module, this.e);
        this.video = new Video(module, this.e, $('canvas'));
        this.rewind = new Rewind(module, this.e);
        this.rewindIntervalId = 0;

        this.lastRafSec = 0;
        this.leftoverTicks = 0;
        this.fps = 60;

        if (extRamBuffer) {
            this.loadExtRam(extRamBuffer);
        }

        this.bindKeys();
        this.gamepad.init();
    }

    destroy() {
        this.unbindKeys();
        this.gamepad.shutdown();
        this.cancelAnimationFrame();
        clearInterval(this.rewindIntervalId);
        this.rewind.destroy();
        this.module._emulator_delete(this.e);
        this.module._free(this.romDataPtr);
    }

    withNewFileData(cb) {
        const fileDataPtr = this.module._ext_ram_file_data_new(this.e);
        const buffer = makeWasmBuffer(
            this.module, this.module._get_file_data_ptr(fileDataPtr),
            this.module._get_file_data_size(fileDataPtr));
        const result = cb(fileDataPtr, buffer);
        this.module._file_data_delete(fileDataPtr);
        return result;
    }

    loadExtRam(extRamBuffer) {
        this.withNewFileData((fileDataPtr, buffer) => {
            if (buffer.byteLength === extRamBuffer.byteLength) {
                buffer.set(new Uint8Array(extRamBuffer));
                this.module._emulator_read_ext_ram(this.e, fileDataPtr);
            }
        });
    }

    getExtRam() {
        return this.withNewFileData((fileDataPtr, buffer) => {
            this.module._emulator_write_ext_ram(this.e, fileDataPtr);
            return new Uint8Array(buffer);
        });
    }

    get isPaused() {
        return this.rafCancelToken === null;
    }

    pause() {
        if (!this.isPaused) {
            this.cancelAnimationFrame();
            this.audio.pause();
            this.beginRewind();
        }
    }

    resume() {
        if (this.isPaused) {
            this.endRewind();
            this.requestAnimationFrame();
            this.audio.resume();
        }
    }

    setBuiltinPalette(pal) {
        this.module._emulator_set_builtin_palette(this.e, pal);
    }

    get isRewinding() {
        return this.rewind.isRewinding;
    }

    beginRewind() {
        this.rewind.beginRewind();
    }

    rewindToTicks(ticks) {
        if (this.rewind.rewindToTicks(ticks)) {
            this.runUntil(ticks);
            this.video.renderTexture();
        }
    }

    endRewind() {
        this.rewind.endRewind();
        this.lastRafSec = 0;
        this.leftoverTicks = 0;
        this.audio.startSec = 0;
    }

    set autoRewind(enabled) {
        if (enabled) {
            this.rewindIntervalId = setInterval(() => {
                const oldest = this.rewind.oldestTicks;
                const start = this.ticks;
                const delta =
                    REWIND_FACTOR * REWIND_UPDATE_MS / 1000 * CPU_TICKS_PER_SECOND;
                const rewindTo = Math.max(oldest, start - delta);
                this.rewindToTicks(rewindTo);
                vm.ticks = emulator.ticks;
            }, REWIND_UPDATE_MS);
        } else {
            clearInterval(this.rewindIntervalId);
            this.rewindIntervalId = 0;
        }
    }

    requestAnimationFrame() {
        this.rafCancelToken = requestAnimationFrame(this.rafCallback.bind(this));
    }

    cancelAnimationFrame() {
        cancelAnimationFrame(this.rafCancelToken);
        this.rafCancelToken = null;
    }

    run() {
        this.requestAnimationFrame();
    }

    get ticks() {
        return this.module._emulator_get_ticks_f64(this.e);
    }

    runUntil(ticks) {
        while (true) {
            const event = this.module._emulator_run_until_f64(this.e, ticks);
            if (event & EVENT_NEW_FRAME) {
                this.rewind.pushBuffer();
                this.video.uploadTexture();
            }
            if ((event & EVENT_AUDIO_BUFFER_FULL) && !this.isRewinding) {
                this.audio.pushBuffer();
            }
            if (event & EVENT_UNTIL_TICKS) {
                break;
            }
        }
        if (this.module._emulator_was_ext_ram_updated(this.e)) {
            vm.extRamUpdated = true;
        }
    }

    rafCallback(startMs) {
        this.requestAnimationFrame();
        let deltaSec = 0;
        if (!this.isRewinding) {
            const startSec = startMs / 1000;
            deltaSec = Math.max(startSec - (this.lastRafSec || startSec), 0);
            const startTicks = this.ticks;
            const deltaTicks =
                Math.min(deltaSec, MAX_UPDATE_SEC) * CPU_TICKS_PER_SECOND;
            const runUntilTicks = (startTicks + deltaTicks - this.leftoverTicks);
            this.runUntil(runUntilTicks);
            this.leftoverTicks = (this.ticks - runUntilTicks) | 0;
            this.lastRafSec = startSec;
        }
        const lerp = (from, to, alpha) => (alpha * from) + (1 - alpha) * to;
        this.fps = lerp(this.fps, Math.min(1 / deltaSec, 10000), 0.3);
        this.video.renderTexture();
    }

    bindKeys() {
        this.keyFuncs = {
            'ArrowDown': this.module._set_joyp_down.bind(null, this.e),
            'ArrowLeft': this.module._set_joyp_left.bind(null, this.e),
            'ArrowRight': this.module._set_joyp_right.bind(null, this.e),
            'ArrowUp': this.module._set_joyp_up.bind(null, this.e),
            'KeyZ': this.module._set_joyp_B.bind(null, this.e),
            'KeyX': this.module._set_joyp_A.bind(null, this.e),
            'Enter': this.module._set_joyp_start.bind(null, this.e),
            'Tab': this.module._set_joyp_select.bind(null, this.e),
            'Backspace': this.keyRewind.bind(this),
            'Space': this.keyPause.bind(this),
        };
        this.boundKeyDown = this.keyDown.bind(this);
        this.boundKeyUp = this.keyUp.bind(this);

        window.addEventListener('keydown', this.boundKeyDown);
        window.addEventListener('keyup', this.boundKeyUp);
    }

    unbindKeys() {
        window.removeEventListener('keydown', this.boundKeyDown);
        window.removeEventListener('keyup', this.boundKeyUp);
    }

    keyDown(event) {
        if (event.code in this.keyFuncs) {
            this.keyFuncs[event.code](true);
            event.preventDefault();
        }
    }

    keyUp(event) {
        if (event.code in this.keyFuncs) {
            this.keyFuncs[event.code](false);
            event.preventDefault();
        }
    }

    keyRewind(isKeyDown) {
        if (this.isRewinding !== isKeyDown) {
            if (isKeyDown) {
                vm.paused = true;
                this.autoRewind = true;
            } else {
                this.autoRewind = false;
                vm.paused = false;
            }
        }
    }

    keyPause(isKeyDown) {
        if (isKeyDown) vm.togglePause();
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>