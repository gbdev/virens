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
          class="p-button-text mr-2 mb-2"
        />
      </li>
      <li>
        <a href="/games/gba"
          ><Button label="GBA" class="p-button-text mr-2 mb-2"
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
          ><Button label="Demos" class="p-button-text mr-2 mb-2"
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
        <a href="/events/gbcompo21"
          ><Button label="gb compo 21" class="p-button-text mr-2 mb-2"
        /></a>
      </li>
      <li>
        <a href="/events/gbajam22"
          ><Button label="GBA Jam 22" class="p-button-text mr-2 mb-2"
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
