<!-- Main app template -->
<script setup>
useHead({
  meta: [
    // Twitter additional stuff
    { name: "twitter:site", content: "@gbdev0" },
    { name: "twitter:card", content: "summary" },
    // Open Graph
    { name: "og:title", content: "Homebrew Hub" },
    {
      name: "og:description",
      content:
        "A digital collection of homebrew software produced for Game Boy (Color), playable directly in the browser through an accurate emulator.",
    },
    { name: "og:type", content: "website" },
    { name: "og:site_name", content: "Homebrew Hub" },
  ],
});
</script>
<template>
  <div>
    <Topbar />
    <div class="layout-main-container">
      <div class="layout-main"><NuxtPage /></div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "./components/footer.vue";
import Topbar from "./components/topbar.vue";

export default {
  name: "App",
  methods: {
    onWrapperClick() {
      return true;
    },
    onSidebarClick() {
      return true;
    },
  },
};
</script>
<style>
h1,
h2,
.product-name,
.gametitle {
  font-family: "Eudoxus Sans";
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sitetitle {
  text-decoration: none;
}
.p-menuitem-icon {
  margin: 0 !important;
}
.layout-main-container {
  padding: 7rem 2rem 2rem 2rem;
}

.card {
  padding: 1.5rem 2rem 0.1rem 2rem;
}
.main-text {
  font-size: 1.3rem;
}
@media (max-width: 576px) {
  .layout-main-container {
    padding: 6rem 0.5rem 2rem 0.5rem;
  }
}
</style>
