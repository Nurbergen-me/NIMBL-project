<script>
import Navbar from '@/components/Navbar.vue'
import MainCategory from '@/components/MainCategory.vue';
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    MainCategory,
    VideoPlayer
  },
  
  data() {
    return {
        isContinuesVideoPlayerShown: false
    }
  },
  mounted() {
    console.log(this.$store.state)
    this.isContinuesVideoPlayerShown = this.$store.state.timeToContinue > 0;
  },
  methods: {
    openPopup() {
        var params = [
            'height='+screen.height,
            'width='+screen.width,
            'fullscreen=yes' // only works in IE, but here for completeness
        ].join(',');

        var popup = window.open(window.location.href, 'popup_window', params); 
        popup.moveTo(0,0);
    }
  }
}
</script>

<template>
    <div id="app">
        <!-- <div class="top-links">
            <button class="open" @click="openPopup">
                Open in full screen
            </button>
            <div class="menu" @click="$router.push({'name': 'detail'})">
                Video detail
            </div>
            <div class="menu" @click="$router.push({'name': 'marketplace-view'})">
                Market
            </div>
            <div class="menu" @click="$router.push({'name': 'test-page'})">
                Market 2
            </div>
            <div class="menu" @click="$router.push({'name': 'test-page2'})">
                Market 3
            </div>
            <div class="menu" @click="$router.push({'name': 'test-detail'})">
                Market 4
            </div>
        </div> -->
        <Navbar />
        <div class="app">
            <router-view></router-view>
            <MainCategory/>
            <VideoPlayer class="video-player" v-if="isContinuesVideoPlayerShown"/>
        </div>
    </div>
</template>

<style scoped>
.top-links {
    display: none;
}
.menu {
    cursor: pointer;
    display: inline-block;
    margin-left: 40px;
}
.video-player {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  margin-right: 12px;
  margin-bottom: 12px;
}
</style>
