/* eslint-disable no-unused-vars */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import NewEmployee from '../views/NewEmployee.vue'
import ViewEmployee from '../views/ViewEmployee.vue'
import EditEmployee from '../views/EditEmployee.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';
import ViewBook from '../views/ViewBook.vue';
import firebase from '@/firebase'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
    meta:{
      requireGuest: true
    }
  },
  {
    path:'/register',
    name:'Register',
    component: Register,
    meta:{
      requireGuest: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/chat/:chat_id',
    name: 'chat-view',
    component: Chat,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/new',
    name: 'new-employee',
    component: NewEmployee,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/edit/:employee_id',
    name: 'edit-employee',
    component: EditEmployee,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/:employee_id',
    name: 'view-employee',
    component: ViewEmployee,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/book/:book_id',
    name: 'view-book',
    component: ViewBook,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//nav guards
router.beforeEach((to,from,next)=>{
  //check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if Not logged in
    if (!firebase.auth().currentUser) {
      //go to login
      next({
        path:'/login',
        query:{
          redirect: to.fullPath
        }
      })
    }else{
      //proceed to route
      next()
    }
  }else if(to.matched.some(record => record.meta.requireGuest)){
  //check if logged in
    if (firebase.auth().currentUser) {
      //go to login
      next({
        path:'/dashboard',
        query:{
          redirect: to.fullPath
        }
      })
    }else{
      //proceed to route
      next()
    }
  }else{
    //proceeed to route
    next()
  }
})

export default router


