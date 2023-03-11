<script setup>
const config = useRuntimeConfig().public;

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
      <div class="col-12 md:col-4">
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
      <div class="col-12 md:col-2">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"> Title </span>
          <InputText @keyup.enter="handlesearch()" v-model="textQuery" placeholder="Text query"/>
        </div>
      </div>
      <div class="col-12 md:col-2">
        <div class="p-inputgroup">
          <Button
            label="Search"
            icon="pi pi-search"
            iconPos="right"
            class="p-button-outlined"
            @click="handlesearch()"
          />
        </div>
      </div>
    </div>
    <div v-if="entries != null">
      <h5>Results</h5>
      <List :entries="entries" />
    </div>
  </div>
</template>
<script>
import List from "../components/list";

export default {
  methods: {
    handlesearch: function () {
      let baseurl = this.config.BASE_API_URL + "/api/search?";
      let params = { results: 1000 };
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
      let url = baseurl + new URLSearchParams(params);
      console.log(url);
      fetch(url).then((response) => {
        let gameblob = response.json().then((data) => {
          this.entries = data["entries"];
        });
      });
    },
  },
  mounted: function () {
    console.log("mounted");
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
      ],
      selectedType: { name: "All", code: "all" },
      types: [
        { name: "All", code: "all" },
        { name: "Game", code: "game" },
        { name: "Demo", code: "demo" },
        { name: "Music", code: "music" },
        { name: "Tool", code: "homebrew" },
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
            { label: "GBA Winter Jam 2023", value: "event:gbawinterjam23"},
            { label: "GBAX2003", value: "event:gbax2003"},
            { label: "2004Mbit", value: "2004Mbit"},
          ],
        },
      ],
    };
  },
  components: { List },
};
</script>
