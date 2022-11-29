<template>
    <div class="marketplace_detail">
        <div class="header">
            <div class="header_head">
                <img @click="$router.push({name: 'test-page'})" class="head_back" src="@/assets/icons/back.svg" alt="">
                <img class="head_logo" src="@/assets/marketplace/detail/chanel_logo.svg" alt="">
            </div>
            <div class="header_footer">
                <div class="header_footer_titles">
                    <div class="header_footer_title">DandelionWist</div>
                    <div class="header_footer_text">A collection of 10,000 zombies evolving through the sweet juicy brains their owners decide to feed them. Zombies are cute yet they'd crack your skull open and jam a straw through your cortex to sip on that sweet white matter.</div>
                </div>
                <div class="header_footer_boxs">
                    <div class="header_footer_box" v-for="item in 8">
                        <div class="header_footer_box_title">41 NMBL</div>
                        <div class="header_footer_box_text">Floor Price</div>
                    </div>
                </div>
                <div class="header_footer_btns">
                    <img class="header_footer_btn" src="@/assets/icons/share-btn.svg" alt="">
                    <img class="header_footer_btn" src="@/assets/icons/mote-btn.svg" alt="">
                </div>
            </div>
            <div class="header_footer_line"></div>
        </div>
        <div class="body">
            <div class="body_filters">
                <div class="filter_search">
                    <input placeholder="Search items" class="search" type="text"/>
                </div>
                <div class="filter">
                    <div class="filter_buy active">
                        <div class="filter_buy_now">Buy now</div>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>

                    </div>
                    <div class="filter_price">
                        <div class="filter_price_titles">
                            <div class="filter_price_title">Price</div>
                            <img @click="priceDropdown = !priceDropdown" :class="{'active': priceDropdown}" class="price_icon" src="@/assets/icons/arrow_down.svg" alt="" />
                        </div>
                        <div class="filter_price_select" :class="{'active': priceDropdown}">
                            <div class="select">
                                <div class="select_title">SOL</div>
                                <img class="icon" src="@/assets/icons/arrow_down.svg" alt="" />
                            </div>
                            <input class="select select_input" type="text" placeholder="min">
                            <div class="select_text">to</div>
                            <input class="select select_input" type="text" placeholder="max">
                        </div>
                    </div>
                    <div class="filter_buy">Recent</div>
                    <div class="filter_buy">Live trade</div>
                </div>
            </div>
            <div class="body_contents">
                <div class="content_header">
                    <div class="header_items">
                        <div class="header_item active">
                            <img class="header_item_icon" src="@/assets/marketplace/detail/detail-item.svg" alt="">
                            <div class="header_item_text">Items</div>
                        </div>
                        <div class="header_item">
                            <img class="header_item_icon" src="@/assets/marketplace/detail/detail-stat.svg" alt="">
                            <div class="header_item_text">Stats</div>
                        </div>
                    </div>
                    <div class="header_reverse">
                        <img class="header_reverse_icon" src="@/assets/marketplace/detail/detail-reverse.svg" alt="">
                        <div class="header_reserve_text">Refreshed a while ago</div>
                    </div>
                </div>
                <div class="content_main">
                    <div class="content_box" v-for="item in 6">
                        <div class="content_box_header">
                            <img class="content_logo" src="@/assets/marketplace/detail/cards/card1-icon.svg" alt="">
                        </div>
                        <div class="content_box_body">
                            <div class="content_titles">
                                <div class="content_title_left">
                                    <img class="video_box_logo" src="@/assets/icons/avatar.svg" alt="">
                                    <div class="content_title">@BlueWard2</div>
                                </div>
                                <div class="content_money">
                                    <div class="content_price">floor price</div>
                                    <div class="content_value">134 NMBL</div>
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
    </div>
</template>

<script>
import MarketBuy from '@/components/marketplace/MarketBuy.vue'
export default {
    name: 'TestPageDetail',
    components: {
        MarketBuy
    },
    data() {
        return {
            priceDropdown: true
        }
    }
}
</script>

