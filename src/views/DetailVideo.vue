<template>
  <div class="detail">
    <div class="videos_content">
      <div class="video_content">
        <div class="video_box">
          <!--      <video-player /> -->
          <!-- <video :src="video" :poster="thumbnail" ref="video" controls v-on:playing="onPlay" v-on:pause="onPause" v-on:timeupdate="onTimeUpdate" v-bind:autoplay="isAutoPlay" /> -->
          <!-- <iframe
            width="100%"
            height="100%"
            src="https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
          ></iframe> -->
          <iframe class="video" :src="`https://www.youtube.com/embed/${srcVideo}?autoplay=1&controls=0&mute=1&showinfo=0&loop=1`"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="headers_content">
            <div class="video_left_side">
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

              <div class="video_name">
                Figma Tutorial: Setup a Responsive Grid Layout for UI & Web
                Design (IN 11 MINUTES)
              </div>
            </div>
            <div class="video_rigth_side">
              <img src="../assets/video/chanel_logo.svg" alt="" />
              <div class="channel_creater">
                <div class="channel_name">Helen_NFT</div>
                <div class="channel_subs">245, 511 members</div>
              </div>
            </div>
          </div>
          <!-- <div class="pause_content">
            <img
              class="pause_icon"
              src="../assets/video/pause-icon.svg"
              alt=""
            />
          </div> -->
          <div class="comment_content">
            <div class="comment_box">
              <div class="comment_name">
                WOW ... well said man. Great video. 🔥🔥🔥
              </div>
              <img class="comment_icon" src="../assets/video/comments.svg" alt="" />
            </div>
            <div class="comment_box">
              <div class="comment_name">
                WOW ... well said man. Great video. 🔥🔥🔥
              </div>
              <img class="comment_icon" src="../assets/video/comments.svg" alt="" />
            </div>
          </div>
          <!-- <div class="timeline_content">
            <img
              style="margin-right: 30px; margin-top: 11px"
              src="../assets/video/timeline/pause-on-video.svg"
              alt=""
            />
            <img
              style="margin-right: 25px"
              src="../assets/video/timeline/sound.svg"
              alt=""
            />
            <div class="time">5: 14</div>
            <div class="timeline">
              <div class="timeline active"></div>
            </div>
            <div class="time">10: 32</div>
            <img
              style="margin-right: 27px"
              src="../assets/video/timeline/video-icon.svg"
              alt=""
            />
            <img
              style="margin-right: 27px"
              src="../assets/video/timeline/medium-scrin.svg"
              alt=""
            />
            <img src="../assets/video/timeline/full-scrin.svg" alt="" />
          </div> -->
        </div>
        <div class="video_info_box">
          <div class="tags_box">
            <div class="tags_item">#ETH-NFT</div>
            <div class="tags_item">#NFT-Trading</div>
          </div>
          <div class="video_titles">
            <div class="video_main_name">
              {{idVideo ? "120 - Marc Andreessen & Chris Dixon of a16z | Reinventing the Internet" : "Figma Tutorial: Setup a Responsive Grid Layout for UI & Web Design (IN 11 MINUTES)" }}
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
          <div class="channel_info">
            <div class="channel_content">
              <img src="../assets/icons/chanel_logos.svg" alt="" />
              <div class="channel_main_info">
                <div class="channel_main_name">Bankless</div>
                <div class="channel_main_views">12.455 members</div>
              </div>
            </div>

            <div class="channel_subscribe">subscribe</div>
            <div class="channel_base_info">
              <div class="channel_value">113</div>
              <div class="channel_key">Total Volume</div>
            </div>
            <div class="channel_base_info">
              <div class="channel_value">113</div>
              <div class="channel_key">Total Volume</div>
            </div>
          </div>
          <div class="comments_content">
            <div class="comments">
              01 November, 2022<br />
              It’s time to break up with your bank, and join the movement for
              sovereign finance. <br />
              👉 Build your crypto know-how by subscribing to the #Bankless
              newsletter.<br />
            </div>
          </div>
        </div>
      </div>

      <div class="playlist_content">
        <div class="lines_content">
          <div class="line_btn" :class="{ 'active': currentTab === 1 }" @click="currentTab = 1">
            <img src="../assets/lines/videos-icon.svg" alt="" />
            <div class="line_title">Videos</div>
          </div>
          <div class="line_btn" :class="{ 'active': currentTab === 2 }" @click="currentTab = 2">
            <img src="../assets/lines/commments-icon.svg" alt="" />
            <div class="line_title">Comments</div>
          </div>
          <div class="line_btn" :class="{ 'active': currentTab === 3 }" @click="currentTab = 3">
            <img src="../assets/lines/clips-icon.svg" alt="" />
            <div class="line_title">Clips</div>
          </div>
        </div>
        <div class="recomends_video_wrap" v-if="currentTab === 1">
          <div @click="idVideo ? $router.push('/detail') : $router.push('/detail/2')" class="recomends_video" v-for="item in 10" :key="item">
            <img src="../assets/icons/video1.svg" alt="" />
            <div class="recomends_video_info">
              <div class="recomend_title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </div>
              <div class="recomend_author">Jack Jackson</div>
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
        <div class="comments comments_main" v-if="currentTab === 2">
          <Comments />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Comments from '@/components/Comments.vue'
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "DetailVideo",
  components: {
    Comments,
    VideoPlayer
  },
  props: ['idVideo'],
  data() {
    return {
      currentTab: 1,
    };
  },
  methods: {

  },
  computed: {
    srcVideo() {
      return this.idVideo ? "RXHITeaGB8Q" : "G7OWIorSgwU"
    }
  }
};
</script>
  
