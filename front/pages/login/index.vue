<template>
  <div class="w-full h-screen flex">
    <div class="bg-blue-100/25 w-1/2 text-center flex-col my-7 ml-6 rounded-xl">
      <img src="/img/scrum-logo.png" class="mx-auto w-1/2 mt-10" />
      <h1 class="font-bold text-blue-600">Welcome to Agile Tools website</h1>
      <h3 class="text-xl text-gray-500 font-light mt-4 w-5/6 mx-auto">Nice to meet you ! You just need to sign in ou create a account if you don't have it again</h3>
    </div>
    <div class="w-1/2">
      <div class="mx-auto w-2/3 xl:w-5/12 my-32">
        <KeepAlive>
          <component :is="QUERY_TO_ROUTE[route.query.type]"/>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

  import SignUp from "~/components/login/SignUp.vue";
  import SignIn from "~/components/login/SignIn.vue";
  import ResetPassword from "~/components/login/ResetPassword.vue";
  import RecoveryPassword from "~/components/login/RecoveryPassword.vue";

  import { useRoute } from 'vue-router'
  const route = useRoute()

  const QUERY_TO_ROUTE = {
    'sign-in': SignIn,
    'sign-up': SignUp,
    'reset-password': ResetPassword,
    'recovery-password': RecoveryPassword
  }

</script>