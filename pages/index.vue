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
              collect, archive and preserve <i>homebrew</i> software developed
              for Game Boy (Color) and the Game Boy Advance. We're building an
              open digital repository providing accurate metadata and emulating
              capabilities directly in the browser. <br />
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
    <div class="col-12 lg:col-12 xl:col-12">
      <div>
        <div>
          <div>
            <div class="card mb-0">
              <div class="home-cards">
                <div>
                  <h3>Games Showcase</h3>
                  <List :entries="entries" :paginator="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <h3>Emulation</h3>
            <span class="block font-regular text-lg mb-3">
              We use Webassembly builds of
              <a href="https://mgba.io/" target="_blank">mGBA</a> and
              <a href="https://github.com/binji/binjgb" target="_blank"
                >binjb</a
              >
              to provide seamless and accurate emulation capabilities directly
              in the browser.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <h3>Digital Preservation</h3>
            <span class="block font-regular text-lg mb-3">
              We are committed to build a digital memory of the Game Boy
              homebrew development scene. We salvaged some of the first ever
              unofficial software from the 90s and we keep working to harvest
              more.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <h3>Open and accessible</h3>
            <span class="block font-regular text-lg mb-3">
              The database is maintained on a
              <a href="https://github.com/gbdev/database"
                >public git repository</a
              >. Everyone can contribute and audit. Entries metadata follows a
              well defined JSON schema and the full dataset is released under a
              permissive license.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stats: null,
      entries: [],
    };
  },
  mounted: function () {
    let config = useRuntimeConfig().public;
    fetch(config.BASE_API_URL + "/api/stats")
      .then((response) => response.json())
      .then((data) => {
        this.stats = data;
      });

    let showcased_games = [
      "dangan",
      "unearthed",
      "rhythm-land",
      "shock-lobster",
      "ucity",
      "dango-dash",
      "varooom3d",
      "skyland",
      "inheritors-of-the-oubliette",
      "feline",
      "sym-merged",
      "hero-core-gba-port",
      "core-machina",
      "is-that-a-demo-in-your-pocket",
      "oh",
      "apotris",
      "sips",
      "porklike-gb",
    ];

    showcased_games.forEach((gameslug) => {
      fetch(config.BASE_API_URL + "/api/entry/" + gameslug + ".json")
        .then((response) => response.json())
        .then((data) => {
          this.entries.push(data);
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
