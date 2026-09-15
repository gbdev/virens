<script setup>
defineProps({
  title: String,
  link: { type: String, default: null },
  entries: Array,
  spaced: {
    type: Boolean,
    default: true,
  },
  paginator: {
    type: Boolean,
    default: false,
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
      <a v-if="link" :href="link" style="font-size: 0.9rem">Browse all</a>
    </div>
    <div class="home-cards">
      <slot>
        <List :entries="entries" :paginator="paginator" />
      </slot>
    </div>
  </div>
</template>
