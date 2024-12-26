<template>
  <div>
    <div v-show="loading == 0" @click="start()">
      <i class="pi pi-play" style="font-size: 5rem"></i> <br />
      <h4>Click here to start the emulation</h4>
    </div>
    <div ref="gamediv" style="width: 100%" v-show="loading == 1">
      <canvas
        height="240"
        width="256"
        class="shadow-3 gamecanvas"
        ref="gamecanvas"
      ></canvas>
    </div>
  </div>
</template>
<script>
import Binjnes from "../binjnes.js";

const RESULT_OK = 0;
const RESULT_ERROR = 1;
const SCREEN_WIDTH = 256;
const SCREEN_HEIGHT = 240;
const AUDIO_FRAMES = 4096;
const AUDIO_LATENCY_SEC = 0.1;
const MAX_UPDATE_SEC = 5 / 60;
const PPU_TICKS_PER_SECOND = 5369318;
const EVENT_NEW_FRAME = 1;
const EVENT_AUDIO_BUFFER_FULL = 2;
const EVENT_UNTIL_TICKS = 4;

const $ = document.querySelector.bind(document);
let emulator = null;

const binjnesPromise = Binjnes();

function key(code) {
  return { type: "key", code };
}
function gpaxis(axis, neg) {
  return { type: "axis", axis, neg };
}
function gpbutton(button) {
  return { type: "button", button };
}
function clamp(x, min, max) {
  return Math.min(Math.max(x, min), max);
}

export default {
  name: "Emulator",
  props: {
    msg: String,
    gameData: Object,
    romEndpoint: String,
  },
  setup() {
    const gamediv = ref(null);
    const gamecanvas = ref(null);
    const config = useRuntimeConfig().public;
    // Before the component is mounted, the value
    // of the ref is `null` which is the default
    // value we've specified above.
    return {
      // It is important to return the ref,
      // otherwise it won't work.
      gamediv,
      gamecanvas,
      config,
    };
  },
  data() {
    return {
      loading: 0,
      gamerom: null,
      fps: 60,
      ticks: 0,
      height: 240,
      width: 256,
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
        list: [],
      },
      volume: 0.25,
      muted_volume: 0.25,
      pal: 0,
      rom_endpoint: null,
      game: null,
      mute: false,
      volume_btn_icon: "pi pi-volume-up",
      input: {
        show: false,
        type: ["joypad", "joypad"],
        list: [
          {
            name: "P0 DPAD UP",
            options: [key("ArrowUp"), gpaxis(1, true), gpaxis(5, true)],
          },
          {
            name: "P0 DPAD DOWN",
            options: [key("ArrowDown"), gpaxis(1, false), gpaxis(5, false)],
          },
          {
            name: "P0 DPAD LEFT",
            options: [key("ArrowLeft"), gpaxis(0, true), gpaxis(4, true)],
          },
          {
            name: "P0 DPAD RIGHT",
            options: [key("ArrowRight"), gpaxis(0, false), gpaxis(4, false)],
          },
          { name: "P0 B", options: [key("KeyZ"), gpbutton(3), gpbutton(2)] },
          { name: "P0 A", options: [key("KeyX"), gpbutton(0), gpbutton(1)] },
          { name: "P0 START", options: [key("Enter"), gpbutton(10), null] },
          { name: "P0 SELECT", options: [key("Tab"), gpbutton(9), null] },
          { name: "P1 DPAD UP", options: [key("KeyY"), null, null] },
          { name: "P1 DPAD DOWN", options: [key("KeyH"), null, null] },
          { name: "P1 DPAD LEFT", options: [key("KeyG"), null, null] },
          { name: "P1 DPAD RIGHT", options: [key("KeyJ"), null, null] },
          { name: "P1 B", options: [key("KeyK"), null, null] },
          { name: "P1 A", options: [key("KeyL"), null, null] },
          { name: "P1 START", options: [key("KeyO"), null, null] },
          { name: "P1 SELECT", options: [key("KeyI"), null, null] },
          { name: "Rewind", options: [key("Backspace"), gpbutton(7), null] },
          { name: "FastForward", options: [key("ShiftLeft"), null, null] },
          { name: "Pause", options: [key("Space"), null, null] },
        ],
        setting: false,
        key: -1,
        option: -1,
        axisDeadzone: 0.5,
        buttonDeadzone: 0.3,
        snesMouseSensitivity: 0.0,
      },
    };
  },
  unmounted: function () {
    Emulator.stop();
  },
  mounted: function () {
    //this.start()
  },
  methods: {
    start: function () {
      if (this.loading == 1) {
        return;
      }
      // Expose the context to the non-vue emulator code below so it can access the canvas and the emulator settings.
      window.vm = this;

      // Download the ROM from the found endpoint
      fetch(this.romEndpoint).then((response) => {
        let gameblob = response.blob().then((blob) => {
          // Get the Blob
          this.gamerom = blob;
          this.loading = 1;
          // Lesssssgooooooo
          this.playROM();
        });
      });
    },
    togglemute: function () {
      if (this.mute) {
        // If unmuting, set the old volume back
        this.mute = false;
        this.volume = this.muted_volume;
        this.volume_btn_icon = "pi pi-volume-up";
      } else {
        // If muting, set the volume to 0 and save the volume value
        this.muted_volume = this.volume;
        this.volume = 0;
        this.mute = true;
        this.volume_btn_icon = "pi pi-volume-off";
      }
    },
    playROM: function () {
      this.playFile(this.gamerom);
    },
    playFile: async function (file) {
      const [romBuffer, prgRamBuffer] = await Promise.all([
        this.readFile(file),
        file.prgRam ? readFile(file.prgRam) : Promise.resolve(null),
      ]);
      // this.setPaused(false);
      this.paused = false;
      this.loaded = true;
      this.canvas.show = true;
      this.files.show = false;
      // this.input.show = false;
      this.loadedFile = file;
      Emulator.start(await binjnesPromise, romBuffer);
    },
    readFile: function (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = (event) => reject(event.error);
        reader.onloadend = (event) => resolve(event.target.result);
        reader.readAsArrayBuffer(file);
      });
    },
    toggleFullscreen: function () {
      this.gamecanvas.requestFullscreen();
    },
  },
};

