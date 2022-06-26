import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cardapio',
    name: 'cardapio',
    component: () => import('../views/cardapio.vue')
  },
  {
    path:'/admPage',
    name:'admPage',
    component: () => import('../views/admPage.vue')
  },
  {
    /*Pag de pagamento*/ 
    path:'/confirmar',
    name:'confimar',
    component:() => import('../views/pagamento/confirmar.vue')
  },
  {
    path:'/dados',
    name:'dados',
    component:() => import('../views/pagamento/dados.vue')
  },
  {
    path:'/endereco',
    name:'endereco',
    component:() => import('../views/pagamento/endereco.vue')
  },
  {
    path:'/info',
    name:'info',
    component:() => import('../views/pagamento/info.vue')
  },
  {
    path:'/cadastro',
    name:'cadastro',
    component:() => import('../views/cadastro.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
