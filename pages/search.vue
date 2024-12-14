<script setup>
useHead({
  title: "HH - Search",
});
</script>

<template>
  <div>
    <h5>Filters</h5>
    <div class="grid p-fluid">
      <div class="col-12 md:col-4 xl:col-2">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"> Platform </span>
          <SelectButton
            v-model="selectedPlatform"
            :options="platforms"
            optionLabel="name"
          />
        </div>
      </div>
      <div class="col-12 md:col-4 xl:col-2">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"> Type </span>
          <Dropdown
            v-model="selectedType"
            :options="types"
            optionLabel="name"
          />
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"> Tags </span>
          <MultiSelect
            v-model="selectedTags"
            :options="groupedCities"
            optionLabel="label"
            placeholder="Select Tags"
            display="chip"
            optionGroupLabel="label"
            optionGroupChildren="items"
          />
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"> Title </span>
          <InputText
            @keyup.enter="handlesearch()"
            v-model="textQuery"
            placeholder="Text query"
          />
        </div>
      </div>
      <div class="col-12 lg:col-2 md:col-3">
        <div class="p-inputgroup">
          <Button
            label="Reset"
            class="p-button-outlined"
            @click="resetsearch()"
          />
          <Button
            label="Search"
            icon="pi pi-search"
            iconPos="right"
            class="p-button"
            @click="handlesearch()"
          />
        </div>
      </div>
    </div>
    <br />
    <div v-if="entries != null">
      <h5>{{ entries.length }} Results</h5>
      <div v-if="entries.length == 0">
        Welp, it looks like there are no results matching your query
      </div>
      <List :entries="entries" />
    </div>
  </div>
</template>
<script>
import List from "../components/list";

export default {
  methods: {
    resetsearch: function () {
      this.selectedPlatform = null;
      this.textQuery = null;
      this.selectedType = { name: "All", code: "all" };
      this.selectedTags = null;
    },
    handlesearch: function () {
      let config = useRuntimeConfig().public;
      let baseurl = config.BASE_API_URL + "/api/search?";
      let params = {};
      let tags = [];
      if (this.selectedTags) {
        this.selectedTags.forEach((tagobj) => {
          tags.push(tagobj["value"]);
        });
      }

      if (this.selectedPlatform) {
        params["platform"] = this.selectedPlatform.code;
      }
      if (tags != []) {
        params["tags"] = tags;
      }
      if (this.selectedType.name != "All") {
        params["typetag"] = this.selectedType.code;
      }
      if (this.textQuery) {
        params["q"] = this.textQuery;
      }
      let url = baseurl + new URLSearchParams({ results: 10000, ...params });

      fetch(url).then((response) => {
        let gameblob = response.json().then((data) => {
          this.entries = data["entries"];
        });
      });

      this.$router.push({ query: params });
    },
    setSearchParameters: function () {
      // Let's check if there are some query param we should honor
      if (this.$route.query.q) {
        this.textQuery = this.$route.query.q;
      }
      if (this.$route.query.platform) {
        if (
          ["gb", "gbc", "gba", "nes"].includes(
            this.$route.query.platform.toLowerCase(),
          )
        ) {
          this.selectedPlatform = {
            name: this.$route.query.platform.toUpperCase(),
            code: this.$route.query.platform.toUpperCase(),
          };
        }
      }
      if (this.$route.query.typetag) {
        if (
          ["all", "game", "demo", "music", "tool"].includes(
            this.$route.query.typetag.toLowerCase(),
          )
        ) {
          this.selectedType = {
            name:
              this.$route.query.typetag.charAt(0).toUpperCase() +
              this.$route.query.typetag.slice(1),
            code: this.$route.query.typetag.toLowerCase(),
          };
        }
      }
    },
  },
  mounted: function () {
    this.setSearchParameters();
    this.handlesearch();
  },
  data() {
    return {
      entries: null,
      selectedPlatform: null,
      textQuery: null,
      platforms: [
        { name: "GB", code: "GB" },
        { name: "GBC", code: "GBC" },
        { name: "GBA", code: "GBA" },
        { name: "NES", code: "NES" },
      ],
      selectedType: { name: "All", code: "all" },
      types: [
        { name: "All", code: "all" },
        { name: "Game", code: "game" },
        { name: "Demo", code: "demo" },
        { name: "Music", code: "music" },
        { name: "Tool", code: "tool" },
      ],
      selectedTags: null,
      groupedCities: [
        {
          label: "Gameplay",
          code: "gameplay",
          items: [
            { label: "Open Source", value: "Open Source" },
            { label: "RPG", value: "RPG" },
            { label: "Action", value: "Action" },
            { label: "Puzzle", value: "Puzzle" },
            { label: "Platform", value: "Platform" },
          ],
        },
        {
          label: "Events",
          code: "events",
          items: [
            { label: "GBA Jam 2021", value: "gbajam21" },
            { label: "GBA Winter Jam 2021", value: "gba-winter-jam-2021" },
            { label: "GBA Jam 2022", value: "gbajam22" },
            { label: "GB Compo 21", value: "gbcompo21" },
            { label: "GB Showdown 2022", value: "gb-showdown-22" },
            { label: "GB Compo 21 - Finalists", value: "gbcompo21-shortlist" },
            { label: "GBA Winter Jam 2023", value: "event:gbawinterjam23" },
            { label: "GBAX2003", value: "event:gbax2003" },
            { label: "2004Mbit", value: "2004Mbit" },
            { label: "GB Compo 23", value: "event:gbcompo23" },
          ],
        },
      ],
    };
  },
  components: { List },
};
</script>
