import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MesaView from '@/views/MesaView.vue'
import IngredientesView from '@/views/IngredientesView.vue'
import CardapioView from '@/views/CardapioView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/mesas', component: MesaView },
  { path: '/estoque', component: IngredientesView },
  { path: '/cardapio', component: CardapioView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
