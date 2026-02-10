<script setup>
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
  <router-view></router-view>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>

</style>
