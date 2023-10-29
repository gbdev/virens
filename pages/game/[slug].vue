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


const images = [];
data.value.screenshots.forEach((url) => {
  images.push({
    itemImageSrc: config.BASE_API_URL + "/static/" + game.basepath + "/" + game.slug + "/" + url,
    thumbnailImageSrc:
      config.BASE_API_URL + "/static/" + game.basepath + "/" + game.slug + "/" + url,
  });
});

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
      config.BASE_API_URL + "/static/" + game.basepath + "/" + game.slug + "/" + file.filename;
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
        <h3>Emulator</h3>
        <ClientOnly>
          <template v-if="game.platform == 'GBA'">
            <Medusa :gameData="game" :romEndpoint="rom_endpoint" />
          </template>
          <template v-else>
            <Emulator :gameData="game" :romEndpoint="rom_endpoint" />
          </template>
        </ClientOnly>
      </div>
      <br />
      <div class="card mb-0" v-if="!touchEnabled || game.platform == 'GBA'">
        <h3>Controls</h3>
        <DataTable
          v-if="game.platform == 'GBA'"
          :value="controls_gba"
          responsiveLayout="scroll"
        >
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
    <div class="col-12 lg:col-6 xl:col-5">
      <div class="card mb-0">
        <h3>Homebrew Information</h3>
        <div class="flex justify-content-between mb-6">
          <div>
            <span class="gametitle">{{ game.title }}</span>
            <table>
              <tr v-if="game.platform">
                <td class="value-title">Platform</td>
                <td>
                  <Chip
                    :class="game.platform + ' tag'"
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
              <tr v-if="game.typetag">
                <td class="value-title">Type</td>
                <td>
                  <Chip :class="'typetag ' + game.typetag">{{
                    game.typetag
                  }}</Chip>
                </td>
              </tr>
              <tr v-if="game.tags">
                <td class="value-title">Tags</td>
                <td>
                  <template v-for="tag in game.tags">
                    <Chip
                      :class="'tag ' + tag.replace(' ', '-').toLowerCase()"
                      >{{ tag }}</Chip
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
                    style="padding: 0px"
                  />
                  &nbsp;
                </td>
                <td class="devtoolinfo">
                  <span v-if="game.devtoolinfo.engineName">
                    {{ game.devtoolinfo.engineName }}
                    {{ game.devtoolinfo.engineVersion }} (Engine)
                  </span>
                  <div v-else>
                    <span v-if="game.devtoolinfo.musicName">
                      {{ game.devtoolinfo.musicName }}
                      {{ game.devtoolinfo.musicVersion }} (Music)
                    </span>
                    <span v-if="game.devtoolinfo.toolsName">
                      {{ game.devtoolinfo.toolsName }}
                      {{ game.devtoolinfo.toolsVersion }} (Toolchains)
                    </span>

                    <span v-if="game.devtoolinfo.soundfxName">
                      {{ game.devtoolinfo.soundfxName }}
                      {{ game.devtoolinfo.soundfxVersion }} (Sound FX)
                    </span>
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

            <a v-if="game.website" :href="game.website" target="_blank"
              >&nbsp;<Button
                class="p-button-outlined"
                label="Website"
                icon="pi pi-external-link"
                iconPos="right"
              >
                Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <!-- Icon from https://github.com/tailwindlabs/heroicons -->
              </Button></a
            >

            <br />
            <br />
            <span style="font-size: 0.9rem">
              <a
                :href="`${game.baserepo}/tree/master/entries/${game.slug}/game.json`"
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
        <div class="justify-content-between mb-6">
          <h3>Gallery</h3>
          <div>
            <Galleria
              :value="images"
              :numVisible="5"
              containerStyle="max-width: 640px"
              :showItemNavigators="true"
              :showThumbnails="false"
            >
              <template #item="slotProps">
                <img
                  :src="slotProps.item.itemImageSrc"
                  :alt="slotProps.item.alt"
                  style="width: 100%; image-rendering: pixelated"
                />
              </template>
              <template #thumbnail="slotProps">
                <img
                  :src="slotProps.item.thumbnailImageSrc"
                  style="width: 32px"
                />
              </template>
            </Galleria>
          </div>
        </div>
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
      touchEnabled: false,
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
        { gb: "Select", kb: "Backspace" },
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
  mounted: function () {
    this.touchEnabled = 'ontouchstart' in document.documentElement;

  }
};
</script>
<style scoped>
.tag {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-radius: 3px;
  padding: 0.15rem 0.75rem;
  margin-bottom: 0.5rem;
}

.open-source {
  background-color: var(--teal-700);
}

.typetag {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-radius: 3px;
  padding: 0.15rem 0.75rem;
  margin-bottom: 0.25rem;
}

.game {
  background-color: var(--blue-700);
}

.demo {
  background-color: var(--green-700);
}

.music {
  background-color: var(--purple-700);
}

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
  overflow-wrap: break-word;
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
.icon {
  width: 18px;
  margin-left: 0.5rem;
}
</style>