<style scoped lang="scss">
.detail {
  color: #ffffff;
  height: calc(100vh - var(--h-header-footer));
  overflow: hidden;
}
.videos_content {
  height: 100%;
  display: flex;
  align-items: flex-start;
}
/* Video Content */
.video_content {
  height: 100%;
  flex-basis: 60%;
  flex-grow: 3;
  position: relative;
  overflow: scroll;
  .video_box {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 42px;
    aspect-ratio: 16/9;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }
    .video {
      width: 100%;
      height: 100%;
      position: relative;

    }
  }
}

/* 1 - Video Box */

.headers_content {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 48px 0 40px;
}

/* Video left side */
.video_left_side {
  /* position: absolute; */
  display: flex;
  flex-direction: column;
}
.video_views_box {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  cursor: pointer;
}
.video_views {
  display: flex;
  align-items: center;

  img {
    aspect-ratio: auto !important;
  }
}
.video_views:not(:last-child) {
  margin-right: 31px;
}
.video_views_count {
  margin-left: 8px;
  font-weight: 400;
  font-size: 20px;
}

.video_name {
  max-width: 650px;
  font-weight: 400;
  font-size: 30px;
}

/* video rigth side */
.video_rigth_side {
  position: absolute;
  right: 30px;
  display: flex;
  align-items: center;
}
.channel_creater {
  margin-left: 17px;
}
.channel_name {
  font-weight: 400;
  font-size: 28px;
}
.channel_subs {
  font-weight: 400;
  font-size: 24px;
  color: #a9a9b7;
}

/* Pause */
.pause_content {
  position: absolute;
  top: 35%;
  left: 45%;
  z-index: 2;
  border-radius: 50%;
  width: 133px;
  height: 133px;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(42px);
}
.pause_icon {
  position: absolute;
  top: 31%;
  left: 38%;
}

/* Comment */
.comment_content {
  position: absolute;
  bottom: 40px;
  right: 20px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 20px;
}
.comment_box {
  display: flex;
  justify-content: flex-end;
}

.comment_box:not(:last-child) {
  margin-bottom: 7px;
}

.comment_name {
  font-weight: 400;
  font-size: 16px;
  padding: 11px 24px;
  border-radius: 10px 10px 0px 10px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7.5px);
  margin-right: 7px;
}

