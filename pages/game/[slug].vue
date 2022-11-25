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

/* Date conversion */

let dateObject = new Date();

if (isNaN(game.date) != true) {
  dateObject = new Date(game.date * 1000);
} else if (typeof game.date == "string") {
  dateObject = new Date(game.date);
}

const dateString = dateObject.toLocaleString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/* Head metadata */

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
  <Dialog
    :modal="true"
    position="left"
    :dismissableMask="true"
    header="''Developed with'' info"
    v-model:visible="display"
  >
    <p>
      This information is provided by
      <a href="https://github.com/bbbbbr/gbtoolsid" target="_blank">gbtoolsid</a
      >, a tool which <i>attempts</i> to detect the tools used to develop a Game
      Boy ROM through binary fingerprints.
    </p>
    <p>
      Game engine (e.g. GB Studio), Audio driver (e.g. Carillon Player),
      Toolchain (e.g. GBDK) and Sound FX driver (e.g. FX Hammer) can be
      identified.
    </p>
    <p>
      If the line is not present, the tool returned no results. Please report
      any bug or failed detection in the repository.
    </p>
  </Dialog>
  <div class="grid">
    <div class="col-12 lg:col-0 xl:col-1"></div>
    <div class="col-12 lg:col-6 xl:col-5">
      <div class="card mb-0">
        <ClientOnly>
          <template v-if="game.platform == 'GBA'">
            <Medusa :gameData="game" :romEndpoint="rom_endpoint" />
          </template>
          <template v-else>
            <Emulator :gameData="game" :romEndpoint="rom_endpoint" />
          </template>
        </ClientOnly>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-5">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <span class="gametitle">{{ game.title }}</span>
            <table>
              <tr v-if="game.platform">
                <td class="value-title">Platform</td>
                <td>
                  <Chip
                    :class="game.platform"
                    v-tooltip="tooltip[game.platform]"
                    >{{
                      {
                        GBA: "Game Boy Advance",
                        GB: "Game Boy",
                        GBC: "Game Boy Color",
                      }[game.platform]
                    }}</Chip
                  >
                </td>
              </tr>
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
              <tr v-if="dateString != 'Invalid Date' && game.date">
                <td class="value-title">Release Date</td>
                <td>{{ dateString }}</td>
              </tr>
              <tr v-if="game.typetag">
                <td class="value-title">Type</td>
                <td>
                  <Chip>{{ game.typetag }}</Chip>
                </td>
              </tr>
              <tr
                v-if="
                  game.devtoolinfo.musicName ||
                  game.devtoolinfo.toolsName ||
                  game.devtoolinfo.engineName ||
                  game.devtoolinfo.soundfxName
                "
              >
                <td class="value-title devtoolinfo">
                  Developed with<Button
                    @click="display = true"
                    icon="pi pi-question-circle"
                    class="p-button-text"
                  />
                  &nbsp;
                </td>
                <td class="devtoolinfo">
                  <p v-if="game.devtoolinfo.engineName">
                    {{ game.devtoolinfo.engineName }}
                    {{ game.devtoolinfo.engineVersion }} (Engine)
                  </p>
                  <div v-else>
                    <p v-if="game.devtoolinfo.musicName">
                      {{ game.devtoolinfo.musicName }}
                      {{ game.devtoolinfo.musicVersion }} (Music)
                    </p>
                    <p v-if="game.devtoolinfo.toolsName">
                      {{ game.devtoolinfo.toolsName }}
                      {{ game.devtoolinfo.toolsVersion }} (Toolchains)
                    </p>

                    <p v-if="game.devtoolinfo.soundfxName">
                      {{ game.devtoolinfo.soundfxName }}
                      {{ game.devtoolinfo.soundfxVersion }} (Sound FX)
                    </p>
                  </div>
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
        <DataTable v-if="game.platform=='GBA'" :value="controls_gba" responsiveLayout="scroll">
          <Column field="gb" header="Game Boy Advance"
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
        <DataTable v-else :value="controls" responsiveLayout="scroll">
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
import Dialog from "primevue/dialog";

export default {
  name: "Game",
  props: {
    msg: String,
  },
  data() {
    return {
      display: false,
      buttonClass: {
        A: "ab-button",
        B: "ab-button",
        Start: "ss-button",
        Select: "ss-button",
        "← ↑ → ↓": "arrows",
      },
      controls: [
        { gb: "A", kb: "X" },
        { gb: "B", kb: "Z" },
        { gb: "Start", kb: "Enter" },
        { gb: "Select", kb: "Tab" },
        { gb: "← ↑ → ↓", kb: "← ↑ → ↓" },
      ],
      controls_gba: [
        { gb: "A", kb: "X" },
        { gb: "B", kb: "Z" },
        { gb: "Start", kb: "Enter" },
        { gb: "Select", kb: "Tab" },
        { gb: "← ↑ → ↓", kb: "← ↑ → ↓" },
        { gb: "L", kb: "A" },
        { gb: "R", kb: "S" },
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
.devtoolinfo {
  padding-top: 10px;
}

.devtoolinfo p {
  line-height: 1;
}
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

.GB {
  border-radius: 0.2rem !important;
  padding: 0.15rem 0.75rem !important;
  font-size: 1rem;
  padding: 0.5rem 3rem;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #9bbc0f, #447144);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #3f4b5b inset;
}

.GBA {
  border-radius: 0.2rem !important;
  padding: 0.15rem 0.75rem !important;
  font-size: 1rem;
  padding: 0.5rem 3rem;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #5e48ff, #1e00ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #3f4b5b inset;
}

.GBC {
  border-radius: 0.2rem !important;
  padding: 0.15rem 0.75rem !important;
  font-size: 1rem;
  padding: 0.5rem 3rem;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #6d6b9e, #9a2257);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #3f4b5b inset;
}
</style>
