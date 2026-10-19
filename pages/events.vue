<script setup>
const description =
  "Browse homebrew development events for Game Boy, Game Boy Color, Game Boy Advance and NES: game jams, competitions and their entries.";

useHead({
  title: "Events - Homebrew Hub",
  meta: [
    { name: "description", content: description },
    { name: "og:title", content: "Events" },
    { name: "og:description", content: description },
  ],
});
</script>

<template>
  <div>
    <h5>Filters</h5>
    <div class="grid p-fluid">
      <div class="col-12 md:col-4 xl:col-3">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"> Name </span>
          <InputText
            @input="handlesearch"
            @keyup.enter="handlesearch()"
            v-model="textQuery"
            placeholder="Text query"
          />
        </div>
      </div>
      <div class="col-12 lg:col-2 md:col-3">
        <div class="p-inputgroup">
          <Button
            label="Reset"
            class="p-button-outlined"
            @click="resetsearch()"
          />
          <Button
            label="Search"
            icon="pi pi-search"
            iconPos="right"
            class="p-button"
            @click="handlesearch()"
          />
        </div>
      </div>
    </div>
    <br />
    <div v-if="events != null">
      <h5>{{ events.length }} Results</h5>

      <div v-if="events.length == 0">
        Welp, it looks like there are no events matching your query.
        <a href="#" @click="resetsearch">Reset?</a>
      </div>
      <EventList :entries="events" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    resetsearch: function () {
      this.textQuery = null;
      this.handlesearch();
    },
    handlesearch: function () {
      let config = useRuntimeConfig().public;
      let baseurl = config.BASE_API_URL + "/api/search/events?";
      let params = {};

      if (this.textQuery) {
        params["title"] = this.textQuery;
      }
      let url = baseurl + new URLSearchParams({ results: 10000, ...params });

      fetch(url).then((response) => {
        response.json().then((data) => {
          this.events = data["events"];
        });
      });

      this.$router.push({ query: params });
    },
  },
  mounted: function () {
    // Honor the query param, if any
    if (this.$route.query.title) {
      this.textQuery = this.$route.query.title;
    }
    this.handlesearch();
  },
  data() {
    return {
      events: null,
      textQuery: null,
    };
  },
};
</script>
<style scoped>
.p-inputgroup-addon {
  flex-shrink: 0;
}
</style>
