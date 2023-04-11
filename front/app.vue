<template>
    <NuxtLayout v-if="route_name !== ''" >
        <NuxtPage />
    </NuxtLayout>
    <NuxtPage v-else/>
</template>

<script setup lang="ts">
    const route_name = useRoute().name
</script>