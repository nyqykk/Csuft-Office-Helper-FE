import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import Helpers from 'muse-ui/lib/Helpers';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';

Vue.use(MuseUI);
Vue.use(Toast, {
  position: 'top',               // 弹出的位置
  time: 2000,                       // 显示的时长
});
Vue.use(Helpers);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
