<script setup>
const { data } = await useFetch("https://hh3.gbdev.io/api/all?results=1000");

const entries = data.value["entries"];
const total_entries = data.value["results"];

useHead({
  title: "Homebrew Hub - Sitemap",
});
</script>

<template>
  <li v-for="item in entries">
    <a :href="'/game/' + item.slug"> {{ item.slug }} </a>
  </li>
</template>
