import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';
import Message from 'muse-ui-message';
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont'

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

Vue.use(MuseUI);
Vue.use(Message);
Vue.use(Toast, {
  position: 'top',
  time: 2500,
  closeIcon: ':iconfont icon-baseline-close-px',               // 关闭的图标
  close: true,                      // 是否显示关闭按钮
  warningIcon: ':iconfont icon-priority_high_px_rounded',     // 提醒信息图标
  errorIcon: ':iconfont icon-warning'              // 错误信息图标
});

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
