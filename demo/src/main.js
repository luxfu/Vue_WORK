import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store/index";
import ElementPlus from "element-plus"

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
