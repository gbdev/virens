<script setup>
useHead({
  title: "Homebrew Hub - Stats",
});
const config = useRuntimeConfig().public;

// API calls

let stats_url = config.BASE_API_URL + "/api/stats";

let stats_data = useFetch(stats_url).data;
</script>
<template>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-3 xl:col-3">
      <div class="card mb-0">
        <div>
          <h3>Platform</h3>
          <span class="block font-regular mb-3 main-text">
            <Chart type="doughnut" :data="chartData" :options="chartOptions" />
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3 xl:col-3">
      <div class="card mb-0">
        <div>
          <h3>Type</h3>
          <span class="block font-regular mb-3 main-text">
            <Chart
              type="doughnut"
              :data="chartTypeData"
              :options="chartOptions"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3 xl:col-3">
      <div class="card mb-0">
        <div>
          <h3>Tags</h3>
          <span class="block font-regular mb-3 main-text">
            <Chart type="bar" :data="chartTagsData" :options="chartOptions" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stats: null,
      entries: [],
      chartData: null,
      chartTypeData: null,
      chartTagsData: null,
      chartOptions: null,
    };
  },
  mounted: function () {
    let config = useRuntimeConfig().public;
    fetch(config.BASE_API_URL + "/api/stats")
      .then((response) => response.json())
      .then((data) => {
        this.stats = data;
        this.chartData = this.setChartData();
        this.chartTypeData = this.setchartTypeData();
        this.chartTagsData = this.setchartTagsData();
        this.chartOptions = this.setChartOptions();
      });
  },
  methods: {
    setChartOptions() {
      return {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
            },
          },
        },
      };
    },
    setChartData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ["GB", "GBC", "GBA"],
        datasets: [
          {
            data: [
              this.stats.platforms.gb,
              this.stats.platforms.gbc,
              this.stats.platforms.gba,
            ],
            backgroundColor: [
              documentStyle.getPropertyValue("--blue-500"),
              documentStyle.getPropertyValue("--yellow-500"),
              documentStyle.getPropertyValue("--green-500"),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue("--blue-400"),
              documentStyle.getPropertyValue("--yellow-400"),
              documentStyle.getPropertyValue("--green-400"),
            ],
          },
        ],
      };
    },
    setchartTypeData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ["Game", "Demo", "Music", "Tools"],
        datasets: [
          {
            data: [
              this.stats.typetag.game,
              this.stats.typetag.demo,
              this.stats.typetag.music,
              this.stats.typetag.tools,
            ],
            backgroundColor: [
              documentStyle.getPropertyValue("--blue-500"),
              documentStyle.getPropertyValue("--yellow-500"),
              documentStyle.getPropertyValue("--green-500"),
              documentStyle.getPropertyValue("--red-500"),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue("--blue-400"),
              documentStyle.getPropertyValue("--yellow-400"),
              documentStyle.getPropertyValue("--green-400"),
              documentStyle.getPropertyValue("--red-400"),
            ],
          },
        ],
      };
    },
    setchartTagsData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ["OSS", "RPG", "Puzzle", "Platform"],
        datasets: [
          {
            data: [
              this.stats.tags.oss,
              this.stats.tags.rpg,
              this.stats.tags.puzzle,
              this.stats.tags.platform,
            ],
            backgroundColor: [
              documentStyle.getPropertyValue("--blue-500"),
              documentStyle.getPropertyValue("--yellow-500"),
              documentStyle.getPropertyValue("--green-500"),
              documentStyle.getPropertyValue("--red-500"),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue("--blue-400"),
              documentStyle.getPropertyValue("--yellow-400"),
              documentStyle.getPropertyValue("--green-400"),
              documentStyle.getPropertyValue("--red-400"),
            ],
          },
        ],
      };
    },
  },
};
</script>

<style type="text/css">
.card {
  margin: 10px 10px 0px 10px;
}
.icon-widget {
  width: 105px;
  color: #8dd0ff;
  transform: rotate(15deg);
  position: relative;
  float: right;
}
</style>
