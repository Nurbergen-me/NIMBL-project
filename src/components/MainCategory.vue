<script>
import MarketplaceViewVue from '../views/MarketplaceView.vue';
export default {
  name: "MainCategory",
  data() {
    return {
      mainCategory: 1,
    };
  },
  methods: {
    toggleCategory(id) {
      this.mainCategory = id;
      if (id == 3) {
          this.$router.push({name: 'marketplace'})
      }
    },
  },
};
</script>

<template>
  <div class="list_content">
    <div
      class="list_buttons"
      :class="{ active: mainCategory === 1 }"
      @click="toggleCategory(1)"
    >
      <img src="../assets/lines/content-icon.svg" alt="" />
      <div class="list_name">Content</div>
    </div>
    <div
      class="list_buttons"
      :class="{ active: mainCategory === 2 }"
      @click="toggleCategory(2)"
    >
      <img src="../assets/lines/community-icon.svg" alt="" />
      <div class="list_name">Community</div>
    </div>
    <div
      class="list_buttons"
      :class="{ active: mainCategory === 3 }"
      @click="toggleCategory(3)"
    >
      <img src="../assets/lines/marketplace-icon.svg" alt="" />
      <div class="list_name">Marketplace</div>
    </div>
    <div
      class="list_buttons"
      :class="{ active: mainCategory === 4 }"
      @click="toggleCategory(4)"
    >
      <img src="../assets/lines/settings-icon.svg" alt="" />
      <div class="list_name">Settings</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list_content {
  cursor: pointer;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 86px;
  background: #000000;
  display: flex;
  align-items: center;
  bottom: 5px;
  .list_buttons {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
  .list_name {
    margin-left: 21px;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
  }
}
</style>

