import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import VueKonva from 'vue-konva';


import Welcome from "./pages/Welcome.vue";
import Lobby from "./pages/Lobby.vue";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Welcome,
      name: "Welcome",
    },
    {
      path: "/lobby",
      component: Lobby,
      name: "Lobby",
      props: true,
    },
  ],
});

app.use(pinia);
app.use(router);
app.use(VueKonva);
app.mount("#app");
