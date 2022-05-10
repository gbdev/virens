<template>
  <div class="layout-topbar">
    <span class="layout-topbar-logo"><a href="/">Homebrew Hub</a></span>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <a href="/search"
          ><Button label="Search" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/games"
          ><Button label="Games" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/demos"
          ><Button label="Demos" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/music"
          ><Button label="Music" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/hb"
          ><Button label="Tools" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Topbar",
};
</script>
<style>
.layout-topbar-logo a {
  color: var(--text-color);
}

.p-button-text {
  color: var(--text-color);
}
</style>
