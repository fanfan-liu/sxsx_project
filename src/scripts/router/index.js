import Vue from 'vue'
import Router from 'vue-router'
import index from '@/scripts/components/index.vue'
import fenlei from '@/scripts/components/z_classfy.vue'
import shopcar from '@/scripts/components/shopcar.vue'
import indexpage from '@/scripts/components/Indexpage.vue'
import user from '@/scripts/components/user.vue'
import search from '@/scripts/components/search.vue'
import searchList from '@/scripts/components/lf_search_list.vue'
import showgood from '@/scripts/components/showgood.vue'

import Login from '@/scripts/components/cys_login'
import Zhuce from '@/scripts/components/cys_zhuce'
import Zhaohui from '@/scripts/components/cys_zhaohui'
import Denglu from '@/scripts/components/cys_denglu'
import Seting from '@/scripts/components/cys_seting'
import Touxiang from '@/scripts/components/cys_touxiang'

import z_detail from '@/scripts/components/z_detail'
// import Date from '@/scripts/components/cys_date'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: index,
      redirect:'index',
      children:[
        {
          path:'index',
          name:'shouye',
          component: indexpage
        },
        {
          path:'fenlei',
          component:fenlei,
        },
        {
          path:'shopcar',
          component:shopcar
        },
        {
          path:'user',
          component:Denglu
        }
      ]
    },
    {
      path:'/classfy/search',
      component:search
    },
    {
        path:'/classfy/searchlist/:data',
        component:searchList
    },
    {
      path:'/classfy/showgood/:id',
      component:showgood
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Zhuce
    },
    {
      path:'/zhaohui',
      component:Zhaohui
    },
    {
      path:'/touxiang',
      component:Touxiang
    },
    {
      path:'/seting',
      component:Seting
    },
    {
      path:'/z_detail',
      component: z_detail
    }
  ]
})
