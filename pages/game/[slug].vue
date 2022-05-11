<!--
  The main game view. Fetches metadata about the entry and renders the game details. Loads the Emulator component passing game data to it.
-->
<script setup>
const route = useRoute();
const config = useRuntimeConfig().public;

const url = config.BASE_API_URL +"/api/entry/" + route.params.slug + ".json";
// Fetch the requested game manifest from the API
const { data } = await useFetch(url);
const game = data.value;

let developer = ""

const gametitle = data.value.title;
if (game.developer) {
  developer = game.developer
} 
const gamedescription = "A Game Boy homebrew game by "+ developer + ". Play online for free."

let screenshot_url = ""

if (game.screenshots[0]) {
  screenshot_url = config.BASE_API_URL +"/entries/" + route.params.slug + '/'+game.screenshots[0]
}

useHead({
  meta: [{ name: "title", content: gametitle },
         { name: "og:title", content: gametitle },
         { name: "og:description", content: gamedescription},
         { name: "og:image", content: screenshot_url},],
});
</script>

<template>
  <div class="grid">
    <div class="col-12 lg:col-0 xl:col-1"></div>
    <div class="col-12 lg:col-6 xl:col-5">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <ClientOnly>
              <Emulator :gameData="game" />
              <Mgba />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-5">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <h1>{{ game.title }} {{ romblob }}</h1>
            <span v-if="game.developer">
              Developer: {{ game.developer }} <br
            /></span>
            <span v-if="game.tags"> Tags: </span>
            <template v-if="game.tags" v-for="tag in game.tags">
              <Chip>{{ tag }}</Chip
              >&nbsp; </template
            ><br />
            <span v-if="game.license"> License: {{ game.license }}<br /></span>
            <span v-if="game.date"> Creation date: {{ game.date }}<br /></span>
            Type: <Chip>{{ game.typetag }}</Chip> -
            <Chip v-tooltip="tooltip[game.platform]">{{ game.platform }}</Chip>
            <br />
            <br />
            <br />

            <a :href="rom_endpoint"
              ><Button
                v-tooltip="
                  'Use an emulator like BGB or Gambatte to play downloaded ROMs'
                "
                label="Download ROM"
                icon="pi pi-download"
                iconPos="right"
            /></a>

            <a v-if="game.repository" :href="game.repository" target="_blank"
              >&nbsp;<Button
                class="p-button-outlined"
                label="Get Source Code"
                icon="pi pi-external-link"
                iconPos="right"
            /></a>
          </div>
        </div>
      </div>
      <br />
      <div class="card mb-0">
        <h2>Controls</h2>
        A: Z, B: X, Start: Enter, Select: Shift <br />
        Arrows
      </div>
    </div>
  </div>
  <div>
    <div class="p-grid">
      <div class="p-col">
        <!-- The Emulator component should only be loaded in a actual browser -->
      </div>
      <div class="p-col"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Game",
  props: {
    msg: String,
  },
  data() {
    return {
      tooltip: {
        GB: "The cartridge was designed to be played on the original Game Boy",
        GBC: "The game supports Game Boy Color features",
        SGB: "The game supports Super Game Boy features",
      },
    };
  },
};
</script>
