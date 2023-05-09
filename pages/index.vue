<script setup>
useHead({
  title: "Homebrew Hub",
});
const config = useRuntimeConfig().public;

let url = config.BASE_API_URL + "/api/all?results=1000";

const { data } = await useFetch(url);
</script>
<template>
  <div class="grid">
    <div class="col-12 lg:col-12 xl:col-12">
      <div class="card mb-0">
        <div class="">
          <div>
            <h3>
              Welcome to Homebrew Hub
              <svg
                class="icon-widget"
                enable-background="new 0 0 64 64"
                version="1.1"
                viewBox="0 0 64 64"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="object">
                  <g>
                    <polyline
                      fill="none"
                      points="56,43 56,61     8,61 8,3 51,3 51,8 56,8 56,37   "
                      stroke="var(--surface-900)"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="56"
                      x2="56"
                      y1="39"
                      y2="41"
                    />
                    <path
                      d="M46.05,25h-28.1C15.216,25,13,22.784,13,20.05    v-0.1c0-2.734,2.216-4.95,4.95-4.95h28.1c2.734,0,4.95,2.216,4.95,4.95v0.1C51,22.784,48.784,25,46.05,25z"
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="15"
                      x2="7"
                      y1="16"
                      y2="16"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="13"
                      x2="7"
                      y1="20"
                      y2="20"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="57"
                      x2="51"
                      y1="20"
                      y2="20"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="57"
                      x2="49"
                      y1="16"
                      y2="16"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="15"
                      x2="7"
                      y1="24"
                      y2="24"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="57"
                      x2="49"
                      y1="24"
                      y2="24"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="17"
                      x2="35"
                      y1="7"
                      y2="7"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="17"
                      x2="22"
                      y1="11"
                      y2="11"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="37"
                      x2="39"
                      y1="7"
                      y2="7"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="41"
                      x2="47"
                      y1="7"
                      y2="7"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="24"
                      x2="26"
                      y1="11"
                      y2="11"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="28"
                      x2="47"
                      y1="11"
                      y2="11"
                    />
                    <rect
                      fill="none"
                      height="20"
                      stroke="var(--surface-900)"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      width="32"
                      x="16"
                      y="29"
                    />
                    <polygon
                      fill="none"
                      points="32,57 30,55     28,53 32,53 36,53 34,55   "
                      stroke="var(--surface-900)"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="12"
                      x2="14"
                      y1="56"
                      y2="56"
                    />
                    <line
                      fill="none"
                      stroke="var(--surface-900)"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.2"
                      x1="50"
                      x2="52"
                      y1="56"
                      y2="56"
                    />
                  </g>
                </g>
              </svg>
            </h3>
            <span class="block font-regular mb-3 main-text">
              Homebrew Hub is a community-led initiative to collect, archive and
              preserve <i>homebrew</i> software developed for Game Boy (Color)
              and the Game Boy Advance.
              <br />
              Each ROM can be downloaded or played directly in the browser,
              through an accurate emulator. <br />
              <b>{{ data.results }}</b> entries are currently in the database.
            </span>
          </div>
        </div>
      </div>
    </div>
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
            <h3>Contribute</h3>
            <span class="block font-regular text-lg mb-3">
              Anyone can add new entries or improve the existing ones. Whatever
              it's something you just finished creating with your friends or a
              lost music cartridge from 20 years ago, check out the
              <a href="https://github.com/gbdev/database"
                >database repository </a
              >to get involved.
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
              The database is maintained on a public git repository. Everyone
              can contribute and audit. Entries metadata follows a well defined
              JSON schema and the full dataset is released under a permissive
              license.
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
      entries: [],
    };
  },
  mounted: function () {
    let config = useRuntimeConfig().public;

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
