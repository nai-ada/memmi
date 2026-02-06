<script setup>
import Canvas from "./components/Canvas.vue";
import { onMounted } from "vue";

async function establishConnection() {
  try {
    const response = await fetch("http://localhost:3000/connect");
    const data = await response.json();
    console.log("Connected:", data);
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

onMounted(establishConnection);
</script>

<template>
  <main>
    <!-- welcome page, imported from router.js -->
    <router-view />
  </main>
</template>

<style scoped></style>
