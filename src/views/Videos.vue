<template>
  <div class="home">
    <div class="wrapper">
      <h1>Videos</h1>

      <div class="item" v-for="video in videos" :key="video.id">
        <div
          class="video-preview"
          @click="
            registerVideo(video.id, video.title, video.thumbnail, video.video)
          "
        >
          <img :src="video.thumbnail" alt="video" />
          <span>{{ video.title }}</span>

          <div class="duration">
            <span>1:00</span>
          </div>
        </div>
      </div>
    </div>

    <!-- this video player will show if timeToContinue on video player state > 0 -->
    <video-player class="video-player" v-if="isContinuesVideoPlayerShown" />
  </div>
</template>

<script>
import VideoPlayer from "../components/VideoPlayer.vue";
export default {
  components: {
    VideoPlayer,
  },
  
  data() {
    return {
      // data dummy
      videos: [
        {
          id: 1,
          title: "Title One",
          thumbnail:
            "https://images.unsplash.com/photo-1605548109944-9040d0972bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
        {
          id: 2,
          title: "Title Two",
          thumbnail:
            "https://images.unsplash.com/photo-1605453171056-1bf928a07ea7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
        {
          id: 3,
          title: "Title Three",
          thumbnail:
            "https://images.unsplash.com/photo-1605447302541-bd14aa1417ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
        {
          id: 4,
          title: "Title Four",
          thumbnail:
            "https://images.unsplash.com/photo-1605539586670-ae1191cd0e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
        {
          id: 5,
          title: "Title Five",
          thumbnail:
            "https://images.unsplash.com/photo-1605577307559-5ffc86700cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
        {
          id: 6,
          title: "Title Six",
          thumbnail:
            "https://images.unsplash.com/photo-1605429480986-cd7f3a7ff857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
        {
          id: 7,
          title: "Title Seven",
          thumbnail:
            "https://images.unsplash.com/photo-1605559241652-b2165a83f931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
        {
          id: 8,
          title: "Title Eigth",
          thumbnail:
            "https://images.unsplash.com/photo-1605559096835-2718aa6f1a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          video:
            "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4",
        },
      ],
      
      // show hide the video-player
      isContinuesVideoPlayerShown: false,
    };
  },
  mounted() {
    // video player will shown if time to continue from video player store state > 0
    // console.log(this.$store.state)
    this.isContinuesVideoPlayerShown = this.$store.state.timeToContinue > 0;
  },
  methods: {
    registerVideo(id, title, thumbnail, video) {
      // check if current id on video player state is same with passed id from list
      // if it's not same this codes will register a new video
      // if same the video will continue in detail view later
      if (id !== this.$store.state.id) {
        this.$store.dispatch("register", {
          id: id,
          title: title,
          thumbnail: thumbnail,
          video: video,
        });
      }
      this.$router.push("/videos/" + id);
    },
  },
};
</script>

<style>
.home {
  width: 100%;
}
.home .wrapper {
  display: flex;
  flex-wrap: wrap;
}
.home .wrapper h1 {
  width: 100%;
}
.home .wrapper .item {
  width: 23%;
  flex: 1 1 auto;
  margin: 5px;
  padding-bottom: 10px;
}
.home .video-player {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  margin-right: 12px;
  margin-bottom: 12px;
}
.home .wrapper .video-preview {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
}
.home .wrapper .video-preview img {
  width: 100%;
  height: 165px;
  object-fit: "cover";
}
.home .wrapper .video-preview span {
  padding-top: 10px;
  font-size: 16px;
  font: bold;
}
.home .wrapper .video-preview .duration {
  margin-left: auto;
  margin-top: -40px;
  margin-right: 16px;
}
.home .wrapper .video-preview .duration span {
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding-right: 18px;
  padding-left: 18px;
  padding-bottom: 10px;
}
</style>