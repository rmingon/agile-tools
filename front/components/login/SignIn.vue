<template>
    <div class="flex items-center space-x-2">
      <h1 class="font-bold">Login</h1>
      <img v-show="!focused" src="/img/icon/icon-smile.png" alt="icon smile" class="w-10">
      <img v-show="focused" src="/img/icon/icon-neutral.png" alt="icon smile" class="w-10">
    </div>
    <p class="text-gray-400 mt-1">Welcome back, please login to your account</p>
    <div class="space-y-3 mt-5">
        <div>
            <label for="email" class="block mb-2 text-gray-900 font-bold">Email :</label>
            <input type="email" v-model="login_state.email" id="email" class="bg-gray-50 border-2 text-gray-900 text-sm rounded-lg focus:drop-shadow-xl focus:border-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 !outline-none" placeholder="johndoe@email.com" required>
        </div>
        <div>
            <label for="password" class="block mb-2 text-gray-900 font-bold">Password :</label>
            <div class="flex">
                <input v-model="login_state.password" ref="target_password" :type="password_type" id="password" class="bg-gray-50 border-l-2 border-y-2 text-gray-900 text-sm rounded-l-xl focus:drop-shadow-xl focus:border-blue-500 focus:border-2 focus:border-blue-500 w-full p-2.5 !outline-none" placeholder="•••••••••" required>
                <div class="flex items-center cursor-pointer border-r-2 border-y-2 rounded-r-xl p-2" @click="password_showed = !password_showed">
                    <svg v-if="password_showed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9Z"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.54 4.71L3.25 4L20 20.75l-.71.71l-3.34-3.35c-1.37.57-2.87.89-4.45.89c-4.56 0-8.5-2.65-10.36-6.5c.97-2 2.49-3.67 4.36-4.82L2.54 4.71M11.5 18c1.29 0 2.53-.23 3.67-.66l-1.12-1.13c-.73.5-1.6.79-2.55.79C9 17 7 15 7 12.5c0-.95.29-1.82.79-2.55L6.24 8.41a10.64 10.64 0 0 0-3.98 4.09C4.04 15.78 7.5 18 11.5 18m9.24-5.5C18.96 9.22 15.5 7 11.5 7c-1.15 0-2.27.19-3.31.53l-.78-.78C8.68 6.26 10.06 6 11.5 6c4.56 0 8.5 2.65 10.36 6.5a11.47 11.47 0 0 1-4.07 4.63l-.72-.73c1.53-.96 2.8-2.3 3.67-3.9M11.5 8C14 8 16 10 16 12.5c0 .82-.22 1.58-.6 2.24l-.74-.74c.22-.46.34-.96.34-1.5A3.5 3.5 0 0 0 11.5 9c-.54 0-1.04.12-1.5.34l-.74-.74c.66-.38 1.42-.6 2.24-.6M8 12.5a3.5 3.5 0 0 0 3.5 3.5c.67 0 1.29-.19 1.82-.5L8.5 10.68c-.31.53-.5 1.15-.5 1.82Z"/></svg>
                </div>
            </div>
          <div class="flex font-light justify-between items-center text-gray-500 my-3">
            <div class="items-center flex">
              <input type="checkbox" name="" id="" class="mr-1" v-model="login_state.remember">
              Remember me
            </div>
            <div>
              <NuxtLink to="/login?type=recovery-password" >Forgot Password?</NuxtLink>
            </div>
          </div>
        </div>
        <div>
          <p v-if="fetch_error" class="font-bold text-red-500">{{fetch_error}}</p>
          <button @click="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full cursor-pointer">Sign In</button>
        </div>
    </div>
    <div>
        Don't have account ?
        <NuxtLink to="/login?type=sign-up" class="text-blue-800 text-bold">Create an account</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { useFocus } from '@vueuse/core'

interface Login {
  email: string
  password: string
  remember: boolean
}

const target_password = ref()
const { focused } = useFocus(target_password)
const fetch_error = ref<string>('')

const login_state : Login = {
  email: "",
  password: "",
  remember: false
}

const login_data : Ref<Login> = ref(login_state)

const password_showed = ref(false)
const password_type = computed(() => password_showed.value ? 'text' : 'password')

const submit = async () => {
  fetch_error.value = ""
  try {
    const data = await $fetch("http://127.0.0.1:3001/account/login", {
      method: "POST",
      body: login_data.value,
      headers: {
        Accept: 'application/json',
        version: '1'
      }
    })
    console.log(data)
  } catch (e: any) {
    if (e.statusCode === 401)
      fetch_error.value = "Bad email or password"
  }
}

</script>