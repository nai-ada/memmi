<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const userName = ref("");
const userAvatar = ref("");
const avatarOptions = import.meta.glob("@/assets/images/avatars/*.png", {
  eager: true,
  import: "default",
});
const avatars = ref(Object.values(avatarOptions));

function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * avatars.value.length);
  userAvatar.value = avatars.value[randomIndex];
}

const goToWorkspacePage = () => {
  console.log(userName.value, userAvatar.value);
  router.push("/workspace");
};

onMounted(() => {
  getRandomAvatar();
});
</script>

<template>
  <div class="welcome">
    <header>
      <div>
        <h1>Memmi.io</h1>
        <h2>Digital Scrapbooking</h2>
      </div>
    </header>
    <main>
      <h2>Choose an avatar and a nickname</h2>
      <div class="avatar-selector">
        <img :src="userAvatar" alt="Selected avatar" />
      </div>
      <button class="randomize" @click="getRandomAvatar">↻</button>
      <label for="name" hidden>Enter Name</label>
      <input type="text" v-model="userName" id="name" name="name" />
      <button type="submit" @click="goToWorkspacePage">Enter</button>
    </main>
  </div>
</template>

<style scoped>
main {
  background-color: rgb(255, 108, 108);
}
</style>
