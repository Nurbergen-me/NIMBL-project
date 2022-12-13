import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import DetailVideo from '@/views/DetailVideo.vue'

import Community from '@/views/CommunityPage.vue'

import MarketPlaceView from '@/views/MarketplaceView.vue'
import ChartPage from '@/views/ChartPage.vue'
import Market from '@/views/Market.vue'
import Videos from '@/views/Videos.vue'
import VideosDetail from '@/views/VideosDetail.vue'

// marketplace
import MarketLaunchpad from '@/components/marketplace/MarketLaunchpad.vue'
import MarketTable from '@/components/marketplace/MarketTable.vue'
import MarketOpportunities from '@/components/marketplace/MarketOpportunities.vue'
import MarketGainer from '@/components/marketplace/MarketGainer.vue'

// buying
import BuyingPage from '@/views/BuyingPage.vue'
import CardBuying from '@/components/buying/CardBuying.vue'
import ChartBuying from '@/components/buying/ChartBuying.vue'
import TableBuying from '@/components/buying/TableBuying.vue'

import TrendingPage from '@/views/TrendingPage.vue'

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
        path: '/community',
        name: 'community',
        component: Community
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/videos/:id',
      name: 'videosDetail',
      component: VideosDetail
    },
    {
      path: '/marketplace-view', 
      name: 'marketplace-view',
      component: MarketPlaceView
    },
    {
        path: '/marketplace-view', 
        name: 'marketplace-view',
        component: MarketPlaceView
    },
    {
        path: '/buy',
        name: 'buy-page',
        component: BuyingPage,
        children: [
            {
                path: '/buy-page',
                name: 'card-buying',
                component: CardBuying,
                props: true
            },
            {
                path: '/chart-buying',
                name: 'chart-buying',
                component: ChartBuying,
                props: true
            },
            {
                path: '/table-buying',
                name: 'table-buying',
                component: TableBuying,
                props: true
            }
        ]
    },
    {
        path: '/chart-page',
        name: 'chart-page',
        component: ChartPage
    },
    {
        path: '/trending-page',
        name: 'trending-page',
        component: TrendingPage
    },
    {
        path: '/marketplace',
        component: Market,
        children: [
            {
                path: '/market-ranking',
                name: 'market-ranking',
                component: MarketTable,
                props: true
            },
            {
                path: '/market-launchpad',
                name: 'market-launchpad',
                component: MarketLaunchpad,
                props: true
            },
            {
                path: '/market-oppotunities',
                name: 'market-oppotunities',
                component: MarketOpportunities,
                props: true
            },
            {
                path: '/market-gainer',
                name: 'market-gainer',
                component: MarketGainer,
                props: true
            }
        ]
    }
  ]
})

export default router
