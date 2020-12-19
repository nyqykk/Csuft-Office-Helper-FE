import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import Helpers from 'muse-ui/lib/Helpers';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';
import Vconsole from "vconsole";

Vue.prototype.$bus = new Vue()
const vconsole = new Vconsole();
Vue.config.productionTip = false

Vue.use(vconsole);
Vue.use(MuseUI);
Vue.use(Toast, {
  position: 'top',
  time: 2000,
});
Vue.use(Helpers);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
