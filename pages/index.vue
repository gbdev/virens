<script setup>
const { data } = await useFetch("https://hh3.gbdev.io/api/all?results=1000");
</script>
<template>
  Homebrew Hub is a community-led attempt to collect, archive and preserve every
  unofficial game and homebrew released for Game Boy produced through decades of
  passionate work. We currently have {{ data.results }} entries in the database.
</template>
