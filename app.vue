<!-- Main app template -->
<script setup>
useHead({
  meta: [{ name: "twitter:site", content: "@gbdev0" }],
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
.p-button.p-button-text {
  color: var(--gray-900);
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
</style>
