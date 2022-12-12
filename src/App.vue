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
        <component :is="Navbar" />
        <div class="app">
            <router-view></router-view>
            <component :is="MainCategory" />
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
</style>
