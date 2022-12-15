<template>
    <div class="video-player" @mousedown="mouseEnter" @mousemove="mouseMove" @mouseup="mouseLeave" :style="{'right': videoRigth + 'px', 'bottom': videoBottom + 'px'}">
        <!-- using html5 video element, and add some dom like onPlaying onPause ... -->
        <video :src="video" :poster="thumbnail" ref="video" controls v-on:playing="onPlay" v-on:pause="onPause" v-on:timeupdate="onTimeUpdate" v-bind:autoplay="isAutoPlay" />
    </div>
</template>

<script>
export default {
    data() {
        // some needed data
        return {
            id: "",
            video: "",
            thumbnail: "",
            currentTime: 0,
            isAutoPlay: false,
            realTimeToContinue: 0,
            clientX: 0,
            clientY: 0,
            onMove: false,
            videoRigth: 0,
            videoBottom: 0,
        };
    }, 
    
    created() {
        // this one cannot be checked on mounted
        this.realTimeToContinue = this.$store.state.timeToContinue;
    },
    
    mounted() {
        // this data get from videoPlayer State
        this.onMove = false
        this.id = this.$store.state.id;
        this.video = this.$store.state.video;
        this.thumbnail = this.$store.state.thumbnail;
        // the video will get the continue time from video player store
        // the video also will play if is playing state is true in video player store
        if (this.realTimeToContinue > 0) {
            this.$refs.video.currentTime = this.$store.state.timeToContinue;
            this.isAutoPlay = this.$store.state.isPlaying;
        }
    },
    
    unmounted() {
        // when the component destroyed it will store the current time of the playing video
        // to video player store
        // this will be the "key" to continue or not the video in another components
        this.$store.dispatch("setTimeToContinue", { timeToContinue: this.currentTime });
    },
    
    methods: {
        // some needed methods
        onPlay() {
            this.$store.dispatch("play");
        },
        
        onPause() {
            this.$store.dispatch("pause");
        },
        
        onTimeUpdate(e) {
            // console.log(e.target.currentTime)
            this.currentTime = e.target.currentTime;
        },
        mouseEnter(event) {
            this.onMove = true
            if (this.clientX === 0 && this.clientY === 0) {
                this.clientX = event.clientX
                this.clientY = event.clientY
            }
        },
        mouseMove(event) {
            if (this.onMove) {
                this.videoRigth = Math.max(this.clientX - event.clientX, 0)
                this.videoBottom = Math.max(this.clientY - event.clientY, 0) 
            }
        },
        mouseLeave(event) {
            // console.log('end',event)
            this.onMove = false
        }
    }
};
</script>

<style>
.video-player {
    width: 100%;
    height: auto;
    z-index: 112;
    border-radius: 16px;
    overflow: hidden;
}
.video-player video {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 16px;
}
</style>