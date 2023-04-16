<template>
    <div class="flex">
      <Sidebar class="h-screen w-1/5"/>
      <div class="flex-col w-full bg-gray-100">
        <Topbar/>
        <div class="h-screen">
          <slot />
        </div>
      </div>
    </div>
</template>

<script setup>

</script>