// Assign this after Vue has started, since it seems to create a new element.
const canvasEl = $("gamecanvas");

const EMULATOR_STATE_PAUSE = 0;
const EMULATOR_STATE_RUN = 1;
const EMULATOR_STATE_AUTO_REWIND = 2;
const EMULATOR_STATE_AUTO_FAST_FORWARD = 3;

// Copied from demo.js
function makeWasmBuffer(module, ptr, size) {
  return new Uint8Array(module.HEAP8.buffer, ptr, size);
}

class Emulator {
  static start(module, romBuffer) {
    Emulator.stop();
    emulator = new Emulator(module, romBuffer);
    emulator.run();
  }

  static stop() {
    if (emulator) {
      emulator.destroy();
      emulator = null;
    }
  }

  constructor(module, romBuffer) {
    this.module = module;
    this.romDataPtr = this.module._malloc(romBuffer.byteLength);
    let buf = makeWasmBuffer(
      this.module,
      this.romDataPtr,
      romBuffer.byteLength,
    );
    buf.set(new Uint8Array(romBuffer));
    this.e = this.module._emulator_new_simple(
      this.romDataPtr,
      romBuffer.byteLength,
      Audio.ctx.sampleRate,
      AUDIO_FRAMES,
    );
    if (this.e == 0) {
      throw new Error("Invalid ROM.");
    }

    this.audio = new Audio(module, this.e);
    this.video = new Video(module, this.e, window.vm.gamecanvas);

    this.joypadPtr = this.module._joypad_new_simple(this.e);

    this.lastRafSec = 0;
    this.leftoverTicks = 0;
    this.fps = 60;

    this.bindKeys();
  }

  destroy() {
    this.unbindKeys();
    this.cancelAnimationFrame();
    this.module._joypad_delete(this.joypadPtr);
    this.module._emulator_delete(this.e);
    this.module._free(this.romDataPtr);
  }

  withNewFileData(cb) {
    const buffer = makeWasmBuffer(
      this.module,
      this.module._get_file_data_ptr(fileDataPtr),
      this.module._get_file_data_size(fileDataPtr),
    );
    const result = cb(fileDataPtr, buffer);
    this.module._file_data_delete(fileDataPtr);
    return result;
  }

  get isPaused() {
    return this.rafCancelToken === null;
  }

  pause() {
    if (!this.isPaused) {
      this.cancelAnimationFrame();
      this.audio.pause();
    }
  }

