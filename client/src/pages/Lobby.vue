<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { socket } from "@/socket";

import Canvas from "@/components/Canvas.vue";
import ToolBar from "@/components/ToolBar.vue";
import InfoBar from "@/components/InfoBar.vue";

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
  <h1>Room {{ roomId }}</h1>
  <p>Share this link with friends!</p>
  <InfoBar></InfoBar>
  <ToolBar></ToolBar>
  <Canvas></Canvas>
</template>

<style scoped></style>
