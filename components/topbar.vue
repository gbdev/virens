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
        <Button
          disabled="disabled"
          label="//"
          class="disabled p-button-text mr-2 mb-2"
        />
      </li>
      <li>
        <a href="/games"
          ><Button label="Games" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/demos"
          ><Button label="Demoscene" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/music"
          ><Button label="Music" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/tools"
          ><Button label="Tools" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <Button
          disabled="disabled"
          label="//"
          class="disabled p-button-text mr-2 mb-2"
        />
      </li>
      <li>
        <a target="_blank" href="https://github.com/gbdev/homebrewhub-submit"
          ><Button label="Submit new game" class="p-button-text mr-2 mb-2"
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
  font-size: 1.85rem;
  font-family: "Eudoxus Sans";
  font-weight: 500;
}

.p-button-text {
  color: var(--text-color);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 500;
}
</style>
