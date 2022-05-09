<script setup>
const route = useRoute();
const a = route.params;

let url = "https://hh3.gbdev.io/api/all?results=1000";

var pagetitle = "HH - Music";

if (route.name == "music") {
  url = "https://hh3.gbdev.io/api/search?typetag=music&results=1000";
  pagetitle = "HH - Music";
} else if (route.name == "demos") {
  url = "https://hh3.gbdev.io/api/search?typetag=demo&results=1000";
  pagetitle = "HH - Demos";
} else if (route.name == "hb") {
  url = "https://hh3.gbdev.io/api/search?typetag=homebrew&results=1000";
  pagetitle = "HH - Tools";
} else {
  url = "https://hh3.gbdev.io/api/all?results=1000";
  pagetitle = "HH - Games";
}
const { data } = await useFetch(url);

const entries = data.value["entries"];
const total_entries = data.value["results"];

useHead({
  title: pagetitle,
});
</script>

<template>
  <List :entries="entries" />
</template>

<script>
import List from "../components/list";
</script>
