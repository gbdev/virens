<!--
  The main game view. Fetches metadata about the entry and renders the game details. Loads the Emulator component passing game data to it.
-->
<script setup>
const route = useRoute();
const config = useRuntimeConfig().public;

const url = config.BASE_API_URL + "/api/entry/" + route.params.slug + ".json";
// Fetch the requested game manifest from the API
const { data } = await useFetch(url);
const game = data.value;

let developer = "";

const gametitle = data.value.title;
if (game.developer) {
  developer = game.developer;
}

let type = "";
if (game.typetag) {
  type = game.typetag;
} else {
  type = game;
}

let gamedescription = "";
if (type == "music") {
  gamedescription = `A Game Boy music cartridge by ${developer}. Listen online for free.`;
} else {
  gamedescription = `A Game Boy homebrew ${type} by ${developer}. Play online for free.`;
}

let screenshot_url = "";

if (game.screenshots[0]) {
  screenshot_url =
    config.BASE_API_URL +
    "/entries/" +
    route.params.slug +
    "/" +
    game.screenshots[0];
}

let rom_endpoint = "";

game.files.forEach((file) => {
  if (file.playable) {
    rom_endpoint =
      config.BASE_API_URL + "/entries/" + game.slug + "/" + file.filename;
  }
});

useHead({
  title: gametitle + " - Homebrew Hub",
  meta: [
    { name: "og:title", content: gametitle },
    { name: "og:description", content: gamedescription },
    { name: "og:image", content: screenshot_url },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>

<template>
  <div class="grid">
    <div class="col-12 lg:col-0 xl:col-1"></div>
    <div class="col-12 lg:col-6 xl:col-5">
      <div class="card mb-0">
        <ClientOnly>
          <Emulator :gameData="game" :romEndpoint="rom_endpoint" />
        </ClientOnly>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-5">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <span class="gametitle">{{ game.title }}</span>
            <table>
              <tr v-if="game.tags">
                <td class="value-title">Tags</td>
                <td>
                  <template v-for="tag in game.tags">
                    <Chip>{{ tag }}</Chip
                    >&nbsp;
                  </template>
                </td>
              </tr>
              <tr v-if="game.developer">
                <td class="value-title">Developer</td>
                <td>{{ game.developer }}</td>
              </tr>
              <tr v-if="game.license">
                <td class="value-title">License</td>
                <td>{{ game.license }}</td>
              </tr>
              <tr v-if="game.date">
                <td class="value-title">Release Date</td>
                <td>{{ game.date }}</td>
              </tr>
              <tr v-if="game.typetag">
                <td class="value-title">Type</td>
                <td>
                  <Chip>{{ game.typetag }}</Chip>
                </td>
              </tr>
              <tr v-if="game.platform">
                <td class="value-title">Platform</td>
                <td>
                  <Chip v-tooltip="tooltip[game.platform]">{{
                    game.platform
                  }}</Chip>
                </td>
              </tr>
            </table>

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
            <br />
            <br />
            <span style="font-size: 0.9rem">
              <a
                :href="`https://github.com/gbdev/database/tree/master/entries/${game.slug}/game.json`"
                target="_blank"
              >
                Improve metadata for this entry </a
              ><br
            /></span>
          </div>
        </div>
      </div>
      <br />
      <div class="card mb-0">
        <h2>Controls</h2>
        <DataTable :value="controls" responsiveLayout="scroll">
          <Column field="gb" header="Game Boy"
            ><template #body="slotProps"
              ><Chip :class="buttonClass[slotProps.data.gb]">{{
                slotProps.data.gb
              }}</Chip></template
            ></Column
          >
          <Column field="kb" header="Keyboard"
            ><template #body="slotProps">{{
              slotProps.data.kb
            }}</template></Column
          >
        </DataTable>
      </div>
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
      buttonClass: {
        A: "ab-button",
        B: "ab-button",
        Start: "ss-button",
        Select: "ss-button",
        "← ↑ → ↓": "arrows",
      },
      controls: [
        { gb: "A", kb: "Z" },
        { gb: "B", kb: "X" },
        { gb: "Start", kb: "Enter" },
        { gb: "Select", kb: "Tab" },
        { gb: "← ↑ → ↓", kb: "← ↑ → ↓" },
      ],
      columns: [
        { field: "gb", header: "Game Boy" },
        { field: "kb", header: "Keyboard" },
      ],
      tooltip: {
        GB: "The cartridge was designed to be played on the original Game Boy",
        GBC: "The game supports Game Boy Color features",
        SGB: "The game supports Super Game Boy features",
      },
    };
  },
};
</script>
<style>
.value-title {
  font-weight: 600;
}
.ab-button {
  font-size: 1.25rem !important;
  font-weight: 500 !important;
  background-color: #781641 !important;
  padding: 0 0.4rem !important;
}
.ss-button {
  background: radial-gradient(#7a6c73, #948994) !important;
}

.arrows {
  background-color: #010202 !important;
}

.gametitle {
  font-size: 3rem;
  margin: 1.5rem 0 1rem;
  display: block;
}
</style>
