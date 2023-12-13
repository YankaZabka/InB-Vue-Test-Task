import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue } from "bootstrap-vue";
import Fragment from "vue-fragment";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
