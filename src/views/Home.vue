<template>
  <div class="home">
    <div class="sidebar">
      <div class="sidebar_video">
        <div class="sidebar_video_wrap">
          <video-player />
        </div>
        <div class="name">GarryVee's Page</div>
      </div>
      <template v-if="showSubscribers === false">
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
            <div class="sort byCategory">
              <div>All Categories</div>
              <img src="../assets/icons/arrow_down.svg" alt="" />
            </div>
            <div class="sort all">View All</div>
          </div>
          <div class="sidebar_channels">
            <table>
              <tr class="col">
                <th class="col-1">Channels</th>
                <th class="col-2">Subscribers</th>
                <th class="col-3">Floor Price</th>
                <th class="col-4">Total Volume</th>
              </tr>
              <tr
                class="table_value"
                @click="toogleSubscribers()"
                v-for="item in 2"
                :key="item"
              >
                <td class="table_channel">
                  <div class="id">1</div>
                  <img
                    class="img"
                    src="../assets/video/chanel_logo.svg"
                    alt=""
                  />
                  <div class="name">@BlueWard2</div>
                </td>
                <td class="table_subs gradient-number">100k</td>
                <td class="table_floor gradient-number">134 NMBL</td>
                <td class="table_floor gradient-number">238 NMBL</td>
              </tr>
            </table>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="channels">
          <div class="subs_header">
            <div class="subs_header_head">
              <img
                class="back_btn"
                src="@/assets/icons/back.svg"
                alt=""
                @click="toogleSubscribers()"
              />
              <div class="subs_titles">
                <img src="../assets/icons/avatar.svg" alt="" />
                <div class="subs_title">@BlueWard2</div>
              </div>
            </div>
            <div class="go_to_channel">Go to channel</div>
          </div>
          <div class="about_channel">
            <div class="about_channel_box" v-for="item in 6">
              <div class="value">100 132</div>
              <div class="key">Members</div>
            </div>
          </div>
          <div class="subs_videos">
            <div class="subs_videos_header">Trending Videos</div>
            <div class="subs_videos_video">f
              <div class="subs_videos_box" v-for="item in 3">
                <div class="subs_videos_main">
                  <div class="subs_img">
                    <img
                      style="object-fit: cover"
                      src="../assets/icons/subs_videos.svg"
                      alt=""
                    />
                  </div>
                  <div class="videos_timeline">13:13</div>
                </div>
                <div class="subs_videos_names">
                  Talks about NFT videos that can change world...
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="content">
        <HeaderTraidingVue />
      <div class="videos_content">
        <div
          class="video_box"
          v-for="(item,index) in 26"
          :key="'video-' + index"
          @click="$router.push({name: 'detail'})"
        >
          <img class="video_box_img" src="@/assets/icons/playlist-1.svg" alt="" />
          <div class="video_box_title">
            <div style="display: flex; align-items: center">
              <img
                class="video_img"
                src="@/assets/icons/fish_icon.svg"
                alt=""
              />
              <div class="nikname">@BlueWard2</div>
            </div>
            <div class="prices gradient-number">
              <div class="price_title">Floor Price:</div>
              <div class="price_value">140 NMBL</div>
            </div>
          </div>
          <div class="video_header">
            <div class="video_header_title">
              Gary Vee Explains How He Made $90 Million on NFTs & Why They ghhtr
              htrhtrhtr
            </div>
            <div class="video_views_box">
              <div class="video_views">
                <img src="../assets/video/likes.svg" alt="" />
                <div class="video_views_count">100 345</div>
              </div>
              <div class="video_views">
                <img src="../assets/video/viewers.svg" alt="" />
                <div class="video_views_count">100 345</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTraidingVue from '@/components/HeaderTraiding.vue';
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "Home",
  components: {
    HeaderTraidingVue,
    VideoPlayer
  },
  data() {
    return {
      showSubscribers: false,
    };
  },
  methods: {
    toogleSubscribers() {
      this.showSubscribers = !this.showSubscribers;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.sidebar {
  width: 30%;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: calc(100vh - 170px);

  &_video {
    width: 100%;
    &_wrap {
      width: 100%;
      aspect-ratio: 16/9;
    }
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
      line-height: 43px;
      position: relative;
      border: 1px solid rgba(234, 0, 213, 0.5);
    }
  }
  /* Show Subscribers */
  &_tabs {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(46.5146px);
    display: flex;
    .tab {
      cursor: pointer;
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

  &_sort {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    .sort {
      display: flex;
      background: #141c25;
      border: 1px solid rgba(234, 0, 213, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      cursor: pointer;

      &.byCategory {
        display: flex;
        // margin-left: 45px;
        // margin-right: 140px;
        padding: 0 20px;
        font-weight: 400;
        font-size: 21.525px;
        line-height: 30px;
      }
      &.all {
        padding: 0 20px;
        font-weight: 400;
        font-size: 21.525px;
        line-height: 30px;
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
  .channels {
    overflow-y: scroll;
    padding: 35px 22px;
  }
  table {
    width: 100%;
    text-align: center;
    tr {
      height: 116px;
      th {
        font-weight: 400;
        font-size: 19px;
      }
      td {
        cursor: pointer;
      }
      .col-1 {
        text-align: left;
      }
      .table_channel {
        display: flex;
        align-items: center;
        height: 116px;
        .id {
          font-weight: 400;
          font-size: 18px;
          margin-right: 26px;
        }
        .img {
          border-radius: 50%;
          width: 56px;
          height: 56px;
          margin-right: 18px;
        }
        .name {
          font-weight: 400;
          font-size: 22px;
          line-height: 31px;
        }
      }
      .table_subs {
        font-weight: 400;
        font-size: 22px;
        margin-right: 69px;
      }
      .table_floor {
        font-weight: 400;
        font-size: 22px;
        background-color: linear-gradient(
          270deg,
          #ea00d5 -6.27%,
          #3d5eff 60.51%,
          #00eaf2 109.84%
        );
      }
    }
  }
  .subs_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 34px;
    &_head {
      display: flex;
      align-items: center;
      .back_btn {
        cursor: pointer;
        padding: 10px 15px;
        margin-bottom: auto;
        background: rgba(255, 255, 255, 0.35);
        box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(46.5146px);
      }
      .subs_titles {
        display: flex;
        align-items: center;
        margin-left: 22px;
        .subs_title {
          font-weight: 400;
          font-size: 30.3701px;
          line-height: 43px;
          margin-left: 21px;
        }
      }
    }
    .go_to_channel {
      padding: 22px 30px;
      font-weight: 400;
      font-size: 22.32px;
      cursor: pointer;
      background: linear-gradient(
        273.52deg,
        rgba(0, 234, 242, 0.2) -54.44%,
        rgba(234, 0, 213, 0.2) 110.67%
      );
      backdrop-filter: blur(9px);
    }
  }
  .about_channel {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &_box {
      cursor: pointer;
      text-align: center;
      width: calc(33.33% - 18px);
      padding: 18px 30px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(46.5146px);
      margin-bottom: 52px;
      .value {
        font-weight: 400;
        font-size: 26px;
        margin-bottom: 10px;
        &:hover {
          color: #ea00d5;
        }
      }
      .key {
        font-weight: 400;
        font-size: 20px;
      }
    }
  }
  .subs_videos {

    .subs_img {
        aspect-ratio: 16/9;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    &_box {
      position: relative;
      width: 267px;
      border-radius: 12px;
      margin: 0 7px 0 7px;
      cursor: pointer;
    }
    &_main {
      border-radius: 12px;
      .videos_timeline {
        position: absolute;
        z-index: 2;
        background: rgba(31, 26, 33, 0.11);
        backdrop-filter: blur(10.2876px);
        border-radius: 6px;
        bottom: 75px;
        left: 15px;
        padding: 3px;
        background: rgba(31, 26, 33, 0.11);
        backdrop-filter: blur(10.2876px);
        border: 1px solid rgba(31, 26, 33, 0.11);
        cursor: pointer;
      }
    }
    &_names {
      font-weight: 400;
      font-size: 21px;
    }
    &_video {
      display: flex;
      width: 100%;
      overflow-x: scroll;
      // & > *:not(:last-child) {
      //     margin-right: 15px;
      // }
    }
    &_header {
      font-weight: 400;
      font-size: 28.9577px;
      line-height: 41px;
      margin-bottom: 18px;
    }
  }
  /* Show Detail */
}

.content {
  width: 70%;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 0 16px;
}

.gradient-number {
  font-family: "Octosquares-Bold";
  background: linear-gradient(
    90.24deg,
    #01eaf2 0.21%,
    #3b65ff 57.08%,
    #d70bda 102.91%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.videos_content {
  height: calc(100vh - 480px);
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;

  .video_box {
    cursor: pointer;
    width: calc(25% - 22px);
    background: linear-gradient(
      180deg,
      rgba(139, 139, 139, 0.51) 54.13%,
      rgba(11, 11, 11, 0.51) 90.66%
    );
    box-shadow: inset -3.80257e-16px -0.802504px 4.01252px
        rgba(217, 10, 218, 0.33),
      inset 0.802504px 0px 4.01252px rgba(0, 234, 242, 0.33);
    backdrop-filter: blur(4.81502px);
    margin: 0 11px 32px;
    &_img {
      width: 100%;
      object-fit: cover;
    }
    &_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      height: 58px;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16.8526px);
      margin-top: -20px;

      .video_img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .nikname {
        font-weight: 400;
        font-size: 24px;
        overflow: hidden;
      }
      .price {
        margin-left: auto;
        &_title {
          font-weight: 400;
          font-size: 18px;
        }
        &_value {
          font-family: "Octosquares-Bold";
          font-weight: 400;
          font-size: 20px;
          white-space: nowrap;
        }
      }
    }
    .video_header {
      padding: 12px;
      &_title {
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .video_views_box {
        display: flex;
        align-items: center;
        cursor: pointer;
        .video_views {
          display: flex;
          align-items: center;

          .video_views_count {
            margin-left: 8px;
            font-weight: 400;
            font-size: 16px;
          }
        }
        & > *:not(:last-child) {
          margin-right: 31px;
        }
      }
    }
  } 
}
@media (max-width: 2400px) {
  .sidebar {
    .subs_header {
      .go_to_channel {
          padding: 16px 22px;
          font-weight: 400;

          .value {
            font-size: 20px;
            margin-bottom: 8px;
          }
          .key {
            font-size: 18px;
          }
      }
      &_head {
        .subs_titles {
          img {
            width: 60px;
          }
          .subs_title {
            font-size: 24px;
          }
        }
      }
    }
    .about_channel {
      &_box {
        padding: 16px 20px;
        margin-bottom: 30px;
      }
    }
  }
  .sidebar_tabs {
    .tab {
      font-size: 20px;
    }
  }
  .videos_content {
    .video_box {
      &_title {
        .video_img {
          width: 26px;
          height: 26px;
        }
        .nikname {
          font-size: 18px;
        }
      }
      .video_header {
        &_title {
          font-size: 18px;
          line-height: 1.2em;
        }
      }
    }
    .prices {
      .price_title {
        font-size: 16px;
      }
      .price_value {
        font-size: 18px;
      }
    }
  }
}
@media (max-width: 2000px) {
  .sidebar {
    width: 35%;

    &_video {
      .name {
        font-size: 18px;
        line-height: 36px;
      }
    }

    &_tabs {
      .tab {
        font-size: 18px;
        height: 46px;
      }
    }
    &_sort {
      .byDate {
        .date {
          height: 40px;
          width: 40px;
          font-size: 18px;
        }
      }
      .sort {
        &.byCategory, &.all {
          font-size: 16px;
          padding: 0 12px;
        }
      }
      
    }

    table {
      tr {
        height: 40px;

        th {
          font-size: 14px;
        }

        .table_channel {
          height: 64px;
          .id {
            font-size: 16px;
            margin-right: 16px;
          }
          .img {
            width: 40px;
            height: 40px;
            margin-right: 12px;
          }
          .name {
            font-size: 16px;
          }
        }
        .gradient-number {
          font-size: 16px;
          padding: 0 5px;
        }
      }
    }
  }

  .videos_content {
    height: calc(100vh - 365px);
    .video_box {
      width: calc(25% - 10px);
      margin: 0 5px 16px;

      &_title {
        height: auto;
        padding: 8px;
        .video_img {
          margin-right: 6px;
          width: 24px;
          height: 24px;
        }
        .nikname {
          font-size: 14px;
        }
      }
      .video_header {
        padding: 8px 12px;
        &_title {
          font-size: 14px;
        }
        .video_views {
          img {
            height: 14px;
          }
          &_count {
            font-size: 12px !important;
          }
        }

      }
    }
    .prices {
      .price_title {
        display: none;
      }
      .price_value {
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 1600px) {
  .sidebar {
    .subs_header {
      .go_to_channel {
          padding: 8px 12px;
          font-size: 18px;
          .value {
            font-size: 16px;
            margin-bottom: 8px;
          }
          .key {
            font-size: 14px;
          }
      }
      &_head {
        .back_btn {
          padding: 4px 6px;
        }
        .subs_titles {
          img {
            width: 40px;
            height: 40px;
          }
          .subs_title {
            font-size: 18px;
            margin-left: 8px;
          }
        }
      }
    }
    .about_channel {
      &_box {
        padding: 12px;
        width: calc(33.33% - 8px);
        margin-bottom: 20px;
        .value {
          font-size: 18px;
        }
        .key {
          font-size: 14px;
        }
      }
    }
    .subs_videos {
      &_header {
        font-size: 20px;
      }
      &_main {
        .videos_timeline {
          font-size: 12px;
          bottom: 50px;
          left: 10px;
        }
      }
      &_box {
        width: 180px;
      }
      &_names {
        font-size: 14px;
      }
    }
    &_video {
      .name {
        font-size: 16px;
        line-height: 30px;
      }
    }
    &_tabs {
      .tab {
        font-size: 14px;
        height: 36px;
      }
    }
    &_sort {
      justify-content: space-between;
      .byDate {
        .date {
            height: 30px;
            width: 30px;
            font-size: 14px;
        }
      }
      .sort {
        &.byCategory, &.all {
          font-size: 14px;
          padding: 0 10px;

          img {
            width: 12px;
            margin-left: 4px;
          }
        }
      }
    }
    table {
      tr {
        .table_channel {
          height: 54px;
          .id, .name {
            font-size: 14px;
          }
          .img {
            width: 30px;
            height: 30px;
          }
        }
        .gradient-number {
          font-size: 14px;
        }
      }
    }
    .channels {
      padding: 18px;
    }
  }
  .videos_content {
    .video_box {
      width: calc(33% - 8px);
    }
  }
}
</style>