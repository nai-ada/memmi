<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div class="wrapper">
    <div class="user-wrapper">
      <img :src="userStore.userAvatar" />
      <span>{{ userStore.userName }}</span>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 6px;
  border: 1px solid black;
}

.user-wrapper {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 5px 16px;
  border: 1px solid black;
  border-radius: 50px;
}

img {
  width: 28px;
  margin-right: 5px;
}

span {
  font-size: 16px;
}
</style>
