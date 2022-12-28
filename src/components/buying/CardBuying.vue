<template>
    <div class="content_main">
        <div class="content_box" v-for="(item, index) in cards" :key="index">
            <div class="content_box_header">
                <img v-if="index === 0" class="content_logo" src="@/assets/buypage/card1-icon.svg" alt="" />
                <img v-if="index === 1" class="content_logo" src="@/assets/buypage/buy2-logo.svg" alt="" />
                <img v-if="index === 2" class="content_logo" src="@/assets/buypage/buy3-logo.svg" alt="" />
                <img v-if="index === 3" class="content_logo" src="@/assets/buypage/buy4-logo.svg" alt="" />
                <img v-if="index === 4" class="content_logo" src="@/assets/buypage/buy5-logo.svg" alt="" />
                <img v-if="index === 5" class="content_logo" src="@/assets/buypage/buy6-logo.svg" alt="" />
            </div>
            <div class="content_box_body">
                <div class="content_titles">
                    <div class="content_title_left">
                        <img class="video_box_logo" v-if="index === 0" src="@/assets/community/com1-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 1" src="@/assets/community/com2-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 2" src="@/assets/community/com3-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 3" src="@/assets/community/com4-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 4" src="@/assets/community/com5-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 5" src="@/assets/community/com6-logo.svg" alt="" />
                        <div class="content_title">@{{ item.name }}</div>
                    </div>
                    <div class="content_money">
                        <div class="content_price">floor price</div>
                        <div class="content_value">{{ item.price }}</div>
                    </div>
                </div>
            </div>
            <div class="content_line"></div>
           <app-button>BUY NOW</app-button>
        </div>
    </div>
</template>

<script>
import AppButton from '../AppButton.vue';


export default {
    components: {
        AppButton,
    },
    name: 'CardBuying',
    data() {
        return {
            priceDropdown: true,
            cards: [
                {bg: '@/assets/buypage/card1-icon.svg', name: 'Nora Moyer', price: '126 NMBL', logo: 'com6-logo.svg'},
                {bg: '@/assets/buypage/buy2-logo.svg', name: 'BlueWard2', price: '134 NMBL', logo: 'com1-logo.svg'},
                {bg: '@/assets/buypage/buy3-logo.svg', name: 'DentGreen', price: '157 NMBL', logo: 'com2-logo.svg'},
                {bg: '@/assets/buypage/buy4-logo.svg', name: 'Kira Branch', price: '162 NMBL', logo: 'com3-logo.svg'},
                {bg: '@/assets/buypage/buy5-logo.svg', name: 'Liberly Carney', price: '177 NMBL', logo: 'com4-logo.svg'},
                {bg: '@/assets/buypage/buy1-logo.svg', name: 'Charly Kent', price: '186 NMBL', logo: 'com5-logo.svg'}
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.content_main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .content_box {
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid rgba(61, 94, 255, 0.7);
        padding: 10px 10px 17px;
        transition: all 0.3s ease;
        .content_box_header {
            margin-bottom: 10px;
            .content_logo {
                display: block;
                border: solid;
                box-sizing: content-box;
                border-image-slice: 1;
                border-width: 1px;
                border-image-source: linear-gradient(90deg, #D375FF 0%, #FFC240 16.43%, #649BFF 34.14%, #FFC240 48.72%, #ABDD42 62.78%, #07FFFF 77.37%, #0F50C7 91.43%, #D375FF 100%);
                width: 300px;
                object-fit: cover;
                aspect-ratio: 1/1;
            }
        }
        .content_box_body {
            align-items: center;
            margin-bottom: 10px;
            .content_titles {
                display: grid;
                grid-template-columns: 2.5fr 1fr;
                .content_title_left {
                    display: flex;
                    align-items: center;
                    .video_box_logo {
                        object-fit: cover;
                        width: 31px;
                        height: 31px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                    .content_title {
                        font-size: 16px;
                    }
                }
                .content_money {
                    white-space: nowrap;
                    .content_price {
                        font-size: 16px;
                    }
                    .content_value {
                        font-size: 16px;
                        font-weight: 600;
                        background: linear-gradient(270deg,
                                #ea00d5 -6.27%,
                                #3d5eff 60.51%,
                                #00eaf2 109.84%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                }
            }
        }
        .content_line {
            margin: 0 auto 15px auto;
            height: 1px;
            width: 50px;
            background: linear-gradient(270deg,
                    #ea00d5 -6.27%,
                    #3d5eff 60.51%,
                    #00eaf2 109.84%);
        }
       

        &:hover {
            transform: scale(1.05);
        }
    }
}

@media (max-width: 2000px) {
    .content_main {
        gap: 30px;
        .content_box {
            padding: 7px 7px 12px;
            .content_box_header {
                .content_logo {
                    width: 240px;
                }
            }
            .content_box_body {
                margin-bottom: 10px;
                .content_titles {

                    .content_title_left {

                        .video_box_logo {

                            width: 20px;
                            height: 20px;
                            margin-right: 7px;
                        }
                        .content_title {
                            font-size: 14px;
                        }
                    }
                    .content_money {
                        white-space: nowrap;
                        .content_price {
                            font-size: 13px;
                        }
                        .content_value {
                            font-size: 13px;
                        }
                    }
                }
            }
            .content_line {
                margin: 0 auto 10px auto;

            }
          
            &:hover {
                transform: scale(1.05);
            }
        }
    }
}
</style>