import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';
import Message from 'muse-ui-message';

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

Vue.use(MuseUI);
Vue.use(Message);
Vue.use(Toast, {
  position: 'top',
  time: 2500,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
