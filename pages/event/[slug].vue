<!--
  The main event view. Fetches metadata about the event and renders its
  details, logo and results. Unlike the game view, there is no emulator or
  controls section here.
-->
<script setup>
const route = useRoute();
const config = useRuntimeConfig().public;

const url = config.BASE_API_URL + "/api/event/" + route.params.slug + ".json";
const { data } = await useFetch(url);
const event = data.value;

const periodString = formatEventPeriod(event.period);

const websiteList = Array.isArray(event.website)
  ? event.website
  : event.website
    ? [event.website]
    : [];

const sortedResults = [...(event.results || [])].sort(
  (a, b) => a.rank - b.rank,
);

let logoUrl = "";
if (event.logo) {
  logoUrl =
    config.BASE_API_URL +
    "/static/" +
    event.basepath +
    "/events/" +
    event.slug +
    "/" +
    event.logo;
}

const eventdescription =
  `${event.name}, a homebrew development event` +
  (periodString ? ` (${periodString})` : "") +
  ".";

const eventTag = event.slug === "gbajam21" ? "gbajam21" : `event:${event.slug}`;
const entriesUrl =
  config.BASE_API_URL +
  "/api/search?" +
  new URLSearchParams({ results: 10000, tags: eventTag });
const { data: entriesData } = await useFetch(entriesUrl);
const entries = entriesData.value?.entries || [];

useHead({
  title: event.name + " - Homebrew Hub",
  meta: [
    { name: "og:title", content: event.name },
    { name: "og:description", content: eventdescription },
    { name: "og:image", content: logoUrl },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>

<template>
  <div class="grid">
    <div class="col-12 lg:col-0 xl:col-1"></div>
    <div class="col-12 lg:col-5 xl:col-5">
      <div class="card mb-0" v-if="logoUrl">
        <img
          :src="logoUrl"
          :alt="event.name"
          style="width: 100%; image-rendering: pixelated"
        />
      </div>
    </div>
    <div class="col-12 lg:col-5 xl:col-5">
      <div class="card mb-0" style="padding-bottom: 1.5rem">
        <h3>Event</h3>
        <span class="eventtitle">{{ event.name }}</span>
        <table>
          <tr v-if="periodString">
            <td class="value-title">Period</td>
            <td>{{ periodString }}</td>
          </tr>
          <tr v-if="websiteList.length">
            <td class="value-title">Website</td>
            <td>
              <template v-for="(site, index) in websiteList" :key="site">
                <a :href="site" target="_blank">{{ site }}</a>
                <template v-if="index < websiteList.length - 1">, </template>
              </template>
            </td>
          </tr>
        </table>
      </div>
      <br />
    </div>
    <Showcase
      title="Entries"
      :entries="entries"
      :spaced="true"
      :paginator="true"
    />
  </div>
</template>

<style scoped>
.value-title {
  font-weight: 600;
}
.eventtitle {
  font-size: 3rem;
  margin: 1.5rem 0 1rem;
  overflow-wrap: break-word;
  display: block;
}
</style>
