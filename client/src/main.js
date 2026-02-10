import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Welcome from "./pages/Welcome.vue";
import Workspace from "./pages/Workspace.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Welcome,
      name: "Welcome",
    },
    {
      path: "/workspace",
      component: Workspace,
      name: "Workspace",
    },
  ],
});

createApp(App).use(router).mount("#app");
