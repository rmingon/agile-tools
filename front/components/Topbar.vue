<template>
  <div class="flex items-center h-16 w-full">
    <div class="rounded-md mx-4 my-3 h-12 w-full bg-white items-center flex justify-between drop-shadow">
      <div class="flex items-center">
        <div class="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"/></svg>
        </div>
        <div class="ml-2 w-full">
            <input type="text" placeholder="Search (Ctrl+/)" class="focus:border-none border-none w-full">
        </div>
      </div>
      <div class="mr-3 flex items-center">
        <div class="bg-gray-100 hover:bg-gray-200 rounded-xl mr-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M12 20a8 8 0 1 1 0-16" opacity=".5"/><path stroke-linejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3"/></g></svg>
        </div>
        <NuxtLink class="cursor-pointer relative" to="/profile">
          <img src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Mittens" alt="avatar" class="w-7 rounded-full"/>
          <div class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1"></div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>