  resume() {
    if (this.isPaused) {
      this.requestAnimationFrame();
      this.audio.resume();
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
        this.video.uploadTexture();
      }
      if (event & EVENT_AUDIO_BUFFER_FULL) {
        this.audio.pushBuffer();
      }
      if (event & EVENT_UNTIL_TICKS) {
        break;
      }
    }
  }

  rafCallback(startMs) {
    this.requestAnimationFrame();
    let deltaSec = 0;
    const startSec = startMs / 1000;
    deltaSec = Math.max(startSec - (this.lastRafSec || startSec), 0);
    const startTicks = this.ticks;
    const deltaTicks =
      Math.min(deltaSec, MAX_UPDATE_SEC) * PPU_TICKS_PER_SECOND;
    const runUntilTicks = startTicks + deltaTicks - this.leftoverTicks;
    this.runUntil(runUntilTicks);
    this.leftoverTicks = (this.ticks - runUntilTicks) | 0;
    this.lastRafSec = startSec;
    const lerp = (from, to, alpha) => alpha * from + (1 - alpha) * to;
    this.fps = lerp(this.fps, Math.min(1 / deltaSec, 10000), 0.3);
    this.video.renderTexture();
  }

  bindKeys() {
    this.keyFuncs = {
      ArrowDown: this.module._set_joyp_down.bind(null, this.e, 0),
      ArrowLeft: this.module._set_joyp_left.bind(null, this.e, 0),
      ArrowRight: this.module._set_joyp_right.bind(null, this.e, 0),
      ArrowUp: this.module._set_joyp_up.bind(null, this.e, 0),
      KeyZ: this.module._set_joyp_B.bind(null, this.e, 0),
      KeyX: this.module._set_joyp_A.bind(null, this.e, 0),
      Enter: this.module._set_joyp_start.bind(null, this.e, 0),
      Tab: this.module._set_joyp_select.bind(null, this.e, 0),
      Space: this.keyPause.bind(this),
    };
    this.boundKeyDown = this.keyDown.bind(this);
    this.boundKeyUp = this.keyUp.bind(this);

    window.addEventListener("keydown", this.boundKeyDown);
    window.addEventListener("keyup", this.boundKeyUp);
  }

  unbindKeys() {
    window.removeEventListener("keydown", this.boundKeyDown);
    window.removeEventListener("keyup", this.boundKeyUp);
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

  keyPause(isKeyDown) {
    if (isKeyDown) vm.togglePause();
  }
}

class Audio {
  constructor(module, e) {
    this.module = module;

    this.buffer = new Float32Array(
      module.HEAP8.buffer,
      this.module._get_audio_buffer_ptr(e),
      this.module._get_audio_buffer_capacity(e),
    );
    this.startSec = 0;
    this.resume();
  }

  get sampleRate() {
    return Audio.ctx.sampleRate;
  }

  pushBuffer() {
    const nowSec = Audio.ctx.currentTime;
    const nowPlusLatency = nowSec + AUDIO_LATENCY_SEC;
    const volume = vm.volume;
    this.startSec = this.startSec || nowPlusLatency;
    if (this.startSec >= nowSec) {
      const buffer = Audio.ctx.createBuffer(1, AUDIO_FRAMES, this.sampleRate);
      const channel = buffer.getChannelData(0);
      for (let i = 0; i < AUDIO_FRAMES; i++) {
        channel[i] = this.buffer[i] * volume;
      }
      const bufferSource = Audio.ctx.createBufferSource();
      bufferSource.buffer = buffer;
      bufferSource.connect(Audio.ctx.destination);
      bufferSource.start(this.startSec);
      const bufferSec = AUDIO_FRAMES / this.sampleRate;
      this.startSec += bufferSec;
    } else {
      /*
      console.log(
          'Resetting audio (' + this.startSec.toFixed(2) + ' < ' +
          nowSec.toFixed(2) + ')');
      */
      this.startSec = nowPlusLatency;
    }
  }

  pause() {
    Audio.ctx.suspend();
  }

  resume() {
    Audio.ctx.resume();
  }
}

Audio.ctx = new AudioContext();

const NESPAL = [
  0xff616161, 0xff880000, 0xff990d1f, 0xff791337, 0xff601256, 0xff10005d,
  0xff000e52, 0xff08233a, 0xff0c3521, 0xff0e410d, 0xff174417, 0xff1f3a00,
  0xff572f00, 0xff000000, 0xff000000, 0xff000000, 0xffaaaaaa, 0xffc44d0d,
  0xffde244b, 0xffcf1269, 0xffad1490, 0xff481c9d, 0xff043492, 0xff055073,
  0xff13695d, 0xff117a16, 0xff088013, 0xff497612, 0xff91661c, 0xff000000,
  0xff000000, 0xff000000, 0xfffcfcfc, 0xfffc9a63, 0xfffc7e8a, 0xfffc6ab0,
  0xfff26ddd, 0xffab71e7, 0xff5886e3, 0xff229ecc, 0xff00b1a8, 0xff00c172,
  0xff4ecd5a, 0xff8ec234, 0xffcebe4f, 0xff424242, 0xff000000, 0xff000000,
  0xfffcfcfc, 0xfffcd4be, 0xfffccaca, 0xfffcc4d9, 0xfffcc1ec, 0xffe7c3fa,
  0xffc3cef7, 0xffa7cde2, 0xff9cdbda, 0xff9ee3c8, 0xffb8e5bf, 0xffc8ebb2,
  0xffebe5b7, 0xffacacac, 0xff000000, 0xff000000,
];

