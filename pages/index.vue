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
          <template #item="{ item }">
            <router-link
              :to="item.to"
              custom
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <a
                :href="href"
                @click="navigate"
                :class="{
                  'active-link': isActive,
                  'active-link-exact': isExactActive,
                }"
                >{{ item.label }}</a
              >&nbsp;
            </router-link>
          </template>
          <template #end>
            <InputText placeholder="Search" type="text" />
          </template>
        </Menubar>
      </div>
    </div>
    <div class="p-col-10 p-offset-1">
      <List />
    </div>
    <div class="p-col-10 p-offset-1">
      <!--<Footer />-->
    </div>
  </div>
</template>
<script>
import List from "../components/list";
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
.p-menuitem-icon {
  margin: 0 !important;
}
</style>
