<template>
  <div class="drop-shadow-xl">
    <NuxtLink class="h-16 items-center flex ml-2" to="/">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72"><path fill="#9b9b9a" d="M50.902 27.521c0 1.225-.147 2.417-.424 3.557c-1.597 6.567-7.517 11.443-14.576 11.443s-12.979-4.876-14.576-11.443a15.04 15.04 0 0 1-.424-3.557c0-8.284 6.716-15 15-15s15 6.716 15 15z"/><path fill="#d0cfce" d="M31.931 12.927s-6.519 2.24-9.184 7.385c-1.16 2.113-3.006 3.505-1.42 10.766c1.585 7.26 10.56 11.047 10.56 11.047a15.023 15.023 0 0 0 11.139-11.047c.277-1.14.423-2.331.423-3.557c0-7.085-4.912-13.024-11.518-14.594zM16.764 58.738s-2-13.5 10-13.5c3.192 2.128 5.927 3.599 9 3.593h-.125c3.074.006 5.508-2.165 8.7-4.293c15.57 0 10.7 14.2 10.7 14.2"/><path fill="#9b9b9a" d="M28.45 52.893h15.561v5.824H28.45z"/><path fill="#9b9b9a" d="M44.745 45.666c-3.17 2.113-4.875 3-8.937 3.588c13.062.412 13.062 5.412 13.824 9.412h5.113s2-13-10-13z"/><path fill="#fadcbc" stroke="#fadcbc" d="M47.117 26.549c-.365-2.563-13.943-8.544-22.21-.807c0 0-.316 1.985-.316 3.132c0 7.828 5.077 14.173 11.34 14.173c6.261 0 11.338-6.345 11.338-14.173c0-.792.213.237-.152-2.325z"/><path d="M34.795 58.708a2 2 0 0 0-1.934-2.508h.006a2.001 2.001 0 0 0-1.934 2.508m10.564 0a2 2 0 0 0-1.934-2.508h.006a2.001 2.001 0 0 0-1.934 2.508"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16.87 57.807s-2-13 10-13c3.192 2.128 5.927 3.598 9 3.592h-.125c3.074.006 5.808-1.464 9-3.592c12 0 10 13 10 13m-6.953-29.731a9.455 9.455 0 0 0-5.673-4.598c-2.12-.621-4.13-.902-6.217-.843c-2.087-.06-4.096.222-6.216.844a9.452 9.452 0 0 0-5.673 4.597m29.851-2.62v4.771m-36.113-4.771v4.771"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M43.831 57.785v-4.808H28.57v4.808"/><path d="M41.93 26.954a2 2 0 1 1-4.001-.001a2 2 0 0 1 4.001.001m-8 0a2 2 0 1 1-4.001-.001a2 2 0 0 1 4.001.001m2 10.003c-1.152 0-2.304-.286-3.447-.858a1 1 0 1 1 .894-1.79c1.718.86 3.388.86 5.106 0a1 1 0 0 1 .894 1.79c-1.143.572-2.295.858-3.447.858z"/><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M46.235 34.236a17.147 17.147 0 0 0 1.034-5.92c0-.388-.013-.772-.037-1.151m-22.598-.088c-.028.408-.043.82-.043 1.238c0 7.828 5.077 14.173 11.34 14.173"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M36.556 39.343s7.04-.005 9.592-5.139"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M50.902 27.521c0 1.225-.147 2.417-.424 3.557c-1.597 6.567-7.517 11.443-14.576 11.443s-12.979-4.876-14.576-11.443a15.04 15.04 0 0 1-.424-3.557c0-8.284 6.716-15 15-15s15 6.716 15 15z"/></svg>
        </div>
        <div class="font-bold text-xl">
            AGILE TOOLS
        </div>
    </NuxtLink>
    <div class="flex-col justify-between">
      <div class="flex-col h-full">
        <NuxtLink :to="tab.to" v-for="tab in tabs" class="my-2 mx-3 rounded-md h-10 flex items-center hover:bg-gray-100 transform duration-100 cursor-pointer px-2 nuxt-link-exact-active text-gray-500 active:bg-gradient-to-r active:from-indigo-500 active:to-indigo-400 active:text-white">
          <div class="mr-2" v-html="tab.icon"></div>
          <p class="font-bold">{{ tab.label }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Tabs {
    label: string
    icon: string
    to: string
  }

  const tabs : Tabs[] = [
    {
      label: "Projects",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M30 20v-8h-8v3h-5V7a2 2 0 0 0-2-2h-5V2H2v8h8V7h5v18a2 2 0 0 0 2 2h5v3h8v-8h-8v3h-5v-8h5v3ZM8 8H4V4h4Zm16 16h4v4h-4Zm0-10h4v4h-4Z"/></svg>',
      to: 'project'
    },
    {
      label: "Sprint planning",
      icon: '<svg width="22" height="16" viewBox="0 0 32 32"><path d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H4V6h24z" fill="currentColor"/><path d="M21 20h-8a3.51 3.51 0 0 0-.88-1.86l3.8-6.64l-1.74-1l-3.78 6.62a3.35 3.35 0 0 0-.9-.12a3.5 3.5 0 1 0 3.15 5H21zM9.5 22a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9.5 22z" fill="currentColor"/><path d="M19 8h7v2h-7z" fill="currentColor"/><path d="M19 12h4v2h-4z" fill="currentColor"/></svg>',
      to: 'planning'
    },
    {
      label: "Daily stand-up",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="13" r="9" opacity=".5"/><path stroke-linecap="round" d="M15 13H9"/><path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"/></g></svg>',
      to: 'daily'
    },
    {
      label: "Sprint retrospective",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="m24 2l-6 6l1.4 1.4L23 5.8V19c0 5-4 9-9 9c-1.6 0-3.1-.4-4.3-1.1c.4.1.8.1 1.3.1c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8c0 6.1 4.9 11 11 11s11-4.9 11-11V5.8l3.6 3.6L30 8l-6-6zM5 19.6V19c0-3.3 2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6c-3.1 0-5.7-2.4-6-5.4z"/></svg>',
      to: 'retro'
    },
    {
      label: "Sprint review",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M23.9 10c-.6-.6-1.5-1-2.4-1s-1.8.4-2.4 1l-1.4-1.4c1-1 2.4-1.6 3.8-1.6s2.9.6 3.8 1.6L23.9 10z"/><circle cx="24" cy="5" r="1" fill="currentColor"/><circle cx="19" cy="5" r="1" fill="currentColor"/><path fill="currentColor" d="M15 0h13c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-3.5l-1.7 3l-1.8-1l2.3-4H28V2H15v10h5v2h-5c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2zm5 19v6c0 .6-.4 1-1 1h-5v2h5c1.7 0 3-1.3 3-3v-6h-2zm-4.6 1.4c-.8 1-2.1 1.6-3.4 1.6s-2.6-.6-3.4-1.6L7 21.6C8.2 23 10 24 12 24s3.8-.9 5-2.4l-1.6-1.2z"/><circle cx="15.5" cy="17.5" r="1.5" fill="currentColor"/><circle cx="8.5" cy="17.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="M10.1 26H5c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h5v-2H5c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h4l2.3 4l1.7-1l-2.9-5z"/></svg>',
      to: 'review'
    }
  ]
</script>