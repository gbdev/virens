<template>
  <div class="layout-footer">
    <div class="footer-links">
      <span class="font-medium">
        <a href="/stats">stats</a> -
        <a href="https://opencollective.com/gbdev" target="_blank">donate</a> -
        <a href="/sitemap">sitemap</a> -
        <a href="/disclaimer">disclaimer/DMCA</a> -
        <a href="https://stats.uptimerobot.com/P9A8kh07DG" target="_blank"
          >uptime</a
        >
        -
        <a href="https://gbdev.io/privacypolicy" target="_blank"
          >privacy policy</a
        >
        - <a href="/developers">API</a> - <a href="/credits">credits</a> -
        <a href="https://github.com/gbdev/virens" target="_blank"
          >source code</a
        >
        - <a href="https://gbdev.io" target="_blank">gbdev community</a></span
      >
    </div>
    <div class="break"></div>
    Powered by
    <a href="https://osuosl.org" target="_blank">
      <img
        class="osl-badge"
        src="https://osuosl.org/images/osllogo-white_0.png"
        alt="Oregon State University Open Source Lab"
      />
    </a>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.osl-badge {
  width: 150px;
  margin-top: 0px;
}
.break {
  flex-basis: 100%;
  height: 0;
}
.footer-links {
  text-align: center;
}
.layout-footer {
  flex-wrap: wrap;
  margin-top: 15px;
}
</style>
