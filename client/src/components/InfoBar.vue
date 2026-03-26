<script setup>
import { useUserStore } from "@/stores/user";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { socket } from "@/socket";

const userStore = useUserStore();
const route = useRoute();
const roomId = ref(route.query.room);

onMounted(() => {
  if (roomId.value) {
    socket.emit("joinRoom", roomId.value);
    console.log(`Joined room: ${roomId.value}`);
    console.log(`Share: ${window.location.href}`);
  }
});
</script>

<template>
  <div class="wrapper">
    <h1>Room {{ roomId }}</h1>
    <p>Share this link with friends!</p>
    <div class="user-wrapper">

      <img :src="userStore.userAvatar" />
      <span>{{ userStore.userName }}</span>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 10px;
  background: orange;
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
