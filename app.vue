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
  font-size: 1.5rem;
}
</style>