<style lang="scss" scoped>

.marketplace_detail {
    height: 100%;
    .header {
        width: 100%;
        padding-top: 80px;
        margin-bottom: 3%;
        &_head {
            position: relative;
            padding: 0 90px;
            height: 400px;
            background: url('@/assets/marketplace/detail/navbar_market.png') no-repeat;
            background-position: center;
            background-size: cover;
            .head_back {
                position: absolute;
                top: 50px;
                padding: 10px 20px;
                background: rgba(255, 255, 255, 0.055);
                box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
                backdrop-filter: blur(30%);
                cursor: pointer;
            }
            .head_logo {
                position: absolute;
                bottom: -30px;
            }
        }
        &_footer {
            position: relative;
            display: grid;
            grid-template-columns: 2fr 4fr 0fr;
            gap: 20px;
            align-items: flex-start;
            padding: 60px 90px 0 90px;
            .header_footer_titles {
                .header_footer_title {
                    font-weight: 400;
                    font-size: 40px;
                    line-height: 63px;
                    margin-bottom: 10px;
                }
                .header_footer_text {
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 34px;
                }
            }
            .header_footer_boxs {
                display: grid;
                grid-template-columns: 250px 250px 250px 250px;
                grid-template-rows: 1fr 1fr;
                gap: 20px;
                justify-content: center;
                
                .header_footer_box {
                    cursor: pointer;
                    padding: 10px 30px;
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(46.5146px);
                    text-align: center;
                    opacity: 0.8;
                    transition: all 0.3s;
                    &:hover {
                        opacity: 1;
                    }
                    &_title {
                        font-weight: 600;
                        font-size: 22px;
                    }
                    &_text {
                        font-weight: 400;
                        font-size: 20px;
                        opacity: 0.86;
                    }
                }
            }
            .header_footer_btns {
                display: flex;
                align-items: center;
                cursor: pointer;
                .header_footer_btn:first-child {
                    margin-right: 20px;
                    &.hover {
                        filter: invert(87%) sepia(3%) saturate(2964%) hue-rotate(289deg) brightness(101%) contrast(86%);
                        // filter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(78deg) brightness(99%) contrast(106%);
                        // filter: none;
                    }
                }
            }
            &_line {
                margin: 30px 90px 0 90px;
                border: 1px solid #343959;
            } 
        }
    }
    .body {
        display: grid;
        grid-template-columns: 430px 4fr 2fr;
        gap: 20px;
        align-items: flex-start;
        &_filters {
            cursor: pointer;
            .filter_search {
                background: #1A1B1C;
                position: relative;
                display: flex;
                align-items: center;
                padding: 5px 10px;
                margin-bottom: 15px;
                &::before {
                    content: url("@/assets/icons/search.svg");
                    margin-top: 9px;
                    margin-left: 8px;
                }
                .search {
                    width: 100%;
                    padding-left: 15px;
                    font-weight: 400;
                    font-size: 23.3206px;
                }
            }
            .filter {
                width: 100%;
                // width: 505px;
                background: rgba(33, 35, 52, 0.45);
                box-shadow: inset 4.66412px 4.66412px 31.4828px rgba(255, 255, 255, 0.04);
                backdrop-filter: blur(60.4738px);
                .filter_buy {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: 400;
                    font-size: 27.9847px;
                    line-height: 39px;
                    &.active {
                        background: #0C111E;
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
                        -webkit-transition: .4s;
                        transition: .4s;
                    }

                    .slider:before {
                        position: absolute;
                        content: "";
                        height: 22px;
                        width: 22px;
                        left: 4px;
                        bottom: 4px;
                        background-color: white;
                        -webkit-transition: .4s;
                        transition: .4s;
                    }

                    input:checked + .slider {
                        background-color: #EA00D5;
                    }

                    input:focus + .slider {
                        box-shadow: 0 0 1px #2196F3;
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
                            font-size: 27.9847px;
                            line-height: 39px;
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
                            border: 1px solid #3B4760;
                            border-radius: 6px;
                            font-size: 23.3206px;
                            &_text {
                                font-size: 23.3206px;
                                line-height: 33px;
                            }
                        }
                        .select_input {
                            font-size: 23.3206px;
                            padding: 10px;
                            border: 1px solid #3B4760;
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
                        padding: 20px 50px;
                        display: flex;
                        align-items: center;
                        background: rgba(255, 255, 255, 0.05);
                        box-shadow: inset 3.08919px 3.08919px 20.852px rgba(255, 255, 255, 0.04);
                        backdrop-filter: blur(40.0537px);
                        &_text {
                            font-size: 24px;
                            line-height: 34px;
                        }
                        &_icon {
                            object-fit: cover;
                            width: 28px;
                            height: 28px;
                            margin-right: 10px;
                        }
                        &.active {
                            background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
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
                        font-size: 19.0089px;
                        line-height: 27px;
                        color: #ACACAC;
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
                    .content_box_header {
                        margin-bottom: 10px;
                        .content_logo {
                            height: 100%;
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
                                    font-size: 24px;
                                    line-height: 32px;
                                }
                            }
                            .content_money {
                                white-space: nowrap;
                                .content_price {
                                    font-size: 19px;
                                    line-height: 26px;
                                }
                                .content_value {
                                    font-size: 19px;
                                    line-height: 24px;

                                    background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
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
                        background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                    }
                    .content_button {
                        cursor: pointer;
                        font-family: "Octosquares-Bold";
                        clip-path: polygon(10% 0, 100% 0, 100% 60%, 89.8% 100%, 0 100%, 0 40%);
                        font-size: 24px;
                        line-height: 35px;
                        text-align: center;
                        padding: 10px 25px;
                        background: linear-gradient(106.95deg, rgba(1, 167, 255, 0.8) 0.4%, rgba(255, 0, 245, 0.8) 103.58%);
                        box-shadow: inset 6.43931px 9.36627px 19.3179px rgba(255, 255, 255, 0.11);
                        backdrop-filter: blur(54.4415px);
                        border: 5px solid rgba(13, 20, 41, 0.44);
                        opacity: 0.85;
                        &:hover {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 2000px) {
    .marketplace_detail {
        .header {
            &_footer {
                grid-template-columns: 2fr 3fr 0fr;
                .header_footer_titles {
                    font-size: 25px;
                    .header_footer_title {
                        font-size: 25px;
                    }
                    .header_footer_text {

                        font-size: 20px;
                    }
                }
                .header_footer_boxs {
                    display: grid;
                    grid-template-columns: 200px 200px 200px 200px;
                    .header_footer_box {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        &_title {
                            font-size: 18px;
                        }
                        &_text {
                            font-weight: 400;
                            font-size: 16px;
                            opacity: 0.86;
                        }
                    }
                }
            }
        }
        .body {
            // margin: 0 auto;
            // width: 100%;
            display: grid;
            grid-template-columns: 380px 2fr 480px;
            
            &_filters {
                .filter_search {
                    .search {
                        font-size: 18px;
                    }
                }
                .filter {
                    .filter_buy {
                        padding: 10px 20px;
                        font-size: 20px;
                    }
                    .filter_price {
                        .filter_price_title {
                            font-size: 20px;
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
                .content_header {
                    .header_items {
                        .header_item {
                            padding: 18px 30px;
                            &_text {
                                font-size: 20px;
                            }
                        }
                    }
                }
                .content_main {
                    display: grid;
                    grid-template-columns: 300px 300px 300px;
                    grid-template-rows: 1fr 1fr 1fr;
                    .content_box {
                        .content_box_body {
                            .content_titles {
                                gap: 10px;
                                .content_title_left {
                                    .content_title {
                                        font-size: 20px;
                                    }
                                }
                                .content_money {
                                    font-style: 16px;
                                    .content_price, .content_value {
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                        .content_button {
                            font-size: 20px;
                            padding: 7px 15px;
                        }
                    }
                }
            }
        }
    }
}
</style>