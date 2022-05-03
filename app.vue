<!-- Main app template -->
<template>
  <div class="p-grid">
    <div class="p-col-10 p-offset-1">
      <div>
        <Menubar :model="items">
          <template #start>
            <router-link to="/"
              ><b class="sitetitle">Homebrew Hub</b></router-link
            >
            &nbsp;
          </template>
          <span class="p-buttonset"></span>
          <template #item="{ item }">
            <router-link
              :to="item.to"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              ><Button
                @click="navigate"
                :href="href"
                :label="item.label"
                class="p-button-text"
              />
              <!--
              <a
                :href="href"
                @click="navigate"
                :class="{
                  'active-link': isActive,
                  'active-link-exact': isExactActive,
                }"
                >{{ item.label }}</a
              >-->&nbsp;
            </router-link>
          </template>
          <template #end>
            <InputText placeholder="Search" type="text" />
          </template>
        </Menubar>
      </div>
    </div>
    <div class="p-col-10 p-offset-1">
      <!-- Render the matched page here-->
      <NuxtPage />
    </div>
    <div class="p-col-10 p-offset-1">
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "./components/footer";

export default {
  name: "App",
  data() {
    return {
      items: [
        {
          label: "Games",
          icon: "",
          to: "/games/",
        },
        {
          label: "Demos",
          icon: "",
          to: "/demos",
        },
        {
          label: "gbcompo21",
          icon: "",
          to: "/gbcompo21",
        },
      ],
    };
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
</style>
