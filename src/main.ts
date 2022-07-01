import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Iconfont from '@/components/Iconfont.vue'

Vue.config.productionTip = false
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Iconfont',Iconfont)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
let width = document.documentElement.clientWidth
if(width>500){
  alert('为保证最佳体验，请在手机上浏览')
  document.body.style.boxShadow=' 0 0 8px rgba(00,00,00,.3)'
  document.body.style.overflow='hidden'
}
document.body.style.maxWidth='500px'
document.body.style.margin='auto'

