<template>
    <div class="content_categories">
        <div class="category">
          <img class="img" src="@/assets/category-1.png" alt="" />
          <div class="name">Trending Videos</div>
          <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
        </div>
        <div class="category">
          <img class="img" src="@/assets/category-2.png" alt="" />
          <div class="name">Crypto News</div>
          <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
        </div>
        <div class="category">
          <img class="img" src="@/assets/category-3.png" alt="" />
          <div class="name">ETH NFTs</div>
          <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
        </div>
        <div class="category">
          <img class="img" src="@/assets/category-4.png" alt="" />
          <div class="name">Play2Earn1</div>
          <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
        </div>
      </div>
</template>

<script>
export default {
    name: 'HeaderTraiding'
}
</script>

<style lang="scss" scoped>
.content_categories {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 213px;
    margin-bottom: 55px;
    font-family: "Octosquares-Bold";
    .category {
      min-width: 300px;
      width: calc(25% - 22px);
      margin: 0 11px;
      // height: 213px;
      aspect-ratio: 16 / 9;
      position: relative;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        .img {
          transform: scale(1.2);
        }
      }
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
      }
      .name {
        position: absolute;
        font-weight: 400;
        font-size: 32px;
        line-height: 45px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .add_icon {
        position: absolute;
        z-index: 1;
        bottom: 10px;
        right: 10px;
        width: 47px;
        height: 47px;
        padding: 15px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.14);
        box-shadow: inset 3.20909px 3.20909px 21.6614px
          rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(16.0455px);
        color: #000000;
        cursor: pointer;
        transition: 0.5s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }
}
</style>