<template>
  <div class="flex items-center space-x-2">
    <h1 class="font-bold">Recover Password</h1>
    <img src="/img/icon/icon-fear.png" alt="icon smile" class="w-10">
  </div>
  <p class="text-gray-400">Give us you email account and we will send you instruction for reset your password</p>
  <form action="" method="post" class="space-y-3 mt-5">
    <div>
      <label for="email" class="block mb-2 text-gray-900 font-bold">Email :</label>
      <input type="email" id="email" class="bg-gray-50 border-2 text-gray-900 text-sm rounded-lg focus:drop-shadow-xl focus:border-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 !outline-none" placeholder="johndoe@email.com" required>
    </div>
    <div>
      <input type="submit" value="Reset Password" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full cursor-pointer">
    </div>
  </form>
  <div>
    Go back to
    <NuxtLink to="/login?type=sign-in" class="text-blue-800 text-bold">Login</NuxtLink>
  </div>
</template>

<script setup lang="ts">

</script>