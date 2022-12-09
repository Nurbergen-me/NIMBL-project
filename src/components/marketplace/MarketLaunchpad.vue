<template>
    <div class="launchpad_content">

        <div class="launchpad_header">
            <div class="filter_box">
                <img class="filter_icon" src="@/assets/chart/filter-icon.svg" alt="">
            </div>
            <div class="header_tabs">
                <div class="header_tab">View as List</div>
                <div class="header_tab">View as Grid</div>
            </div>
            <div class="header_btns">
                <div class="header_btn" :class="{'active': time === 1}" @click="changeTime(1)">All</div>
                <div class="header_btn" :class="{'active': time === 2}" @click="changeTime(2)">1y</div>
                <div class="header_btn" :class="{'active': time === 3}" @click="changeTime(3)">1m</div>
                <div class="header_btn" :class="{'active': time === 4}" @click="changeTime(4)">1w</div>
                <div class="header_btn" :class="{'active': time === 5}" @click="changeTime(5)">1d</div>
            </div>

            <div class="header_sliders">
                <div class="slider_page"> <span class="slider_page active">01</span> / 20</div>
                <div class="slider_icons">
                    <img class="slider_icon" src="@/assets/chart/slider-icon.svg" alt="">
                    <img class="slider_icon second" src="@/assets/chart/slider-icon.svg" alt="">
                </div>
            </div>
        </div>

        <div class="launchpad_boxs" v-if="type === 1">
            <div class="video_box">
                <img class="video_box_img" src="@/assets/marketplace/combinator-1.jpg" alt="">
                <div class="video_box_headers">
                    <img
                        class="video_img"
                        src="@/assets/marketplace/gainer/logo_vide_chanel.svg"
                        alt=""
                    />
                    <div class="video_chanel_titles">
                        <div class="chanel_name">Combinator</div>
                        <div class="chanel_viewers">120k Members</div>
                    </div>
                    <div class="video_chanel_cost">
                        <div class="chanel_minting">Minting:</div>
                        <div class="chanel_nfts">1111 NFTs</div>
                    </div>
                </div>
                <div class="video_box_body">
                    <div class="text">Brief description of the channel - dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
                    <div class="raises">
                        <div class="raise">Raise</div>
                        <div class="money">50 000$</div>
                    </div>
                    <div class="video_box_footer">
                        <div class="starts">
                            <div class="start">Start</div>
                            <div class="date">Sep 30, 00:00 UTC</div>
                        </div>
                        <div class="prices">
                            <div class="price">Price</div>
                            <div class="value">123</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="launchpad_boxs_2" v-if="type === 2">
            <div class="video_box_2" v-for="item in 5" :key="item">
                <div class="box_header">
                    <img class="video_box_img" src="@/assets/marketplace/thumbnail.svg" alt="">
                    <div class="video_pause">
                        <img class="video_box_pause" src="@/assets/marketplace/pause_2.svg" alt="">
                    </div>
                </div>
                <div class="box_body">
                    <div class="box_title">@BlueWard2</div>
                    <div class="box_buttons">
                        <div class="box_button">
                            <div class="box_button_header">
                                <img class="member_icon" src="@/assets/marketplace/members.svg" alt="">
                                <div class="count">500K</div>
                            </div>
                            <div class="box_button_footer">members</div>
                        </div>
                        <div class="box_button">
                            <div class="box_button_title">134 NMBL</div>
                            <div class="box_button_footer">floor price</div>
                        </div>
                    </div>

                    <div class="box_text">Brief description of the channel - dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
                    <div class="box_line">
                        <div class="box_line active"></div>
                    </div>
                    <div class="sports">
                        <div class="sports_text">Number of spots</div>
                        <div class="sports_value">
                            <div class="sports_percent">2%</div>
                            <div class="sports_num">(50/2000)</div>
                        </div>
                    </div>
                    <div class="box_hours">02d 06h 22m</div>
                    <!-- <div class="box_number">09</div>
                    <div class="box_number_text">CREATOR LEVEL</div> -->
                </div>
            </div>
        </div>

        <div class="launchpad_boxs_3" v-if="type === 3">
            <!-- <div class="box"> -->
                <div class="video_box_3" v-for="item in 1" :key="item">
                    <div class="box_header">
                        <img class="video_box_img" src="@/assets/icons/video-path-clip.svg" alt="">
                        <div class="video_pause">
                            <img class="video_box_pause" src="@/assets/marketplace/pause_2.svg" alt="">
                        </div>
                    </div>
                    <div class="box_body">
                        <div class="box_title">@BlueWard2</div>
                        <div class="box_buttons">
                            <div class="box_button">
                                <div class="count">500K</div>
                                <div class="box_button_footer">members</div>
                            </div>
                            <div class="box_button">
                                <div class="box_button_title">134 NMBL</div>
                                <div class="box_button_footer">floor price</div>
                            </div>
                        </div>
                        <div class="tag_content">
                            <div class="tag">#ETH-NFT</div>
                            <div class="tag">#NFT-Trading</div>
                        </div>
                    </div>
                </div>
            <!-- </div> -->
        </div>

    </div>
