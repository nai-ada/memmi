<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div>
    <img :src="userStore.userAvatar" />
    <span>{{ userStore.userName }}</span>
  </div>
</template>

<style scoped></style>
