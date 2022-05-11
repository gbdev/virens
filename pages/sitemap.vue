<script setup>
const config = useRuntimeConfig().public;

const { data } = await useFetch(config.BASE_API_URL+"/api/all?results=1000");

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
