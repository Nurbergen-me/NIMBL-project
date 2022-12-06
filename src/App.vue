<script setup>
import Navbar from '@/components/Navbar.vue'
import MainCategory from '@/components/MainCategory.vue';

function openPopup() {

    var params = [
        'height='+screen.height,
        'width='+screen.width,
        'fullscreen=yes' // only works in IE, but here for completeness
    ].join(',');

    var popup = window.open(window.location.href, 'popup_window', params); 
    popup.moveTo(0,0);
}
</script>

<template>
    <div id="app">
        <button class="open" @click="openPopup">
            Open in full screen
        </button>
        <component :is="Navbar" />
        <div class="app">
            <router-view></router-view>
            <!-- <component :is="MainCategory" /> -->
        </div>
    </div>
</template>

<style scoped>

</style>
