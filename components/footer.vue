<template>
  <div class="layout-footer">
    <div>
      <span class="font-medium ml-2">
        <a href="/stats">stats</a> - <a href="https://opencollective.com/gbdev" target="_blank">donate</a> - <a href="/sitemap">sitemap</a> -
        <a href="/disclaimer">disclaimer/DMCA</a> -
        <a href="/developers">API</a> - <a href="/credits">credits</a> -
        <a href="https://github.com/gbdev/virens" target="_blank">source code</a> -
        <a href="https://gbdev.io" target="_blank">gbdev community</a></span
      >
    </div>
    <div class="break"></div>
    <div>
      <a href="https://digitalocean.com" target="_blank"
        ><img class="do-badge" src="/imgs/DO_Powered_by_Badge_white.svg"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.do-badge {
  width: 175px;
  margin-top: 10px;
}
.break {
  flex-basis: 100%;
  height: 0;
}
.layout-footer {
  flex-wrap: wrap;
  margin-top: 15px;
}
</style>