/* Timeline */
.timeline_content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  opacity: 0.4;
  background: #000000;
  padding: 27px 50px;
}
.time {
  font-weight: 400;
  font-size: 21px;
  margin-right: 17px;
}
.timeline {
  width: 1095px;
  height: 6px;
  background: #2c2c35;
  border-radius: 4.5px;
  margin-right: 12px;
}
.timeline .active {
  width: 488px;
  background: linear-gradient(273.27deg, #00eaf2 0.47%, #ea00d5 99.64%);
  border-radius: 4.5px;
}

/* 2 - Video Info Box */
.video_info_box {
  padding-left: 51px;
}
/* Tags */
.tags_box {
  display: flex;
  align-items: center;
}
.tags_item {
  padding: 10px;
  color: #6bb8ff;
  background: #15131c;
  font-weight: 400;
  font-size: 19px;
  margin-right: 7px;
}
/* Video Title */
.video_titles {
  margin-bottom: 50px;
}
.video_main_name {
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 13px;
}

.channel_info {
  display: flex;
  align-items: center;
  margin-bottom: 41px;
}
/* channel content */
.channel_content {
  display: flex;
  align-items: center;
  margin-right: 41px;
}
.channel_main_info {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}
.channel_main_name {
  font-weight: 400;
  font-size: 38px;
}
.channel_main_views {
  font-weight: 400;
  font-size: 26px;
}

.channel_subscribe {
  font-weight: 400;
  font-size: 23px;
  background: linear-gradient(182.53deg,
      rgba(234, 0, 213, 0.3) 3.75%,
      rgba(61, 94, 255, 0.3) 56.09%,
      rgba(0, 234, 242, 0.3) 102.36%);
  border-radius: 6.0058px;
  padding: 12px;
  text-transform: uppercase;
  margin-right: 40px;
}

.channel_base_info {
  padding: 15px 25px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 3.63884px 3.63884px 24.5622px rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(47.1803px);
}
.channel_base_info:not(:last-child) {
  margin-right: 22px;
}
.channel_value {
  font-weight: 400;
  font-size: 23px;
}
.channel_key {
  font-weight: 400;
  font-size: 18px;
}
.playlist_content {
  height: 100%;
  flex-basis: 40%;
  flex-shrink: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(42px);
  /* overflow-y: scroll; */
}
.lines_content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 99px;
  margin-bottom: 0;
}
.line_btn {
  height: 100%;
  cursor: pointer;
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(85, 85, 85, 0.14);
}
.active {
  background: linear-gradient(273.52deg,
      rgba(0, 234, 242, 0.2) -54.44%,
      rgba(234, 0, 213, 0.2) 110.67%);
  backdrop-filter: blur(10px);
}
.line_title {
  font-weight: 400;
  font-size: 27px;
  margin-left: 25px;
}

.recomends_video {
  display: flex;
  margin-bottom: 25px;
  cursor: pointer;

  &_wrap {
    height: 100%;
    overflow-x: scroll;
  }

  img {
    aspect-ratio: 16/9;
  }
}
.recomends_video_info {
  margin-left: 27px;
}
.recomend_title {
  font-weight: 400;
  font-size: 23px;
  margin-bottom: 15px;
  padding-right: 30px;
}
.recomend_author {
  font-weight: 400;
  font-size: 23.5433px;
  color: #b1b1b1;
}

.comments_content {
  padding: 0 52px;
}
.comments {
  font-weight: 400;
  font-size: 24px;

  &_main {
    height: calc(100vh - 330px);
    overflow: hidden;
  }
}
@media (max-width: 2000px) {
  .video_name {
    font-size: 24px;
  }
  .headers_content {
    padding: 50px 30px 0 30px;
  }
  .lines_content {
    height: 80px;
    // margin-bottom: 40px;

    img {
      width: 30px;
    }
  }
  .line_title {
    font-size: 24px;
  }
  .recomend_title {
    font-size: 20px;
    margin-bottom: 12px;
  }
  .recomends_video_info {
    margin-left: 15px;
  }
  .video_box {
    margin-bottom: 32px;
  }
  .video_info_box {
    padding-left: 30px;
  }
  .channel_main_info {
    margin-left: 20px;
  }
  .channel_main_name {
    font-size: 32px;
  }
  .channel_main_views {
    font-size: 18px;
  }
  .channel_content {
    img {
      width: 70px;
    }
  }
  .comments {
    &_main {
      height: calc(100vh - 290px);
    }
  }
}
@media (max-width: 2000px) {
  .video_content {}
  .playlist_content {}
  .recomends_video img {
    max-width: 180px;
  }
  .video_name {
    font-size: 18px;
  }
  .video_main_name {
    font-size: 24px;
  }
  .recomend_title {
    font-size: 16px;
  }
  .headers_content {
    display: none;
  }
  .recomends_video {
    margin-bottom: 8px;
  }
  .lines_content {
    height: 50px;
    // margin-bottom: 20px;
  }
  .line_title {
    font-size: 18px;
    margin-left: 12px;
  }
  .channel_main_info {
    margin-left: 12px;
  }
  .channel_main_name {
    font-size: 24px;
  }
  .channel_main_views {
    font-size: 14px;
  }
  .channel_content {
    img {
      width: 50px;
    }
  }
  .channel_subscribe {
    font-size: 16px;
    padding: 10px;
    margin-right: 20px;
  }
  .channel_base_info {
    margin-right: 8px;
    padding: 12px;

    .channel_value {
      font-size: 16px;
    }
    .channel_key {
      font-size: 14px;
    }
  }
  .channel_info {
    margin-bottom: 20px;
  }
  .comments_content {
    padding: 0 30px;
  }
  .comments {
    font-size: 14px;
  }
  .recomends_video_wrap {}
  .comments {
    &_main {}
  }
}
@media (max-width: 1600px) {
  .recomends_video_wrap {}
  .playlist_content {
    flex-grow: 2;

  }
  .video_content {}
  .comments {
    &_main {}
  }
}
</style>
  