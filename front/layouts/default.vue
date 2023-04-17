<template>
    <div class="flex">
      <Sidebar class="h-screen w-1/6"/>
      <div class="flex-col w-full bg-gray-200">
        <Topbar/>
        <div class="min-h-screen p-4">
          <slot />
        </div>
      </div>
    </div>
</template>

<script setup>

</script>