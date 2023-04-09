<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      {{ test }}
    </h1>
  </div>
</template>

<script setup lang="ts">
  import {onMounted} from "@vue/runtime-core";

  const test = ref({})
  onMounted(async () => {
    const response = await fetch('http://localhost:3001')
    console.log("Download complete", response);
    test.value = response
  })
</script>