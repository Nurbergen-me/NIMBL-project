import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '@/views/Home.vue'
import DetailVideo from '@/views/DetailVideo.vue'
import MarketPlace from '@/views/MarketplaceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailVideo
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: MarketPlace
    }
  ]
})

export default router
