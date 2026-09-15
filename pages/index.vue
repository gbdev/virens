<script setup>
useHead({
  title: "Homebrew Hub",
});
const config = useRuntimeConfig().public;

// API calls

let stats_url = config.BASE_API_URL + "/api/stats";

let stats_data = useFetch(stats_url).data;
</script>
<template>
  <div class="grid">
    <div class="col-12 lg:col-3 xl:col-3"></div>
    <div class="col-12 lg:col-6 xl:col-6">
      <div class="brand-card card mb-0">
        <div class="">
          <div>
            <h3 class="main-text-title">Welcome!</h3>
            <span class="block font-regular mb-3 main-text">
              Homebrew Hub is a
              <a href="https://gbdev.io">community-led</a> initiative to
              collect, archive and preserve
              <a
                href="https://en.wikipedia.org/wiki/Homebrew_(video_games)"
                target="_blank"
                >homebrew</a
              >
              and
              <a href="https://en.wikipedia.org/wiki/Demoscene" target="_blank"
                >demoscene</a
              >
              software developed for Game Boy (Color), Game Boy Advance and NES.
              <br />
              <br />
              We're on a mission to build an open digital repository providing
              accurate metadata and emulating capabilities directly in the
              browser.
              <br />
              <br />
              <small>
                <a href="/stats">{{ stats_data.total }}</a>

                total entries are currently in the database.
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-3 xl:col-3"></div>

    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0" style="height: 100%">
        <div class="flex justify-content-between" style="margin-bottom: 1rem">
          <div>
            <h3>Emulation</h3>
            <span class="block font-regular text-lg">
              We use WebAssembly builds of
              <a href="https://mgba.io/" target="_blank">mGBA</a>,
              <a href="https://github.com/binji/binjnes" target="_blank"
                >binjnes</a
              >
              and
              <a href="https://github.com/binji/binjgb" target="_blank"
                >binjgb</a
              >
              to provide seamless and accurate emulation capabilities directly
              in the browser.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0" style="height: 100%">
        <div class="flex justify-content-between" style="margin-bottom: 1rem">
          <div>
            <h3>Digital Preservation</h3>
            <span class="block font-regular text-lg">
              We are committed to build a digital memory of the homebrew
              development scene. We salvaged some of the first ever unofficial
              software from the 90s and we keep working to harvest more.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0" style="height: 100%">
        <div class="flex justify-content-between" style="margin-bottom: 1rem">
          <div>
            <h3>Open and accessible</h3>
            <span class="block font-regular text-lg">
              The database is maintained on public git repositories (<a
                href="https://github.com/gbdev/database"
                >Game Boy</a
              >,
              <a href="https://github.com/gbadev-org/games"> Game Boy Advance</a
              >, <a href="https://github.com/nesdev-org/homebrew-db"> NES</a>).
              Everyone can contribute and audit. Homebrew metadata follows a
              well defined JSON schema and datasets are released under a
              permissive license.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-12 xl:col-12">
      <h1 style="text-align: center; margin-top: 2rem">Showcase</h1>
    </div>
    <Showcase title="Events" :spaced="true">
      <EventList :entries="events" :paginator="false" />
    </Showcase>
    <Showcase
      v-for="(showcase, key, index) in showcases"
      :key="key"
      :title="showcase.title"
      :link="'/search?typetag=' + key"
      :entries="entries[key]"
      :spaced="index > 0"
    />
  </div>
</template>
<script>
const SHOWCASES = {
  game: {
    title: "Games",
    slugs: [
      "snorpung_dangan-gb2",
      "unearthed",
      "rhythm-land",
      "gbamicrojam23",
      "ucity",
      "dango-dash",
      "varooom3d",
      "skyland",
      "benjelter_ormblok",
      "inky-and-the-alien-aquarium-demo",
      "sym-merged",
      "hero-core-gba-port",
      "core-machina",
      "gumpyfunction__feed-it-souls",
      "patmorita__hermano-game-boy",
      "apotris",
      "sips",
      "videogamestorytime_fortune-and-glory",
    ],
  },
  demo: {
    title: "Demoscene",
    slugs: [
      "back-to-color",
      "gejmbaj",
      "knark",
      "is-that-a-demo-in-your-pocket",
      "oh",
      "space-waste",
    ],
  },
  music: {
    title: "Music Cartridges",
    slugs: [
      "zilogized",
      "back-to-space",
      "freebie-gbs-2019",
      "xmas2016",
      "kabcorp__8bit-sunset",
      "playinstinct_neon-nova",
    ],
  },
  tool: {
    title: "Tools",
    slugs: [
      "lsdj",
      "carillon-editor",
      "oshf_tomato-do",
      "droneboy",
      "pearacidic__monster-orc-arina-a-game-boy-tool",
      "stopwatch-version-1",
    ],
  },
};

// No bulk "list events" endpoint exists yet, so fetch each event
// individually, same as the other showcases.
const EVENT_SLUGS = ["gbajam21"];

export default {
  data() {
    return {
      stats: null,
      showcases: SHOWCASES,
      entries: Object.fromEntries(Object.keys(SHOWCASES).map((k) => [k, []])),
      events: [],
    };
  },
  mounted: function () {
    let config = useRuntimeConfig().public;
    fetch(config.BASE_API_URL + "/api/stats")
      .then((response) => response.json())
      .then((data) => {
        this.stats = data;
      });

    Object.entries(this.showcases).forEach(([key, showcase]) => {
      showcase.slugs.forEach((gameslug) => {
        fetch(config.BASE_API_URL + "/api/entry/" + gameslug + ".json")
          .then((response) => response.json())
          .then((data) => {
            this.entries[key].push(data);
          });
      });
    });

    EVENT_SLUGS.forEach((eventslug) => {
      fetch(config.BASE_API_URL + "/api/event/" + eventslug + ".json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.events.push(data);
        });
    });
  },
};
</script>

<style type="text/css">
.brand-card {
  text-align: center;
}
.card {
  margin: 10px 10px 0px 10px;
}
.icon-widget {
  width: 105px;
  color: #8dd0ff;
  transform: rotate(15deg);
  position: relative;
  float: right;
}
</style>
