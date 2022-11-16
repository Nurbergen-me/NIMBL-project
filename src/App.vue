<script setup>
import Navbar from '@/components/Navbar.vue'
import MainCategory from '@/components/MainCategory.vue';
</script>

<template>
    <div id="app">
        <component :is="Navbar" />
        <div class="app">
            <router-view></router-view>
            <component :is="MainCategory" />
        </div>
    </div>
</template>

<style scoped>

</style>
