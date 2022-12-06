import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import DetailVideo from '@/views/DetailVideo.vue'

import MarketPlaceView from '@/views/MarketplaceView.vue'
import TestPage from '@/views/TestPage.vue'
import TestPage2 from '@/views/TestPage2.vue'
import TestPageDetail from '@/views/TestPageDetail.vue'
import ChartPage from '@/views/ChartPage.vue'

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
    {
      path: '/test-page2',
      name: 'test-page2',
      component: TestPage2
    },
    {
      path: '/test-detail',
      name: 'test-detail',
      component: TestPageDetail
    },
    {
      path: '/chart-page',
      name: 'chart-page',
      component: ChartPage
    }
  ]
})

export default router
