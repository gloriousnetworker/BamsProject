import { createApp } from "vue";
import App from "./App.vue";
import "../src/styleguide.css";
import "../src/globals.css";
//Vue.config.productionTip = false;
//new Vue({ render: (h) => h(App) }).$mount("#app");
import router from "./router";
import store from "./store";
import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
//import VueMq from "vue-mq";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(store).use(router).mount("#app");
