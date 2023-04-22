<template>
  <div class="z-10 absolute bg-black/50 h-screen w-full top-0 left-0">
    <div class="w-1/2 bg-white mx-auto mt-10 rounded-lg">
      <div class="border-b p-3 items-center flex justify-between">
        <p class="text-xl font-bold">{{props.header}}</p>
        <div class="cursor-pointer" @click="emits('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></svg>
        </div>
      </div>
      <div class="p-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    header: string
  }

  const props = withDefaults(defineProps<Props>(), {
    header: ""
  })

  const emits = defineEmits<{
    (e: 'close'): void
  }>()
</script>