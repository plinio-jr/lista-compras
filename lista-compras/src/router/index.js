import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/*webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/comunidade',
    name: 'comunidade',
    component: () => import(/*webpackChunkName: "comunidade" */ '../views/Comunidade.vue')
  },
  {
    path: '/comparador',
    name: 'comparador',
    component: () => import(/*webpackChunkName: "login" */ '../views/Comparador.vue')
  },
  {
    path:'/mapa',
    name:'mapa',
    component: () => import(/*webpackChunkName: "mapa" */ '../views/Mapa.vue')
  },
  {
    path:'/editar',
    name:'editar',
    component: () => import(/*webpackChunkName: "editar"*/ '../views/Editar.vue')
 },
 {
  path:'/form',
  name:'form',
  component: () => import(/*webpackChunkName: "form"*/ '../views/Form.vue')
},
{
  path:'/redefinir',
  name:'redefinir',
  component: () => import(/*webpackChunkName: "redefinir"*/ '../views/Redefinir.vue')
},

 

  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
