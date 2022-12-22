<template>
    <div class="market">
        <div class="header_content">
            <HeaderTraiding></HeaderTraiding>  
        </div>
        <div class="main_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import MainCategory from '@/components/MainCategory.vue';
import HeaderTraiding from '@/components/HeaderTraiding.vue'
export default {
    name: 'Market',
    components: {
        MainCategory,
        HeaderTraiding,
    },
    data() {
        return {
            name: null,
            category: this.initLocal()
        }
    },
    watch: {
        category: function(val) {
            console.log(val, 'val')
        }
    },
    methods: {
        initLocal() {
            console.log(localStorage.getItem('category'))
            return localStorage.getItem('category')
        }
    }
}
</script>

<style lang="scss" scoped>
.market {
    position: relative;
    width: 100%;
    height: 100%;
    .header_content {
        width: 80%;
        margin: 0 auto;
    }
    .main_content {
        height: 100%;
        padding: 10px;
    }
}
</style>