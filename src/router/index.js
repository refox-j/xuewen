import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 导入测试
import Header from "../testing/Header"
import Button from "../testing/Button"
import Field from "../testing/Field"

import Register from '../views/Register'

import Login from '../views/Login'
import Observer from '../views/Observer'
import NavBar from '../views/Navbar'
import NavBar2 from '../views/Navbar2'
import Index from '../views/Index'
import Article from '../views/article'
import Badge from '../testing/Badge'
import Infinite from '../testing/Infinite'
import Access1 from '../testing/Access1'
import Access2 from '../testing/Access2'
import Addfriend from '../testing/Addfriend'


Vue.use(VueRouter)

const routes = [
  {
    path:'/addfriend',
    component:Addfriend
  }
  ,{
    path:'/access2',
    component:Access2
  }
  ,{
    path:'/access1',
    component:Access1
  }
  ,{
    path:"/infinite",
    component:Infinite
  }
  ,{
    path:'/badge',
    component:Badge
  }
  ,
  {
    path:'/article/:id',
    component:Article,
    props:true
  }
  ,
  {
    path:'/',
    component:Index
  }
  ,{
    path:'/navbar2',
    component:NavBar2
  }
  ,
  {
    path:'/navbar',
    component:NavBar
  }
  ,{
    path:"/ob",
    component:Observer
  }
  ,{
    path:'/login',
    component:Login
  }
  ,
  {
    path:"/register",
    component:Register
  }
  ,{
    path:"/field",
    component:Field
  }
  ,{
    path:'/button',
    component:Button
  },
  {
    path:'/header',
    component:Header
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
