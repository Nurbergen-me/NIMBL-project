<template>
    <div class="marketplace_2">
        <div class="header_content">
            <div class="header_titles">
                <div class="header_title">Discover, collect, and sell Channel NFTs and Passes</div>
                <div class="header_subtitle">Nimbl is the world’s first and largest tokenized video-sharing platform</div>
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
        <div class="body_content">
            <HeaderTraiding></HeaderTraiding>  
            <MarketTable></MarketTable>
            <MarketLaunchpad :type="1"></MarketLaunchpad>
            <MarketOpportunities :type="2"></MarketOpportunities>
            <MarketGainer></MarketGainer>
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
    name: 'TestPage2',
    data() {
        return {
            headerButton: 1
        }
    },
    components: {
        MarketTable,
        MarketLaunchpad,
        HeaderTraiding,
        MarketOpportunities,
        MarketGainer
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
    .marketplace_2 {
        width: 100%;
        overflow: auto;
        .header_content {
            background: url('@/assets/marketplace/bg-market2.png') no-repeat;
            background-size: cover;
            background-position: center center;
            object-fit: contain;
            position: relative;
            height: 1100px;
            .header_titles {
                height: 100%;
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                padding: 0 80px;
                .header_title {
                    font-weight: 400;
                    font-size: 80px;
                    line-height: 116%;
                    margin-bottom: 50px;
                }
                .header_subtitle {
                    font-weight: 400;
                    font-size: 30px;
                    line-height: 116%;
                    opacity: 0.7;
                    margin-bottom: 50px;
                }
                .header_buttons {
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                    .button {
                        overflow: hidden;
                        padding: 15px 50px;
                        border: 3px solid rgba(59, 101, 255, 0.5);
                        border-radius: 12px;
                        font-weight: 400;
                        font-size: 30px;
                        line-height: 50px;
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
        }
        .body_content {
            padding: 50px 80px;
        }
    }
}
@media (max-width: 2000px) {
    .marketplace_2 {
        .header_content {
            .header_titles {
                width: 55%;
                .header_title {
                    font-size: 70px;
                    margin-bottom: 40px;
                }
            }
        }
    }
}
@media (max-width: 1800px) {
    .marketplace_2 {
        .header_content {
            .header_titles {
                width: 50%;
                .header_title {
                    font-size: 60px;
                    margin-bottom: 40px;
                }
                .header_subtitle {
                    font-size: 25px;
                    margin-bottom: 30px;
                }
                .header_buttons {
                    .button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 10px 30px;
                        font-size: 25px;
                    }
                }
                .header_footer {
                    &_text {
                        font-size: 20px;
                    }
                }
            }
        }
    }
}
</style>