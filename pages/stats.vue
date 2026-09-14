<script setup>
useHead({
  title: "Homebrew Hub - Stats",
});
</script>
<template>
  <div class="grid">
    <div class="col-12">
      <h1 style="text-align: center">Statistics</h1>
    </div>
    <div class="col-12 md:col-6 lg:col-3 xl:col-3">
      <div class="card">
        <div v-if="stats">
          <h3>Entries</h3>
          <div class="stats-total">{{ stats.total }}</div>
          <table class="stats-table">
            <tbody>
              <tr>
                <td class="stats-label">Open Source</td>
                <td class="stats-value">{{ stats.tags.oss }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3 xl:col-3">
      <div class="card">
        <div>
          <h3>Platform</h3>
          <table v-if="stats" class="stats-table">
            <tbody>
              <tr>
                <td class="stats-label">GB</td>
                <td class="stats-value">{{ stats.platforms.gb }}</td>
              </tr>
              <tr>
                <td class="stats-label">GBC</td>
                <td class="stats-value">{{ stats.platforms.gbc }}</td>
              </tr>
              <tr>
                <td class="stats-label">GBA</td>
                <td class="stats-value">{{ stats.platforms.gba }}</td>
              </tr>
              <tr>
                <td class="stats-label">NES</td>
                <td class="stats-value">{{ stats.platforms.nes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3 xl:col-3">
      <div class="card">
        <div>
          <h3>Type</h3>
          <table v-if="stats" class="stats-table">
            <tbody>
              <tr>
                <td class="stats-label">Game</td>
                <td class="stats-value">{{ stats.typetag.game }}</td>
              </tr>
              <tr>
                <td class="stats-label">Demo</td>
                <td class="stats-value">{{ stats.typetag.demo }}</td>
              </tr>
              <tr>
                <td class="stats-label">Music</td>
                <td class="stats-value">{{ stats.typetag.music }}</td>
              </tr>
              <tr>
                <td class="stats-label">Tools</td>
                <td class="stats-value">{{ stats.typetag.tools }}</td>
              </tr>
            </tbody>
          </table>
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
    };
  },
  mounted: function () {
    let config = useRuntimeConfig().public;
    fetch(config.BASE_API_URL + "/api/stats")
      .then((response) => response.json())
      .then((data) => {
        this.stats = data;
      });
  },
};
</script>

<style scoped>
.card {
  margin: 10px 10px 20px 10px;
  height: calc(100% - 20px);
  padding-bottom: 0.75rem;
}
.stats-table {
  width: 100%;
  margin-bottom: 0.5rem;
}
.stats-table td {
  padding: 0.35rem 0;
}
.stats-table .stats-value {
  text-align: right;
  font-weight: 600;
  font-family: monospace;
}
.stats-total {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: monospace;
}
.icon-widget {
  width: 105px;
  color: #8dd0ff;
  transform: rotate(15deg);
  position: relative;
  float: right;
}
</style>
