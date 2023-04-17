<template>
  <div class="bg-white flex w-full bg-white h-screen drop-shadow-xl rounded-lg">
    <div class="w-1/5 border-r">
      <div class="flex-col text-center">
        <div class="justify-center flex mt-12">
          <img src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Mittens" alt="avatar" class="w-24 rounded-full ring ring-2 ring-offset-4"/>
        </div>
        <div class="mt-3">
            <span class="font-bold text-xl">Username</span>
        </div>
        <div class="mb-10">
          <span class="text-gray-400 test-xs">mymail@mail.fr</span>
        </div>
        <div class="h-10 flex items-center hover:bg-blue-100 transform duration-100 hover:border-r-2 hover:border-blue-600 cursor-pointer px-2 nuxt-link-exact-active text-sm mt-4">
          <div class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"/></svg>
          </div>
          <p class="font-light text-sm">Personal information</p>
        </div>
        <div class="h-10 flex items-center hover:bg-blue-100 transform duration-100 hover:border-r-2 hover:border-blue-600 cursor-pointer px-2 nuxt-link-exact-active text-sm mt-4">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M12 29a1 1 0 0 1-.92-.62L6.33 17H2v-2h5a1 1 0 0 1 .92.62L12 25.28l8.06-21.63A1 1 0 0 1 21 3a1 1 0 0 1 .93.68L25.72 15H30v2h-5a1 1 0 0 1-.95-.68L21 7l-8.06 21.35A1 1 0 0 1 12 29Z"/></svg>
            </div>
            <p class="font-light text-sm">Activity Monitor</p>
        </div>
        <div class="h-10 flex items-center hover:bg-blue-100 transform duration-100 hover:border-r-2 hover:border-blue-600 cursor-pointer px-2 nuxt-link-exact-active text-sm mt-4">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.152 5.152 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z"/></svg>
            </div>
            <p class="font-light text-sm">Notifications</p>
        </div>
        <div class="h-10 flex items-center hover:bg-blue-100 transform duration-100 hover:border-r-2 hover:border-blue-600 cursor-pointer px-2 nuxt-link-exact-active text-sm mt-4">
          <div class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="m25 14l-2.1-1c-1.7-.8-2.9-2.6-2.9-4.5V2h10v6.5c0 1.9-1.1 3.7-2.9 4.5L25 14zM22 4v4.5c0 1.2.7 2.2 1.7 2.7l1.3.6l1.3-.6c1-.5 1.7-1.6 1.7-2.7V4h-6z"/><path fill="currentColor" d="M28 16v6H4V6h12V4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8v4H8v2h16v-2h-4v-4h8c1.1 0 2-.9 2-2v-6h-2zM18 28h-4v-4h4v4z"/></svg>
          </div>
          <p class="font-light text-sm">Security Settings</p>
        </div>
        <div class="h-10 flex items-center hover:bg-blue-100 transform duration-100 hover:border-r-2 hover:border-blue-600 cursor-pointer px-2 nuxt-link-exact-active text-sm mt-4">
          <div class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><circle cx="21.5" cy="7.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="M14.414 20H9v-5.414l6.03-6.03A5.352 5.352 0 0 1 15 8a6 6 0 1 1 6 6a5.358 5.358 0 0 1-.556-.03zM11 18h2.586l6.17-6.17l.518.095A3.935 3.935 0 0 0 21 12a4.05 4.05 0 1 0-3.925-3.273l.095.517l-6.17 6.17zm17 2h-9v2h9v6H4v-6h2v-2H4a2.002 2.002 0 0 0-2 2v6a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2v-6a2.002 2.002 0 0 0-2-2z"/><circle cx="7" cy="25" r="1" fill="currentColor"/></svg>
          </div>
          <p class="font-light text-sm">Password change</p>
        </div>
      </div>
    </div>
    <div class="w-full">

    </div>
  </div>
</template>
<script setup lang="ts">
</script>