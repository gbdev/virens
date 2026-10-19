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
    <div class="showcase-header">
      <h3>{{ title }}</h3>
      <a v-if="link" :href="link" class="browse-all">
        Browse all <i class="pi pi-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
    <div class="home-cards">
      <slot>
        <List :entries="entries" :paginator="paginator" />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.showcase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.showcase-header h3 {
  margin: 0;
}

/* Subtle text link with an arrow, brightening on hover */
.browse-all {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  color: var(--text-color-secondary);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.15s;
}
.browse-all .pi {
  font-size: 0.7rem;
  transition: transform 0.15s;
}
.browse-all:hover {
  color: var(--primary-color);
}
.browse-all:hover .pi {
  transform: translateX(3px);
}
</style>
