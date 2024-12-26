<!--
  GBA Emulator component. Fetches the game ROM Blob and fires up the WASM 
  build of the mGBA emulator.
-->
<template>
  <div style="text-align: center" v-if="loading == 1">
    <ProgressSpinner style="width: 32px; height: 32px" strokeWidth="4" />
    <Button label="Loading game ROM.." class="p-button-text" disabled />
  </div>
  <div v-show="loading == 0" @click="start()" style="padding: 75px">
    <center>
      <i class="pi pi-play" style="font-size: 5rem"></i> <br />
      <h4>Click here to start the emulation</h4>
    </center>
  </div>
  <div v-show="loading == 2">
    <Button
      @click="toggleFullscreen"
      label="Fullscreen"
      icon="pi pi-desktop"
      iconPos="right"
      class="p-button-text"
    /><br />
    <canvas class="shadow-3 gamecanvas" ref="gamecanvas"> </canvas>
    <br />
    <div class="grid p-fluid">
      <div class="col-12 md:col-8 vertical-align-bottom">
        <div style="padding: 1rem">
          <Slider
            @change="changeVolume"
            orientation="horizontal"
            v-model="volume"
            :step="0.0025"
            :min="0"
            :max="1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mGBA from "../mgba.js";

export default {
  name: "Medusa",
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
      volume: 0.8,
      started: false,
      loading: 0,
    };
  },
  mounted: function () {
    //this.start();
  },
  methods: {
    unmute: function () {
      window.Module._unmute();
    },
    start: function () {
      if (this.started == true){
        return;
      }
      this.started = true;
      window.vm = this;
      window.Module = {
        canvas: window.vm.gamecanvas,
      };

      fetch(this.romEndpoint).then((response) => {
        let gameblob = response.blob().then((blob) => {
          this.loading = 1;
          mGBA(window.Module).then(() => {
            window.Module.FS.mkdir("/hh-gba-data");
            window.Module.FS.mount(
              window.Module.FS.filesystems.IDBFS,
              {},
              "/hh-gba-data",
            );

            blob.arrayBuffer().then((data) => {
              window.Module.FS.writeFile(
                "/hh-gba-data/game.gba",
                new Uint8Array(data),
              );
              window.Module.loadFile("/hh-gba-data/game.gba");
              this.loading = 2;
              window.Module._setVolume(0.1);
            });
          });
        });
      });
      //this.changeVolume(this.volume)
    },
    toggleFullscreen: function () {
      this.gamecanvas.requestFullscreen();
    },
    changeVolume: function () {
      window.Module._setVolume(this.volume);
    },
  },
};
</script>
<style scoped>
.gamecanvas {
  image-rendering: pixelated;
  /* Fill the available space */
  width: 100%;
  /* GBA original resolution ratio */
  aspect-ratio: 240 / 160;
}
</style>
