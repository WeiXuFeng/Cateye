import Vue from 'vue'
import VueRouter from 'vue-router'
import move from '../components/move.vue'
import cinema from '../components/cinema.vue'
import user from '../components/user.vue'

import movedetail from '../page/move/movedetail.vue'
import movedetail02 from '../page/move/movedetail02.vue'
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
        component:movedetail02
      }
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
    redirect:"/move/deitail"
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
