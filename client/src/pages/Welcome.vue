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
  <div class="wrapper">
    <div class="content">
      <header>
        <h1>Memmi.io</h1>
        <h2>Digital Scrapbooking</h2>
      </header>
      <main>
        <h3>Choose an avatar and a nickname</h3>
        <div class="avatar-selector">
          <img :src="userAvatar" alt="Selected avatar" />
        </div>
        <button class="randomize" @click="getRandomAvatar">↻</button>
        <label for="name" hidden>Enter Name</label>
        <input type="text" v-model="userName" id="name" name="name" />
        <button type="submit" @click="goToWorkspacePage">Enter</button>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* .wrapper {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.5),
    0 6px 20px 0 rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  min-width: 1200px;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(119, 58, 58);
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  border-radius: 8px;
  background-color: rgb(216, 199, 255);
  min-width: 1000px;
  min-height: 60vh;
}

.content {
  padding: 2rem;
}

h1,
h2 {
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}

h2 {
  margin-top: 0;
  font-size: 1.8rem;
}

h3 {
  font-size: 1.5rem;
} */

img {
  width: 120px;
}
</style>
