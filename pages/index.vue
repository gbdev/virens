<script setup>
const { data } = await useFetch("https://hh3.gbdev.io/api/all?results=1000");
</script>
<template>
  <div class="grid">
    <div class="col-12 lg:col-12 xl:col-12">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-6">
          <div>
            <span class="block text-500 font-medium mb-3">
              Homebrew Hub is a community-led attempt to collect, archive and
              preserve every unofficial game and homebrew released for Game Boy
              produced through decades of passionate work. We currently have
              {{ data.results }} entries in the database.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
