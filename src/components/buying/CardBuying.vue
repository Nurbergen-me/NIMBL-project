<template>
    <div class="body">
        <div class="body_filters">
            <div class="filter">
                <div class="filter_buy active">
                    <div class="filter_buy_now">Buy now</div>
                    <label class="switch">
                        <input type="checkbox" checked />
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="filter_price">
                    <div class="filter_price_titles">
                        <div class="filter_price_title">Price</div>
                        <img
                            @click="priceDropdown = !priceDropdown"
                            :class="{ active: priceDropdown }"
                            class="price_icon"
                            src="@/assets/icons/arrow_down.svg"
                            alt=""
                        />
                    </div>
                    <div
                        class="filter_price_select"
                        :class="{ active: priceDropdown }"
                    >
                        <div class="select">
                            <div class="select_title">SOL</div>
                            <img
                                class="icon"
                                src="@/assets/icons/arrow_down.svg"
                                alt=""
                            />
                        </div>
                        <input
                            class="select select_input"
                            type="text"
                            placeholder="min"
                        />
                        <div class="select_text">to</div>
                        <input
                            class="select select_input"
                            type="text"
                            placeholder="max"
                        />
                    </div>
                </div>
                <div class="filter_buy">Recent</div>
                <div class="filter_buy">Live trade</div>
            </div>
        </div>
        <div class="body_contents">
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
                    <div class="content_button">Participate</div>
                </div>
            </div>
        </div>
        <MarketBuy></MarketBuy>
    </div>
</template>

