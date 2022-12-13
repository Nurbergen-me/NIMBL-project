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
                        <div class="content_title">@{{item.name}}</div>
                    </div>
                    <div class="content_money">
                        <div class="content_price">floor price</div>
                        <div class="content_value">{{item.price}}</div>
                    </div>
                </div>
            </div>
            <div class="content_line"></div>
            <div class="content_button">BUY NOW</div>
        </div>
    </div>
</template>

<script>
export default {
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    padding: 0 10px;
    .content_box {
        cursor: pointer;
        border: 1px solid rgba(61, 94, 255, 0.7);
        border-radius: 6px;
        padding: 10px;
        transition: all 0.3s ease;
        .content_box_header {
            margin-bottom: 10px;
            .content_logo {
                height: 400px;
                width: 100%;
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
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        margin-right: 5px;
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

                        background: linear-gradient(
                            270deg,
                            #ea00d5 -6.27%,
                            #3d5eff 60.51%,
                            #00eaf2 109.84%
                        );
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
            background: linear-gradient(
                270deg,
                #ea00d5 -6.27%,
                #3d5eff 60.51%,
                #00eaf2 109.84%
            );
        }
        .content_button {
            cursor: pointer;
            font-family: "Octosquares-Bold";
            clip-path: polygon(
                10% 0,
                100% 0,
                100% 60%,
                89.8% 100%,
                0 100%,
                0 40%
            );
            font-size: 16px;
            text-align: center;
            padding: 10px 25px;
            background: linear-gradient(
                106.95deg,
                rgba(1, 167, 255, 0.8) 0.4%,
                rgba(255, 0, 245, 0.8) 103.58%
            );
            box-shadow: inset 6.43931px 9.36627px 19.3179px
                rgba(255, 255, 255, 0.11);
            backdrop-filter: blur(54.4415px);
            border: 5px solid rgba(13, 20, 41, 0.44);
            opacity: 0.85;
            &:hover {
                opacity: 1;
            }
        }
        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>