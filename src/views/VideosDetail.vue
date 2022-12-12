<template>
  <div class="detail">
    <div class="wrapper">
      <h1 @click=$router.back()>{{ title }}</h1>
      <video-player />
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    // set the title from video player store
    this.title = this.$store.state.title;
    // back to home when no video registered
    if (this.title === "") this.$router.push("/");
  },
};
</script>

<style>
.detail {
  width: 100%;
}
.detail .wrapper {
  display: flex;
  flex-wrap: wrap;
}
.detail .wrapper h1 {
  width: 100%;
}
</style>