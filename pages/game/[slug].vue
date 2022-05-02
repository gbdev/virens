<script setup>
const route = useRoute();
const url = "https://hh3.gbdev.io/api/entry/" + route.params.slug + ".json";
const { data } = await useFetch(url);

const game = data.value;

const rom = await fetch("https://hh3.gbdev.io/entries/2048gb/2048.gb");

const romblob = await rom.blob();
</script>

<template>
  <div>
    <div class="p-grid">
      <div class="p-col">
        <ClientOnly>
          <GameEmulator :gamerom="romblob" />
        </ClientOnly>
      </div>
      <div class="p-col">
        <h1>{{ game.title }}</h1>
        <span v-if="game.developer">
          Developer: {{ game.developer }} <br
        /></span>
        <span v-if="game.tags"> Tags: </span>
        <template v-if="game.tags" v-for="tag in game.tags">
          <Chip>{{ tag }}</Chip
          >&nbsp; </template
        ><br />
        <span v-if="game.license"> License: {{ game.license }}<br /></span>

        Type: <Chip>{{ game.typetag }}</Chip> -
        <Chip v-tooltip="tooltip[game.platform]">{{ game.platform }}</Chip>
        <br />
        <br />
        <br />
        <a :href="rom_endpoint"
          ><Button label="Download ROM" icon="pi pi-download" iconPos="right"
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
</template>
<script>
export default {
  name: "Game",
  props: {
    msg: String,
  },
  data() {
    return {
      rom: "0",
      newRom: "0",
      tooltip: {
        GB: "The cartridge was designed to be played on the original Game Boy",
        GBC: "The game supports Game Boy Color features",
        SGB: "The game supports Super Game Boy features",
      },
      fps: 60,
      ticks: 0,
      height: 432,
      width: 480,
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
    };
  },
};
</script>
