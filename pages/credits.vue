<script setup>
useHead({
  title: "HH - Credits",
});
</script>
<template>
  <div class="text-lg">
    <h1>Credits</h1>

    Homebrew Hub is the result of a huge commitment and sustained effort started
    in 2015 by the
    <a href="https://gbdev.io">gbdev</a> community. It is developed and
    maintained by <a href="https://github.com/avivace">Antonio Vivace</a> and
    <a href="https://github.com/gbdev/homebrewhub/graphs/contributors"
      >contributors</a
    >. You can support the gbdev community and push the development of Homebrew
    Hub by donating on
    <a href="https://opencollective.com/gbdev"> Open Collective </a> or
    sponsoring us on <a href="https://github.com/sponsors/gbdev"> GitHub </a>.
    Here follows a non comprehensive list of who contributed or helped in any
    way to make this possible.
    <h3>Software</h3>
    <a href="https://github.com/gbdev/virens">Virens</a>, the Homebrew Hub
    frontend your browser is executing right now, is powered by NuxtJS3, VueJS3.
    The UI is made with PrimeVue, PrimeFlex, PrimeIcons and fragments originally
    from Sakai Vue. <br />The
    <a href="https://github.com/gbdev/homebrewhub"> backend </a>, serving the
    API feeding content into this UI is a Django Rest Framework application. The
    API is public and you can find out more about how you can use it in your
    projects <a href="/developers">here</a>. <br /><br />
    The <i>games archives</i> are maintained and built by the community through
    public git repositories and the datasets are released as open data:
    <a href="https://github.com/gbdev/database">Game Boy</a>,
    <a href="https://github.com/gbadev-org/games"> Game Boy Advance</a>,
    <a href="https://github.com/nesdev-org/homebrew-db"> NES</a>. <br />
    <br />
    Emulation capabilities are provided by
    <a href="https://github.com/binji/binjgb" target="_blank">Binjgb</a>
    (GB/GBC), <a href="https://mgba.io/" target="_blank">mGBA</a> (GBA) and
    <a href="https://github.com/binji/binjnes" target="_blank">Binjnes</a> (NES)
    running in the browser through a webassembly build. <br />
    The "Developed with" information is provided by
    <a href="https://github.com/bbbbbr/gbtoolsid" target="_blank">gbtoolsid</a>.
    <br /><br />
    Everything just listed is released as open source software. Go check out the
    github repository, contribute and show your support to their awesome
    maintainers!

    <h3>Games</h3>
    Each entry and related asset is owned by the respective developers and
    authors. Please check out the entry details for the license terms under
    which they are released.
    <h3>Legacy special thanks</h3>
    Acknowlodgements from the original version of Homebrew Hub in Node,
    developed between 2017 and 2019:
    <ul>
      Everyone on the Game Boy Development
      <a href="https://discord.gg/gpBxq85">Discord Chat</a>
      who helped providing bug reports, feedback and ideas on the project.<br />
      <a href="https://github.com/anodium">Andrea Pascal</a
      >,
      <a href="https://github.com/barzamin">barz</a
      >,
      <a href="http://donaldhays.com/">Donald Hays</a>
      (GB JS emulator configuration code),
      <a href="https://github.com/tobiasvl">Tobias V. Langhoff </a
      >, beware.<br />
      <a
        href="https://github.com/gb-archive/homebrewhub-legacy/graphs/contributors"
        >Everyone</a
      >
      who contributed directly on the codebase:
      <a href="https://github.com/dennib"> Denni Bevilacqua</a
      >,
      <a href="https://github.com/avivace">Antonio Vivace</a
      >;<br />
      <a href="https://github.com/gbdev/database/graphs/contributors"
        >Contributors</a
      >
      of the Database.
      <br />
    </ul>
  </div>
</template>
