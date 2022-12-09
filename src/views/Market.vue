<template>
    <div class="market">
        <div class="header_content">
            <HeaderTraiding></HeaderTraiding>  
        </div>
        <div class="main_content">
            <MarketTable v-if="marketCategory === 'ranking'"></MarketTable>
            <MarketLaunchpad v-if="marketCategory === 'launchpad'" :type="3"></MarketLaunchpad>
            
            <MarketOpportunities v-if="marketCategory === 'opportunities'" :type="2"></MarketOpportunities>
            <MarketGainer v-if="marketCategory === 'gainer'"></MarketGainer>
            <MarketCard v-if="marketCategory === 'launchpad'"></MarketCard>

            <MainCategory @category="renderPage" />
        </div>
    </div>
</template>

<script>
import MainCategory from '@/components/MainCategory.vue';
import HeaderTraiding from '@/components/HeaderTraiding.vue'
import MarketLaunchpad from '@/components/marketplace/MarketLaunchpad.vue'
import MarketTable from '@/components/marketplace/MarketTable.vue'
import MarketOpportunities from '@/components/marketplace/MarketOpportunities.vue'
import MarketGainer from '@/components/marketplace/MarketGainer.vue'
import MarketCard from '@/components/marketplace/MarketCard.vue'
export default {
    name: 'Market',
    components: {
        MainCategory,
        HeaderTraiding,
        MarketLaunchpad,
        MarketTable,
        MarketOpportunities,
        MarketGainer,
        MarketCard
    },
    data() {
        return {
            name: null,
            category: 'ranking'
        }
    },
    methods: {
        renderPage() {
            console.log('render')
        },
        marketCategory(category) {
            console.log(category)
            this.category = category
            console.log(this.category, 'val')
        }
    }
}
</script>

<style lang="scss" scoped>
.market {
    position: relative;
    width: 100%;
    height: 100%;
    .main_content {
        height: 100vh;
        padding: 10px;
    }
}
</style>