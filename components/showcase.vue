<script setup>
defineProps({
  title: String,
  link: String,
  entries: Array,
  spaced: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div
    class="col-12 lg:col-12 xl:col-12"
    :style="spaced ? 'margin-top: 2rem' : null"
  >
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      "
    >
      <h3>{{ title }}</h3>
      <a :href="link" style="font-size: 0.9rem">Browse all</a>
    </div>
    <div class="home-cards">
      <List :entries="entries" :paginator="false" />
    </div>
  </div>
</template>
