import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import Vue from 'vue'
import router from "./router";
import store from "./store/store";
import App from './App.vue'
import IonicVue from '@ionic/vue';

Vue.config.productionTip = false

Vue.use(IonicVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
