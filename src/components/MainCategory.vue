<template>
    <div>
        <div class="list_content" v-if="$route.name !== 'market-ranking' && $route.name !== 'market-launchpad' && $route.name !== 'market-oppotunities' && $route.name !== 'market-gainer' && $route.name !== 'card-buying' && $route.name !== 'chart-buying' && $route.name !== 'table-buying'">
            <div class="list_buttons" :class="{ active: mainCategory === 1 && $route.name === 'home' }" @click="toggleCategory(1, 'home')" >
                <img src="@/assets/lines/content-icon.svg" alt="" />
                <div class="list_name">Content</div>
            </div>
            <div class="list_buttons" :class="{ active: mainCategory === 2 }" @click="toggleCategory(2, 'community')" >
                <img src="@/assets/lines/community-icon.svg" alt="" />
                <div class="list_name">Community</div>
            </div>
            <div class="list_buttons" :class="{ active: mainCategory === 3 }" @click="toggleCategory(3, 'market-ranking')" >
                <img src="@/assets/lines/marketplace-icon.svg" alt="" />
                <div class="list_name">Marketplace</div>
            </div>
            <div class="list_buttons" :class="{ active: mainCategory === 4 }" @click="toggleCategory(4)" >
                <img src="@/assets/lines/settings-icon.svg" alt="" />
                <div class="list_name">Settings</div>
            </div>
        </div>
        <div class="list_content" v-else>
            <div class="list_buttons" :class="{ active: marketCategory === 1 }" @click="toggleMarketCategory(1, 'market-ranking')" >
                <img src="@/assets/marketplace/category/ranking-icon.svg" alt="" />
                <div class="list_name">Rankings</div>
            </div>
            <div class="list_buttons" :class="{ active: marketCategory === 2 }" @click="toggleMarketCategory(2, 'market-launchpad')" >
                <img src="@/assets/marketplace/category/launchpad-icon.svg" alt="" />
                <div class="list_name">Launchpad</div>
            </div>
            <div class="list_buttons" :class="{ active: marketCategory === 3 }" @click="toggleMarketCategory(3, 'market-oppotunities')" >
                <img src="@/assets/marketplace/category/opportunities-icon.svg" alt="" />
                <div class="list_name">Opportunities</div>
            </div>
            <div class="list_buttons" :class="{ active: marketCategory === 4 }" @click="toggleMarketCategory(4, 'market-gainer')" >
                <img src="@/assets/marketplace/category/gainer-icon.svg" alt="" />
                <div class="list_name">Gainers & Loosers</div>
            </div>
        </div>
    </div>
    
</template>

<script>
// import MarketplaceViewVue from '@/views/MarketplaceView.vue';
export default {
	name: "MainCategory",
	data() {
		return {
			mainCategory: 1,
			marketCategory: 1,
			currentPage: 'home'
		};
	},
	watch:{
        '$route' (to) {
            this.currentPage = to.name
            if (to.name === 'home') {
                this.mainCategory = 1
            } else {
                this.mainCategory = 2
            }
        }
	},
	methods: {
		toggleCategory(id, route) {
			this.mainCategory = id
			this.$router.push({name: route})
		},
		toggleMarketCategory(id, route) {
			this.marketCategory = id
			this.$router.push({name: route})
		},
		notMarket() {
            if (this.$route.name !== 'market-ranking' || this.$route.name !== 'market-launchpad' || this.$route.name !== 'market-oppotunities' || this.$route.name !==  'market-gainer') {
                return false
            } else {
                console.log('true')
                return true
            }
		}
	},
};
</script>

<style scoped lang="scss">
.list_content {
  position: fixed;
  z-index: 10;
  cursor: pointer;
  color: #fff;
  bottom: 0;
  width: 100%;
  height: 86px;
  background: #000000;
  display: flex;
  align-items: center;
  .list_buttons {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &.active {
      background: linear-gradient(
        273.52deg,
        rgba(0, 234, 242, 0.2) -54.44%,
        rgba(234, 0, 213, 0.2) 110.67%
      );
      backdrop-filter: blur(10px);
      border: 1px solid #ea00d5;
      border-bottom: 2px solid #00eaf2;
    }
    &:hover {
      border: 1px solid #ea00d5;
      border-bottom: 2px solid #00eaf2;
    }
  }
  .list_name {
    margin-left: 21px;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
  }
}
@media (max-width: 2000px) {
  .list_content {
    height: 70px;

    img {
      max-height: 32px;
    }

    .list_name {
      font-size: 22px;
      margin-left: 12px;
    }
  }
}
@media (max-width: 2000px) {
  .list_content {
    height: 60px;

    img {
      max-height: 28px;
    }

    .list_name {
      font-size: 18px;
      margin-left: 8px;
    }
  }
}
</style>