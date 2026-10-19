<script setup>
useHead({
  title: "Homebrew Hub",
});
const config = useRuntimeConfig().public;

// API calls

let stats_url = config.BASE_API_URL + "/api/stats";

let stats_data = useFetch(stats_url).data;

const formatCount = (n) => (n ?? 0).toLocaleString("en-US");

// Big numbers shown under the welcome card
const heroStats = computed(() => {
  const stats = stats_data.value;
  if (!stats) return [];
  return [
    { value: formatCount(stats.total), label: "Entries" },
    { value: formatCount(stats.platforms?.gb), label: "Game Boy" },
    { value: formatCount(stats.platforms?.gbc), label: "Game Boy Color" },
    { value: formatCount(stats.platforms?.gba), label: "Game Boy Advance" },
    { value: formatCount(stats.platforms?.nes), label: "NES" },
  ];
});
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
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-3 xl:col-3"></div>

    <div class="col-12">
      <div v-if="stats_data" class="stats-strip">
        <div v-for="stat in heroStats" :key="stat.label" class="stat">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

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
    <section class="col-12 section-header">
      <p class="eyebrow">Curated picks</p>
      <h2 class="section-title">Showcase</h2>
    </section>
    <Showcase
      v-for="(showcase, key, index) in showcases"
      :key="key"
      :title="showcase.title"
      :link="showcase.link"
      :spaced="index > 0"
    >
      <EventList
        v-if="showcase.endpoint == 'event'"
        :entries="entries[key]"
        :paginator="false"
      />
      <List v-else :entries="entries[key]" :paginator="false" />
    </Showcase>
  </div>
</template>
<script>
// Every showcase fetches its slugs one by one from
// /api/<endpoint>/<slug>.json, and links to its own "Browse all" page.
const SHOWCASES = {
  event: {
    title: "Events",
    link: "/events",
    endpoint: "event",
    slugs: [
      "gbajam21",
      "gbajam26",
      "gbajam24",
      "gbcompo25",
      "gbcompo21",
      "gbcompo23",
    ],
  },
  game: {
    title: "Games",
    link: "/search?typetag=game",
    endpoint: "entry",
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
    link: "/search?typetag=demo",
    endpoint: "entry",
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
    link: "/search?typetag=music",
    endpoint: "entry",
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
    link: "/search?typetag=tool",
    endpoint: "entry",
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

export default {
  data() {
    return {
      stats: null,
      showcases: SHOWCASES,
      entries: Object.fromEntries(Object.keys(SHOWCASES).map((k) => [k, []])),
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
      showcase.slugs.forEach((slug) => {
        fetch(
          config.BASE_API_URL +
            "/api/" +
            showcase.endpoint +
            "/" +
            slug +
            ".json",
        )
          .then((response) => response.json())
          .then((data) => {
            this.entries[key].push(data);
          });
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

<style scoped>
/* Small uppercase label above a heading */
.eyebrow {
  margin: 0 0 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--primary-color);
}

/* Stats strip: big monospaced numbers with small labels */
.stats-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem 3rem;
  padding: 1.5rem 0 1rem;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-value {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
    monospace;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--text-color);
}
.stat-label {
  margin-top: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-color-secondary);
}

/* Showcase section header, with a rule running to the edge */
/* Centered with rules on both sides, so it reads as a divider for the
   whole area rather than another row heading like Events or Games */
.section-header {
  padding: 3rem 1rem 1.5rem;
  text-align: center;
}
.section-title {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
}
.section-title::before,
.section-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: var(--surface-border);
}
</style>
