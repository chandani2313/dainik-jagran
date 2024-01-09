import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

axios.defaults.baseURL = `https://stg-cards.jagranplay.com/api/v2`;

axios.defaults.headers.common["Authorization"] =
  "Bearer eU89IMQi3GbMeKTzYDHkfq1isAzEO2bTC2e8nUHSXrIDamCfudTP9uU-cG89HvAO";

import App from "./App.vue";
import router from "./router";

// import './assets/main.css'

// router.beforeEach((to, from, next) => {
//   if (to.name === "Home") {
//       const user = window.localStorage.getItem('pianoUser');
//       if (!user) {
//           next({
//               path: '/register'
//           });
//       }
//   }
// })

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
