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
        <a href="/search" :class="linkClass('/search')">Search</a>
      </li>
      <li class="nav-divider" aria-hidden="true"></li>
      <li v-for="item in sections" :key="item.href">
        <a :href="item.href" :class="linkClass(item.href)">{{ item.label }}</a>
      </li>
      <li class="nav-divider" aria-hidden="true"></li>
      <li>
        <a
          class="nav-link"
          target="_blank"
          href="https://github.com/gbdev/homebrewhub-submit/issues/new?template=submit-game.yml"
          >Submit new game</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();

// /games, /demos, ... redirect to /search?typetag=..., so match on that
const sections = [
  { label: "Games", href: "/games", typetag: "game" },
  { label: "Demoscene", href: "/demos", typetag: "demo" },
  { label: "Music", href: "/music", typetag: "music" },
  { label: "Tools", href: "/tools", typetag: "tool" },
  { label: "Events", href: "/events" },
];

function isActive(href) {
  const typetag = route.query.typetag;
  if (href === "/search") {
    return route.path === "/search" && (!typetag || typetag === "all");
  }
  if (href === "/events") {
    return route.path === "/events" || route.path.startsWith("/event/");
  }
  const section = sections.find((item) => item.href === href);
  return route.path === "/search" && typetag === section?.typetag;
}

function linkClass(href) {
  return ["nav-link", { active: isActive(href) }];
}
</script>

<style>
.layout-topbar-logo a {
  color: var(--text-color);
  font-size: 1.85rem;
  font-family: "Schibsted Grotesk";
  font-weight: 600;
  letter-spacing: -0.02em;
}

.p-button-text {
  color: var(--text-color);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 500;
}
</style>

<style scoped>
.layout-topbar-menu {
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.75);
  font-family: "Schibsted Grotesk", var(--font-family);
  font-size: 1.15rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition:
    color 0.15s,
    background-color 0.15s;
}

.nav-link:hover {
  color: #ffffff;
  background-color: var(--surface-hover);
}

.nav-link.active {
  color: #ffffff;
}

/* Underline marking the current page */
.nav-link.active::after {
  content: "";
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 0.2rem;
  height: 2px;
  border-radius: 1px;
  background-color: var(--primary-color);
}

.nav-divider {
  width: 1px;
  height: 1.25rem;
  margin: 0 0.5rem;
  background-color: var(--surface-border);
}

/* Mobile dropdown: stacked links, dividers become horizontal rules */
@media (max-width: 991px) {
  .layout-topbar-menu {
    align-items: stretch;
  }

  .nav-divider {
    width: auto;
    height: 1px;
    margin: 0.25rem 0;
  }

  .nav-link.active::after {
    left: 0;
    right: auto;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    height: auto;
  }
}
</style>
