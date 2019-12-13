import Vue from 'vue'
import VueRouter from 'vue-router'
import move from '../components/move.vue'
import cinema from '../components/cinema.vue'
import user from '../components/user.vue'

import movedetail from '../page/move/movedetail.vue'
import movedetail02 from '../page/move/movedetail02.vue'

import everydetail from '../components/detail.vue'
import detail02 from '../components/detail02.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/move',
    component: move,
    children:[
      {
        path:'detail',
        component:movedetail
      },
      {
        path:'soon',
        component:movedetail02,
        children:[
          {
            path:'/move/detail/soon/details',
            component:everydetail,
          }
        ]
      },
      {
        path:"/move/soon/detail02",
        component:detail02,
      },
     ]
  },
  {
    path:'/cinema',
    component:cinema,
    // children:[
    //   {
    //     path:'cinemadetail',
    //     component:cinemadetail
    //   }
    // ]
  },
  {
    path:'/user',
    component:user,
    // children:[
    //   {
    //     path:'sign',
    //     component:sign,
    //   }
     
    // ]
  },
  {
    path:'/',
    redirect:"/move/deitail/soon"
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
