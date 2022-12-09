<template>
    <div class="content_categories">
        <div class="category">
          <img class="img" src="@/assets/category-1.png" alt="" />
          <div class="name">Trending Videos</div>
          <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
          <div class="category_subcategories">
            <div class="category">
              <img class="img" src="@/assets/category-4.png" alt="" />
              <div class="name">Play2Earn1</div>
            </div>
            <div class="category">
              <img class="img" src="@/assets/category-3.png" alt="" />
              <div class="name">ETH NFTs</div>
            </div>
            <div class="category">
              <img class="img" src="@/assets/category-2.png" alt="" />
              <div class="name">Crypto News</div>
            </div>
          </div>
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
        <div class="category last">
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
@media (max-width: 5000px) {

::-webkit-scrollbar {
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 4px;
  background: rgba(92, 99, 163, 1);
}

.content_categories {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 55px;
    font-family: "Octosquares-Bold";
    .category {
      width: calc(25% - 22px);
      margin: 0 11px;
      // height: 213px;
      aspect-ratio: 16 / 9;
      position: relative;
      cursor: pointer;

      &:hover {
        // .img {
        //   transform: scale(1.2);
        //   overflow: hidden;
        // }
        .category_subcategories {
          width: 100%;
          max-height: 900px;
        }

        .add_icon {
          transform: rotate(-90deg);
        }
      }

      &_subcategories {
        width: 100%;
        background: #131236;
        left: 0;
        max-height: 0;
        transition: 0.5s ease;
        position: absolute;
        z-index: 2;
        overflow: hidden;
        .category {
          height: 250px;
          width: 100%;
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
}


@media (max-width: 2400px) {
  .content_categories {
    .category {
      .name {
        font-size: 28px;
      }
    }
  }
}

@media (max-width: 2000px) {
  .content {
    width: 65%;

    &_categories {
      // overflow-x: scroll;
      padding-bottom: 10px;
      margin-top: 26px;
      margin-bottom: 20px;

      .category {
        width: calc(25% - 10px);
        margin: 0 5px;
        .name {
          font-size: 20px;
        }

        .add_icon {
          width: 35px;
          height: 35px;
          padding: 10px;
          bottom: 8px;
          right: 8px;
        }
      }
    }
  }
}
@media (max-width: 1600px)  {
  .content_categories {
    padding-bottom: 6px;
    .category {
      width: calc(33% - 9px);
      min-width: calc(33% - 9px);

      &.last {
        display: none;
      }
    }
  }
}
</style>