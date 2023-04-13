<template>
  <div class="w-full h-screen flex">
    <div class="bg-red-200 w-1/2">

    </div>
    <div class="w-1/2">
      <div class="mx-auto w-1/3 my-40">
        <KeepAlive>
          <component :is="QUERY_TO_ROUTE[route.query.type]"/>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

  import SignUp from "~/components/login/SignUp.vue";
  import Signin from "~/components/login/SignIn.vue";

  import { useRoute } from 'vue-router'

  const route = useRoute()

  const QUERY_TO_ROUTE = {
      'SignIn': Signin,
      'SignUp': SignUp
  }

</script>