</template>

<script>
export default {
    name: 'MarketLaunchpad',
    data() {
        return {
            select: 1,
            time: 1
        }
    },
    props: {
        type: 1,
    },
    methods: {
        changeTime(val) {
            this.time = val
        }
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
    .launchpad_content {
        height: 100%;
        // margin-bottom: 100px;
        .launchpad_header {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .filter_box {
                background: rgba(85, 85, 85, 0.14);
                backdrop-filter: blur(14.7107px);
                border-radius: 6px;
                padding: 20px;
                margin-right: 30px;
                .filter_icon {
                    width: 25px;
                    height: 25px;
                }
            }
            .header_tabs {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 20px;
                .header_tab {
                    padding: 20px;
                    background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                    backdrop-filter: blur(14.511px);
                    border-radius: 6px;
                    font-size: 25px;
                    &:first-child {
                        margin-right: 20px;
                    }
                }
            }
            .header_btns {
                width: 500px;
                cursor: pointer;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                background: #141C25;
                border: 1px solid #141C25;
                .header_btn {
                    text-align: center;
                    font-size: 24px;
                    line-height: 34px;
                    padding: 10px;
                    &.active {
                        background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                        backdrop-filter: blur(10px);
                    }
                }
            }
            .header_sliders {
                display: flex;
                align-items: center;
                margin-left: auto;
                .slider_page {
                    font-size: 20px;
                    margin-right: 20px;
                    &.active {
                        margin: 0;
                        border: 1px solid #3B65FF;
                        padding: 1px 5px 7px 5px;
                    }
                }
                .slider_icons {
                    cursor: pointer;
                    margin-top: 5px;
                    .slider_icon {
                        width: 20px;
                        height: 20px;
                        &.second {
                            margin-left: 5px;
                            transform: rotate(180deg);
                        }
                    }
                }
            }
        }

        .launchpad_boxs {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 60px;
            .video_box {
                transition: all 0.5s ease;
                cursor: pointer;
                border: 1px solid #A162F7;
                border-radius: 12px;
                overflow: hidden;
                &_img {
                    width: 100%;
                    object-fit: cover;
                }
                &_headers {
                    padding: 20px;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(16.8526px);
                    margin-top: -50px;
                    display: grid;
                    grid-template-columns: 1fr 4fr 2fr;
                    align-items: center;
                    .video_chanel_titles {
                        .chanel_name {
                            font-weight: 400;
                            font-size: 31.0612px;
                            line-height: 43px;
                        }
                        .chanel_viewers {
                            font-weight: 400;
                            font-size: 19.6063px;
                            line-height: 27px;
                        }
                    }
                    .video_chanel_cost {
                        .chanel_minting {
                            font-weight: 400;
                            font-size: 24.2382px;
                            line-height: 34px;
                        }
                        .chanel_nfts {
                            font-family: "Octosquares-Bold";
                            white-space: nowrap;
                            font-weight: 400;
                            font-size: 32.7215px;
                            line-height: 39px;
                            background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                    }
                }
                &_body {
                    padding: 50px 20px;
                    .text {
                        font-weight: 400;
                        font-size: 25px;
                        line-height: 37px;
                        margin-bottom: 30px;
                    }
                    .raises {
                        text-align: center;
                        .raise {
                            font-weight: 400;
                            font-size: 26px;
                            line-height: 37px;
                            text-align: center;
                            color: rgba(255, 255, 255, 0.62);
                        }
                        .money {
                            font-weight: 400;
                            font-size: 30px;
                            line-height: 43px;
                        }
                    }
                    .video_box_footer {
                        display: flex;
                        justify-content: space-between;
                        .starts {
                            .start {
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 37px;
                                color: rgba(255, 255, 255, 0.62);
                            }
                            .date {
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 37px;
                            }
                        }
                        .prices {
                            .price {
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 37px;
                                color: rgba(255, 255, 255, 0.62);
                            }
                            .value {
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 37px;
                            }
                        }
                    }
                }
                &:hover {
                    transform: scale(1.02);
                    box-shadow: 0 0 11px rgba(33,33,33,.5); 
                }
            }
        }

        .launchpad_boxs_2 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
            height: 700px;
            .video_box_2 {
                // width: 430px;
                height: 700px;
                position: relative;
                z-index: 1;
                
                cursor: pointer;
                .box_header {
                    position: relative;
                    z-index: -1;
                    .video_box_img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                    .video_pause {
                        border-radius: 50%;
                        background: #000000;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        backdrop-filter: blur(7px);
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        
                        padding: 35px;
                        .video_box_pause {
                            height: 40px;
                            position: absolute;
                            top: 50%;
                            left: 55%;
                            transform: translate(-55%, -50%);
                        }
                    }
                }
                .box_body {
                    padding: 0 20px;
                    height: 100%;
                    position: absolute;
                    top: 210px;
                    z-index: 5;
                    color: #FFFFFF;
                    clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);
                    background: rgba(85, 85, 85, 0.14);
                    // background: rgba(13, 20, 41, 0.5);
                    backdrop-filter: blur(100px);
                    width: 100%;
                    height: 520px;
                    border: 1px solid #00EAF2;
                    .box_title {
                        margin-top: 30px;
                        text-align: center;
                        font-weight: 400;
                        font-size: 30px;
                        margin-bottom: 30px;
                    }
                    .box_buttons {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                        margin-bottom: 20px;
                        .box_button {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 10px 20px;
                            background: rgba(0, 0, 0, 0.23);
                            backdrop-filter: blur(47.6218px);
                            &_header {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                .count {
                                    font-family: "Octosquares-Bold";
                                    font-weight: 400;
                                    font-size: 18px;
                                }
                                .member_icon {
                                    width: 30px;
                                    height: 30px;
                                    margin-right: 10px;
                                }
                            }
                            &_title {
                                font-family: "Octosquares-Bold";
                                font-weight: 400;
                                font-size: 18px;
                                background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            }
                            &_footer {
                                font-weight: 400;
                                font-size: 22px;
                            }
                        }
                    }
                    .box_text {
                        text-align: center;
                        font-weight: 400;
                        font-size: 20px;
                        margin-bottom: 20px;
                    }
                    .box_line {
                        position: relative;
                        height: 15px;
                        background: #2C2C35;
                        margin-bottom: 10px;
                        &.active {
                            margin: 0;
                            width: 100px;
                            height: 15px;
                            position: absolute;
                            background: linear-gradient(273.27deg, #00EAF2 0.47%, #EA00D5 99.64%);
                        }
                    }
                    .box_number {
                        line-height: 90px;
                        text-align: center;
                        font-size: 80px;
                        background: linear-gradient(89.62deg, #01EAF2 23.47%, #3B65FF 49.25%, #D70BDA 75.46%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .box_number_text {
                        text-align: center;
                        font-size: 25px;
                    }
                    .sports {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 15%;
                        .sports_text {
                            font-size: 15px;
                        }
                        .sports_value {
                            display: flex;
                            align-items: center;
                            .sports_percent {
                                font-size: 15px;
                                margin-right: 10px;
                            }
                            .sports_num {
                                color: rgba(255, 255, 255, 0.62);
                            }
                        }
                    }
                    .box_hours {
                        text-align: center;
                        font-size: 25px;
                    }
                    &:before {
                        content: '';
                        width: 100%;
                        height: 100%;
                        left: 0;
                        bottom: 0;
                        filter: blur(25px);
                        transform: translateY(30px) scale(0.9);
                        // background: #00c000;
                        display: block;
                        position: absolute;
                    }
                }
            }
        }

        .launchpad_boxs_3 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px;
            height: 100%;
            
            // .box {
            //     height: fit-content;
            //     position: relative;
            //     transition: all 0.5s ease;
            //     clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
            //     &:before,
            //     &:after {
            //         clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
            //         content: '';
            //         position: absolute;
            //         inset: 0;
            //         background: linear-gradient(95deg, rgba(1, 167, 255, 0.8) 0.4%, rgba(255, 0, 245, 0.8) 103.58%);
            //         transition: 0.5s;
            //         border-radius: 12px;
            //     }

            //     &:hover::before {
            //         border-radius: 12px;
            //         inset: -3px;
            //     }
            //     &:hover:after {
            //         border-radius: 12px;
            //         inset: -3px;
            //         filter: blur(10px);
            //     }
            //     &:hover {
            //         transform: scale(1.01);
            //     }
            // }
            .video_box_3 {
                position: relative;
                z-index: 10;
                cursor: pointer;
                height: 100%;
                clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                background: rgba(85, 85, 85, 0.14);
                backdrop-filter: blur(100px);
                width: 100%;
                min-height: 400px;
                .box_header {
                    clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                    position: relative;
                    z-index: 1;
                    .video_box_img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                    .video_pause {
                        border-radius: 50%;
                        background: #000000;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        backdrop-filter: blur(7px);
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        
                        padding: 35px;
                        .video_box_pause {
                            height: 40px;
                            position: absolute;
                            top: 50%;
                            left: 55%;
                            transform: translate(-55%, -50%);
                        }
                    }
                }
                .box_body {
                    position: relative;
                    .box_title {
                        text-align: center;
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    .box_buttons {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                        margin-bottom: 5px;
                        .box_button {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 5px;
                            background: rgba(0, 0, 0, 0.23);
                            backdrop-filter: blur(34.247px);
                            &_header {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                .count {
                                    font-family: "Octosquares-Bold";
                                    font-weight: 400;
                                    font-size: 15px;
                                }
                                .member_icon {
                                    width: 30px;
                                    height: 30px;
                                    margin-right: 10px;
                                }
                            }
                            &_title {
                                font-family: "Octosquares-Bold";
                                font-weight: 400;
                                font-size: 15px;
                                background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            }
                            &_footer {
                                font-weight: 400;
                                font-size: 18px;
                            }
                        }
                    }
                    .tag_content {
                        display: inline-flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        // padding-bottom: 10px;
                        .tag {
                            padding: 3px 7px;
                            // background: #131217;
                            font-weight: 400;
                            font-size: 15px;
                            color: #6BB8FF;
                            &:not(:last-child) {
                                margin-bottom: 5px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
} 
@media (max-width: 1800px) {
    .launchpad_content {
        .launchpad_title {
            font-size: 60px;
        }
        .launchpad_select {
            &_item {
                padding: 20px 30px;
                .title {
                    font-size: 22px;
                }
            }
        }
        .launchpad_boxs {
            grid-gap: 50px;
            .video_box {
                .video_img {
                    margin-right: 10px;
                }
                &_headers {
                    .video_chanel_titles {
                        .chanel_name {
                            font-size: 28px;
                        }
                    }
                    .video_chanel_cost {
                        .chanel_minting {
                            font-size: 22px;
                        }
                        .chanel_nfts {
                            font-size: 25px;
                        }
                    }
                }
                &_body {
                    padding: 30px 20px;
                    .text {
                        font-size: 24px;
                    }
                    .raises {
                        .raise {
                            font-size: 25px;
                        }
                        .money {
                            font-size: 25px;
                        }
                    }
                }
            }
        }
    }
} 
</style>