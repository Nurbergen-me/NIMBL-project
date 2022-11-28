<template>
    <div class="marketplace">
        <div class="navbar">
            <div class="navbar_item" :class="{'active': navbarButton === index}" v-for="(item, index) in navbar" @click="navbarButton = index">
                <!-- <img class="navbar_img" :class="{'active': navbarButton === index}" :src="`@/assets/marketplace/navbar/${item.img}.svg`" alt=""> -->
                <img v-if="index === 0" class="navbar_img" :class="{'active': navbarButton === index}" src="@/assets/marketplace/navbar/events.svg" alt="">
                <img v-if="index === 1" class="navbar_img" :class="{'active': navbarButton === index}" src="@/assets/marketplace/navbar/launchnad.svg" alt="">
                <img v-if="index === 2" class="navbar_img" :class="{'active': navbarButton === index}" src="@/assets/marketplace/navbar/movers.svg" alt="">
                <img v-if="index === 3" class="navbar_img" :class="{'active': navbarButton === index}" src="@/assets/marketplace/navbar/ranking.svg" alt="">
                <img v-if="index === 4" class="navbar_img" :class="{'active': navbarButton === index}" src="@/assets/marketplace/navbar/stats.svg" alt="">
                <img v-if="index === 5" class="navbar_img" :class="{'active': navbarButton === index}" src="@/assets/marketplace/navbar/whitelist.svg" alt="">

                <div class="narvar_text" :class="{'active': navbarButton === index}">{{item.text}}</div>
            </div>
        </div>

        <div class="main">
            <div class="container">

                <div class="header_content">
                    <img class="header_img" src="@/assets/marketplace/market-header.jpg" alt="">
                    <div class="header_titles">
                        <div class="header_title">Discover, collect, and sell Channel NFTs and Passes</div>
                        <div class="header_subtitle">Neemble is the world’s first and largest tokenized video-sharing platform</div>
                        <div class="header_buttons">
                            <button class="button" :class="{active: headerButton === 1}" @click="headerButton = 1">Create</button>
                            <button class="button" :class="{active: headerButton === 2}" @click="headerButton = 2">Explore</button>
                        </div>
                        <div class="header_footer">
                            <img class="header_footer_icon" src="../assets/marketplace/pause.svg" alt="">
                            <div class="header_footer_text">Learn more about Neemble</div>
                        </div>
                    </div>
                </div>

                <HeaderTraiding></HeaderTraiding>  
                <MarketTable></MarketTable>
                <MarketLaunchpad :type="1"></MarketLaunchpad>
                <MarketOpportunities :type="1"></MarketOpportunities>
                <MarketGainer></MarketGainer>

            </div>

        </div>

    </div>
</template>

<script>
import MarketTable from '@/components/marketplace/MarketTable.vue'
import MarketLaunchpad from '@/components/marketplace/MarketLaunchpad.vue'
import HeaderTraiding from '@/components/HeaderTraiding.vue'
import MarketOpportunities from '@/components/marketplace/MarketOpportunities.vue'
import MarketGainer from '@/components/marketplace/MarketGainer.vue'
export default {
    name: 'TestPage',
    components: {
        MarketTable,
        MarketLaunchpad,
        HeaderTraiding,
        MarketOpportunities,
        MarketGainer
    },
    data() {
        return {
            headerButton: 1,
            navbarButton: 1,
            navbar: [
                {img: 'events', text: 'Events'},
                {img: 'launchnad', text: 'Launchnad'},
                {img: 'movers', text: 'Movers'},
                {img: 'ranking', text: 'Ranking'},
                {img: 'stats', text: 'Stats'},
                {img: 'whitelist', text: 'Whitelist'}

            ]
        }
    },
    methods: {
        toogleHeaderButton() {
        }
    }
}

</script>

<style scoped lang="scss">

.marketplace {
    display: flex;   
    align-items: flex-start;
    color: #FFFFFF;
    height: 100%;
    overflow: auto;
    transition: all 0.3s ease;
    .navbar {
        padding: 40px;
        background: #0D192F;
        border-right: 1px solid rgba(191, 25, 224, 0.36);
        .navbar_item {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-bottom: 40px;
            color: #8E8E8E;
            .navbar_img {
                width: 30px;
                height: 30px;
                margin-right: 22px;
                filter: invert(59%) sepia(8%) saturate(9%) hue-rotate(330deg) brightness(94%) contrast(87%);
                &.active {
                    filter: none;
                }
            }
            .narvar_text {
                transition: transform 250ms;
                position: relative;
                font-weight: 400;
                font-size: 29px;
                line-height: 34px;
                &:hover, &.active {
                    transition: all 0.3s ease;
                    &::before {
                        content: "";
                        position: absolute;
                        top: 100%;
                        width: 50px;
                        left: 0;
                        height: 3px;
                        border-radius: 2px;
                        background: linear-gradient(273.27deg, #00EAF2 0.47%, #EA00D5 99.64%);
                    }
                }
            }
            &.active {
                color: #FFFFFF;
            }
        }
    }

    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        .header_content {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 100px;
            .header_img {
                width: 50%;
                height: 620px;
                object-fit: contain;
                margin-right: 40px;
            }
            .header_titles {
                width: 50%;
                .header_title {
                    width: 80%;
                    font-weight: 400;
                    font-size: 71.0721px;
                    line-height: 100.5%;
                    margin-bottom: 2%;
                }
                .header_subtitle {
                    width: 70%;
                    font-weight: 400;
                    font-size: 36.6465px;
                    line-height: 90.5%;
                    opacity: 0.77;
                    margin-bottom: 5%;
                }
                .header_buttons {
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                    .button {
                        overflow: hidden;
                        padding: 25px 50px;
                        border: 3px solid rgba(59, 101, 255, 0.5);
                        border-radius: 12px;
                        font-weight: 400;
                        font-size: 40px;
                        line-height: 49px;
                        letter-spacing: 0.02em;
                        text-align: center;
                        transition: all 0.5s ease-in;
                        &.active {
                            border-radius: 12px;
                            background: linear-gradient(90.24deg, rgba(1, 234, 242, 0.5) 0.21%, rgba(59, 101, 255, 0.5) 57.08%, rgba(215, 11, 218, 0.5) 102.91%);
                        }
                        &:hover {
                            background: linear-gradient(90.24deg, rgba(1, 234, 242, 0.5) 0.21%, rgba(59, 101, 255, 0.5) 57.08%, rgba(215, 11, 218, 0.5) 102.91%);
                        }
                        &:not(:last-child) {
                            margin-right: 30px;
                        }
                    }
                }

                .header_footer {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    &_icon {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #473F9E;
                        padding: 8px;
                        border-radius: 50%;
                        margin-right: 15px;
                    }
                    &_text {
                        font-weight: 400;
                        font-size: 26.652px;
                        line-height: 29px;
                        color: #473F9E;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            .header_footer {
                display: flex;
                align-items: center;
            }
        }

    }
}
</style>