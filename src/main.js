import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import Helpers from 'muse-ui/lib/Helpers';
import 'muse-ui/dist/muse-ui.css';


Vue.use(Helpers);
Vue.use(MuseUI);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
