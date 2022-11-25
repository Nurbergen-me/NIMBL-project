import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import DetailVideo from '@/views/DetailVideo.vue'

import MarketPlaceView from '@/views/MarketplaceView.vue'
import TestPage from '@/views/TestPage.vue'
// import MarketPlace from '@/views/Marketplace.vue'

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
      path: '/marketplace-view',
      name: 'marketplace-view',
      component: MarketPlaceView
    },
    {
      path: '/test-page',
      name: 'test-page',
      component: TestPage
    },
    // {
    //   path: '/market-place',
    //   name: 'market-place',
    //   component: MarketPlace
    // },
  ]
})

export default router
