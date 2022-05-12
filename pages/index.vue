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
        <div class="flex justify-content-between mb-6">
          <div>
            <span class="block font-medium mb-3 main-text">
              Homebrew Hub is a community-led attempt to collect, archive and
              preserve every unofficial game and homebrew released for Game Boy
              produced through decades of passionate work. We currently have
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
            <h3>Your game here?</h3>
            <span class="block font-medium text-lg mb-3">
              Anyone can contribute adding games to the database. Whatever it's
              something you just finished building with your friends or a lost
              ROM from the 90s, a Pull Request is all you need to add a new
              entry.
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
            <span class="block font-medium text-lg mb-3">
              We are committed to digitally preserve the past and the present of
              the Game Boy homebrew development scene. We salvaged some of the
              first ever unofficial software from the 90s and we keep working to
              harvest more.
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
            <span class="block font-medium text-lg mb-3">
              The database powering this project is maintained on a public git
              repository. Everyone can contribute and audit. Each game has a
              manifest following a well defined JSON schema and the full data
              set is released under a permissive license.
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
