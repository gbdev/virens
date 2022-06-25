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
            <h3>Welcome to the new version of Homebrew Hub!</h3>
            <span class="block font-regular mb-3 main-text">
              Homebrew Hub is a community-led attempt to collect, archive and
              preserve every unofficial game and homebrew for Game Boy (Color)
              released through decades of passionate work. Each ROM can be
              easily downloaded or played directly in the browser, through an
              accurate emulator. <br />We currently have
              <b>{{ data.results }}</b> entries in the database.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-12 xl:col-12">
      <div>
        <div>
          <div>
            <List :entries="entries" :paginator="false" />
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
              JSON schema and the full data set is released under a permissive
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
    [
      "dangan",
      "unearthed",
      "rhythm-land",
      "shock-lobster",
      "ucity",
      "dango-dash",
    ].forEach((gameslug) => {
      fetch(this.config.BASE_API_URL + "/api/entry/" + gameslug + ".json")
        .then((response) => response.json())
        .then((data) => {
          this.entries.push(data);
        });
    });
  },
};
</script>
