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
        console.log(this.$route.path === '/')
        // this.isContinuesVideoPlayerShown = this.$store.state.timeToContinue > 0;
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
        },
        checkCurrentVideo() {
            return this.$store.state.timeToContinue > 0
        }
    }
}
</script>

<template>
    <div id="app">
        <Navbar class="navbar" />
        <div class="app">
            <router-view></router-view>
            <MainCategory/>
            <VideoPlayer class="video-player" v-if="checkCurrentVideo() && (this.$route.path !== '/' || this.$route.path !== '/detail')"/>
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