<script>
import MarketBuy from "@/components/marketplace/MarketBuy.vue";
export default {
    name: 'CardBuying',
    components: {
        MarketBuy
    },
    data() {
        return {
            priceDropdown: true,
            cards: [
                {bg: '@/assets/buypage/card1-icon.svg', name: 'Nora Moyer', price: '126 NMBL', logo: 'com6-logo.svg'},
                {bg: '@/assets/buypage/buy2-logo.svg', name: 'BlueWard2', price: '134 NMBL', logo: 'com1-logo.svg'},
                {bg: '@/assets/buypage/buy3-logo.svg', name: 'DentGreen', price: '157 NMBL', logo: 'com2-logo.svg'},
                {bg: '@/assets/buypage/buy4-logo.svg', name: 'Kira Branch', price: '162 NMBL', logo: 'com3-logo.svg'},
                {bg: '@/assets/buypage/buy5-logo.svg', name: 'Liberly Carney', price: '177 NMBL', logo: 'com4-logo.svg'},
                {bg: '@/assets/buypage/buy6-logo.svg', name: 'Keenan Wright', price: '185 NMBL', logo: 'com5-logo.svg'},

            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.body {
    width: 100%;
    display: grid;
    grid-template-columns: 430px 4fr 2fr;
    gap: 20px;
    align-items: flex-start;
    &_filters {
        cursor: pointer;
        .filter_search {
            background: #1a1b1c;
            position: relative;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            margin-bottom: 25px;
            &::before {
                content: url("@/assets/icons/search.svg");
                margin-top: 9px;
                margin-left: 8px;
            }
            .search {
                width: 100%;
                padding-left: 15px;
                font-weight: 400;
                font-size: 16px;
            }
        }
        .filter {
            width: 100%;
            // width: 505px;
            background: rgba(33, 35, 52, 0.45);
            box-shadow: inset 4.66412px 4.66412px 31.4828px
                rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(60.4738px);
            .filter_buy {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 400;
                font-size: 16px;
                &.active {
                    background: #0c111e;
                }
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 52px;
                    height: 30px;
                }

                .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    -webkit-transition: 0.4s;
                    transition: 0.4s;
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 22px;
                    width: 22px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    -webkit-transition: 0.4s;
                    transition: 0.4s;
                }

                input:checked + .slider {
                    background-color: #ea00d5;
                }

                input:focus + .slider {
                    box-shadow: 0 0 1px #2196f3;
                }

                input:checked + .slider:before {
                    -webkit-transform: translateX(20px);
                    -ms-transform: translateX(20px);
                    transform: translateX(22px);
                }

                /* Rounded sliders */
                .slider.round {
                    border-radius: 34px;
                }

                .slider.round:before {
                    border-radius: 50%;
                }
            }
            .filter_price {
                &_titles {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .filter_price_title {
                        font-weight: 400;
                        font-size: 16px;
                    }
                    .price_icon {
                        transition: all 0.5s ease;
                        &.active {
                            transform: rotate(180deg);
                        }
                    }
                }
                &_select {
                    transition: all 0.5s ease-out;
                    display: none;
                    overflow: hidden;

                    justify-items: center;
                    align-items: center;
                    gap: 10px;
                    .select {
                        width: 100px;
                        height: 100%;
                        padding: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border: 1px solid #3b4760;
                        border-radius: 6px;
                        font-size: 16px;
                        &_text {
                            font-size: 16px;
                        }
                    }
                    .select_input {
                        font-size: 16px;
                        padding: 10px;
                        border: 1px solid #3b4760;
                        border-radius: 6px;
                    }
                    &.active {
                        overflow: auto;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                    }
                }
                & > * {
                    min-height: 60px;
                }
            }
            & > * {
                padding: 15px 10px;
            }
        }
    }
    &_contents {
        .content_header {
            margin: 0 30px 30px 30px;
            display: flex;
            align-items: center;
            .header_items {
                display: flex;
                align-items: center;
                margin-right: 50px;
                .header_item {
                    cursor: pointer;
                    padding: 10px 40px;
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: inset 3.08919px 3.08919px 20.852px
                        rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(40.0537px);
                    &_text {
                        font-size: 16px;
                    }
                    &_icon {
                        object-fit: cover;
                        width: 28px;
                        height: 28px;
                        margin-right: 10px;
                    }
                    &.active {
                        background: linear-gradient(
                            273.52deg,
                            rgba(0, 234, 242, 0.2) -54.44%,
                            rgba(234, 0, 213, 0.2) 110.67%
                        );
                        backdrop-filter: blur(7.72298px);
                    }
                }
            }
            .header_reverse {
                cursor: pointer;
                display: flex;
                align-items: center;
                &_icon {
                    margin-right: 5px;
                    object-fit: cover;
                    padding: 5px;
                    width: 30px;
                    height: 30px;
                    border: 1px solid #444444;
                }
                &_text {
                    font-size: 16px;
                    color: #acacac;
                    opacity: 0.6;
                }
            }
        }
        .content_main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 30px;
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
    }
}
@media (max-width: 2000px) {
    .body {
        display: grid;
        grid-template-columns: 380px 2fr 480px;

        &_filters {
            .filter_search {
                .search {
                    font-size: 16px;
                }
            }
            .filter {
                .filter_buy {
                    padding: 10px 20px;
                    font-size: 16px;
                }
                .filter_price {
                    .filter_price_title {
                        font-size: 16px;
                    }
                    &_select {
                        .select {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
        &_contents {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .content_header {
                .header_items {
                    .header_item {
                        padding: 18px 30px;
                        &_text {
                            font-size: 16px;
                        }
                    }
                }
            }
            .content_main {
                display: grid;
                grid-template-columns: 380px 380px;
                grid-template-rows: 1fr 1fr 1fr;
                .content_box {
                    .content_box_body {
                        .content_titles {
                            gap: 10px;
                            .content_title_left {
                                .content_title {
                                    font-size: 16px;
                                }
                            }
                            .content_money {
                                font-style: 16px;
                                .content_price,
                                .content_value {
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                    .content_button {
                        font-size: 16px;
                        padding: 7px 15px;
                    }
                }
            }
        }
    }
}
@media (max-width: 1700px) {
    .body {
        display: grid;
        grid-template-columns: 380px 1.5fr 480px;
        &_contents {
            .content_main {
                display: grid;
                grid-template-columns: 300px 300px;
                grid-template-rows: 1fr 1fr 1fr;
            }
        }
    }
}
@media (max-width: 1400px) {
    .marketplace_detail {
        .body {
            &_contents {
                .content_main {
                    display: grid;
                    grid-template-columns: 250px 250px;
                    grid-template-rows: 1fr 1fr 1fr;
                }
            }
        }
    }
}
</style>