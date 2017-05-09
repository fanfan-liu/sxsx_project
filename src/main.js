import Vue from 'vue'
Vue.config.productionTip = false
require('./styles/lf_app.scss')
// import index from './scripts/components/index.vue'
import router from './scripts/router'
new Vue({
  el:"#app",
  // components:{index },
  template:'<router-view></router-view>',
  router
})
