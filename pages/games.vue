<script setup>
const route = useRoute();
const a = route.params;
const config = useRuntimeConfig().public;

let url = config.BASE_API_URL + "/api/all?results=2000";

var pagetitle = "HH - Music";

if (route.name == "music") {
  url = config.BASE_API_URL + "/api/search?typetag=music&results=1000";
  pagetitle = "HH - Music";
} else if (route.name == "demos") {
  url = config.BASE_API_URL + "/api/search?typetag=demo&results=1000";
  pagetitle = "HH - Demos";
} else if (route.name == "hb") {
  url = config.BASE_API_URL + "/api/search?typetag=homebrew&results=1000";
  pagetitle = "HH - Tools";
} else if (route.name == "gbcompo21") {
  url = config.BASE_API_URL + "/api/search?tags=gbcompo21&results=1000";
  pagetitle = "HH - GBCompo21";
} else if (route.name == "gba") {
  url = config.BASE_API_URL + "/api/search?platform=GBA&results=1000";
  pagetitle = "HH - Game Boy Advance";
} else {
  url = config.BASE_API_URL + "/api/search?typetag=game&results=1000";
  pagetitle = "HH - Games";
}
const { data } = await useFetch(url);

const entries = data.value["entries"];
const total_entries = data.value["results"];

useHead({
  title: pagetitle,
  meta: [{ name: "og:title", content: pagetitle }],
});
</script>

<template>
  <List :entries="entries" />
</template>

<script>
import List from "../components/list";
</script>
