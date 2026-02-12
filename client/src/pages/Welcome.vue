<!-- Composition API method (recommended) -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userName = ref("")
const userAvatar = ref("")

const goToWorkspace = () => {
  console.log(userName.value, userAvatar.value)
  router.push("/workspace")
}
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
      <div class="wrapper">
        <div class="avatar-wrapper">
          <h3>Avatar</h3>
          <label for="avatar" hidden>Avatar</label>
          <!-- avatar selector logic goes here -->
          <div class="placeholder"></div>
        </div>

        <div class="name-wrapper">
          <h3>Enter Name</h3>
          <label for="name" hidden>Enter Name</label>
          <input type="text" v-model="userName" id="name" name="name">
        </div>
      </div>

      <button type="submit" @click="goToWorkspace">Enter</button>

    </main>
  </div>
</template>

<!-- using Options API method -->
<!-- <script>
export default {
  name: "Welcome",
   data() {
    return {
      userName: "",
      userAvatar: "",
    };
  },
  methods: {
    goToWorkspace() {
    console.log(this.userName, this.userAvatar);  
      this.$router.push("/workspace");
    }
  }
};
</script> -->

<style scoped>
h1,
h2 {
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: rgb(36, 36, 36);
}

h1 {
  margin-top: 4rem;
}

h2,
h3 {
  font-weight: normal;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  margin-top: 5rem;
  padding: 2rem;
  margin: 0 auto;
}

.avatar-wrapper {
  display: flex;
}

.placeholder {
  border: 1px solid rgb(133, 165, 255);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgb(183, 199, 255);
}
</style>
