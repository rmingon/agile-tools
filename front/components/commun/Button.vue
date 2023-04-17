<template>
  <div class="text-center p-1">
      {{ label }}
  </div>
</template>

<script setup lang="ts">
  interface Props {
    label: string
  }

  const props = withDefaults(defineProps<Props>(), {
    label: ""
  })

</script>