<script setup>
const { data } = await useFetch(
  "https://hh3.gbdev.io/api/entry/720-sprites.json"
);

const game = data.value;
</script>

<template>
  {{ game }}
</template>
<script>
import Binjgb from "../../binjgb.js";

let emulator = null;
const binjgbPromise = Binjgb();
</script>
