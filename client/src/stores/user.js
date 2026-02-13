import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userName: "",
    userAvatar: "",
  }),
  persist: true,
});
