<template>
  <div class="welcome">
    <div class="main-heading">
      <h1>memmi.io</h1>
      <p>Welcome to memmi.io! To start, enter your name and select your avatar.</p>
    </div>

    <div class="welcome-wrapper">
      <div class="avatar-selector">
        <div id="avatar">Avatar</div>
      </div>

      <div class="enter-name">
        <label for="name" hidden>Enter Name</label>
        <input type="text" v-model="userName" id="name" name="name" placeholder="Enter Name">
        <button type="submit" @click="goToWorkspace">Enter</button>
      </div>
    </div>
  </div>
</template>

<script>
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

</script>

<style scoped></style>
