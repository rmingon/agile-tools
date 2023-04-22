<template>
  <div class="flex items-center h-16 w-full">
    <div class="rounded-xl mx-4 my-3 h-12 w-full bg-white items-center flex justify-between drop-shadow">
      <div class="flex items-center">
        <div class="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M26 6v2.17l-20.36 3.7a2 2 0 0 0-1.64 2v4.34a2 2 0 0 0 1.64 2l2.36.35V24a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.26l6 1.09V26h2V6Zm-8 18h-8v-3.07l8 1.45ZM6 18.17v-4.34l20-3.63v11.6Z"/></svg>
        </div>
        <p class="font-light text-xs ml-2">
            New info
        </p>
      </div>
      <div class="mr-3 flex items-center">
        <div class="bg-gray-100 hover:bg-gray-200 rounded-xl mr-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M12 20a8 8 0 1 1 0-16" opacity=".5"/><path stroke-linejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3"/></g></svg>
        </div>
        <NuxtLink class="cursor-pointer" to="/profile">
          <img src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Mittens" alt="avatar" class="w-7 rounded-xl"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>