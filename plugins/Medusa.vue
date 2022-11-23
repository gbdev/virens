<template>
  <canvas class="shadow-3 gamecanvas" ref="gamecanvas"></canvas>
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
  mounted: function () {
    this.start()
  },
  methods: {
    start: function () {
      window.vm = this;

      window.Module = {
        canvas: window.vm.gamecanvas,
      };

      fetch(this.romEndpoint).then((response) => {
        let gameblob = response.blob().then((blob) => {
          mGBA(window.Module).then(() => {
            window.Module.FS.mkdir("/hh-gba-data");
            window.Module.FS.mount(
              window.Module.FS.filesystems.IDBFS,
              {},
              "/hh-gba-data"
            );
            const err = new Promise((resolve) => {
              window.Module.FS.syncfs(true, resolve);
            }).then(() => {
              blob.arrayBuffer().then((data) => {
                window.Module.FS.writeFile(
                  "/hh-gba-data/game.gba",
                  new Uint8Array(data)
                );
                window.Module.loadFile("/hh-gba-data/game.gba");
              });
            });
          });
        });
      });
    },
  },
};
</script>
<style scoped>
.gamecanvas {
  image-rendering: pixelated;
  /* Fill the available space */
  width: 100%;
  /* Original resolution ratio */
  aspect-ratio: 240 / 160;
}
</style>