class Video {
  constructor(module, e, el) {
    this.module = module;
    try {
      this.renderer = new WebGLRenderer(el);
      console.log(this.renderer);
    } catch (error) {
      console.log(`Error creating WebGLRenderer: ${error}`);
      this.renderer = new Canvas2DRenderer(el);
    }
    this.buffer = new Uint16Array(
      module.HEAP16.buffer,
      this.module._get_frame_buffer_ptr(e),
      this.module._get_frame_buffer_size(e) >> 1,
    );
  }

  uploadTexture() {
    this.renderer.uploadTexture(this.buffer);
  }

  renderTexture() {
    this.renderer.renderTexture();
  }
}

class Canvas2DRenderer {
  constructor(el) {
    this.ctx = el.getContext("2d");
    this.imageData = this.ctx.createImageData(el.width, el.height);
  }

  renderTexture() {
    this.ctx.putImageData(this.imageData, 0, 0);
  }

  uploadTexture(buffer) {
    this.imageData.data.set(buffer);
  }
}

class WebGLRenderer {
  constructor(el) {
    const gl = (this.gl = el.getContext("webgl2", {
      preserveDrawingBuffer: true,
    }));
    console.log(gl);
    if (gl === null) {
      throw new Error("unable to create webgl context");
    }

    const w = 256 / 256;
    const h = 240 / 256;
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1,
        -1,
        0,
        h,
        +1,
        -1,
        w,
        h,
        -1,
        +1,
        0,
        0,
        +1,
        +1,
        w,
        0,
      ]),
      gl.STATIC_DRAW,
    );

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.R16UI,
      256,
      256,
      0,
      gl.RED_INTEGER,
      gl.UNSIGNED_SHORT,
      null,
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(`compileShader failed: ${gl.getShaderInfoLog(shader)}`);
      }
      return shader;
    }

    const vertexShader = compileShader(
      gl.VERTEX_SHADER,
      `#version 300 es
        in vec2 aPos;
        in vec2 aTexCoord;
        out vec2 vTexCoord;
        void main(void) {
          gl_Position = vec4(aPos, 0.0, 1.0);
          vTexCoord = aTexCoord;
        }`,
    );
    const fragmentShader = compileShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
        precision highp float;
        in vec2 vTexCoord;
        out vec4 outColor;
        uniform highp usampler2D uSampler;
        uniform uint uPalette[64];
        void main(void) {
          uint color = uPalette[texture(uSampler, vTexCoord).r & 63u];
          outColor = vec4(
            float((color >> 0) & 0xffu) / 255.5f,
            float((color >> 8) & 0xffu) / 255.5f,
            float((color >> 16) & 0xffu) / 255.5f,
            1.0f
          );
        }`,
    );

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(`program link failed: ${gl.getProgramInfoLog(program)}`);
    }
    gl.useProgram(program);

    const aPos = gl.getAttribLocation(program, "aPos");
    const aTexCoord = gl.getAttribLocation(program, "aTexCoord");
    const uPalette = gl.getUniformLocation(program, "uPalette");
    const uSampler = gl.getUniformLocation(program, "uSampler");

    gl.enableVertexAttribArray(aPos);
    gl.enableVertexAttribArray(aTexCoord);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, gl.FALSE, 16, 0);
    gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, gl.FALSE, 16, 8);
    gl.uniform1i(uSampler, 0);
    gl.uniform1uiv(uPalette, NESPAL);
  }

  renderTexture() {
    this.gl.clearColor(0.5, 0.5, 0.5, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }

  uploadTexture(buffer) {
    this.gl.texSubImage2D(
      this.gl.TEXTURE_2D,
      0,
      0,
      0,
      SCREEN_WIDTH,
      SCREEN_HEIGHT,
      this.gl.RED_INTEGER,
      this.gl.UNSIGNED_SHORT,
      buffer,
    );
  }
}
</script>

<style scoped>
.gamecanvas {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: crisp-edges;

  /* Fill the available space */
  width: 100%;
  /*  Original resolution ratio */
  aspect-ratio: 256 / 240;

  margin: 0; /* binjgb */
  padding: 0; /* binjgb */
  touch-action: none;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none; /* binjgb */
  overflow: hidden;
}
</style>
