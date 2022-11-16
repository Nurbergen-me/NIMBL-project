<template>
  <div class="home">
    <div class="sidebar">
      <div class="sidebar_video">
        <img class="video" src="@/assets/video-1.jpg" alt="" />
        <div class="name">GarryVee's Page</div>
      </div>
      <div class="sidebar_tabs">
        <div class="tab active">Top</div>
        <div class="tab">Trending</div>
        <div class="tab">Rising</div>
        <div class="tab">Watching List</div>
      </div>
      <div class="channels">
        <div class="sidebar_sort">
          <div class="sort byDate">
            <div class="date active">1d</div>
            <div class="date">1w</div>
            <div class="date">1m</div>
            <div class="date">1y</div>
            <div class="date">All</div>
          </div>
          <div class="sort byCategory">All Categories</div>
          <div class="sort all">View All</div>
        </div>
        <div class="sidebar_channels"></div>
      </div>
    </div>
    <div class="content">
      <div class="content_categories">
        <div class="category">
          <img src="@/assets/category-1.png" alt="" />
          <div class="name">Trending Videos</div>
        </div>
        <div class="category">
          <img src="@/assets/category-2.png" alt="" />
          <div class="name">Crypto News</div>
        </div>
        <div class="category">
          <img src="@/assets/category-3.png" alt="" />
          <div class="name">ETH NFTs</div>
        </div>
        <div class="category">
          <img src="@/assets/category-4.png" alt="" />
          <div class="name">Play2Earn1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.sidebar {
  width: 855px;
  color: #fff;

  &_video {
    .video {
      height: 420px;
      width: 100%;
      object-fit: cover;
    }
    .name {
      background: linear-gradient(
        273.52deg,
        rgba(0, 234, 242, 0.2) -54.44%,
        rgba(234, 0, 213, 0.2) 110.67%
      );
      backdrop-filter: blur(8.96875px);
      font-size: 23px;
      font-weight: 700;
      text-align: center;
      height: 43px;
      position: relative;
      border: 1px solid rgba(234, 0, 213, 0.5);
    }
  }

  &_tabs {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(46.5146px);
    display: flex;

    .tab {
      width: 25%;
      font-size: 23px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.active {
        background: linear-gradient(
          273.52deg,
          rgba(0, 234, 242, 0.2) -54.44%,
          rgba(234, 0, 213, 0.2) 110.67%
        );
        backdrop-filter: blur(8.96875px);
        border: 1px solid rgba(234, 0, 213, 0.5);
      }
    }
  }
  .channels {
    padding: 35px 22px;
  }
  &_sort {
    display: flex;
    .sort {
      display: flex;
      background: #141c25;
      border: 1px solid rgba(234, 0, 213, 0.5);
      width: fit-content;
      height: 54px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.byCategory {
        margin-left: 45px;
        padding: 0 20px;
      }

      &.all {
        margin-left: auto;
        padding: 0 20px;
      }
    }

    .byDate {
      .date {
        width: 20%;
        height: 54px;
        width: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;

        &.active {
          background: linear-gradient(
            273.52deg,
            rgba(0, 234, 242, 0.2) -54.44%,
            rgba(234, 0, 213, 0.2) 110.67%
          );
          backdrop-filter: blur(8.96875px);
        }
      }
    }
  }
}

.content {
  .content_categories {
    display: flex;
  }
}
</style>