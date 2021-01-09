import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

Vue.use(MuseUI);
Vue.use(Toast, {
  position: 'top',
  time: 2000,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
