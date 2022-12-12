<template>
    <div class="launchpad_content">
        <div class="launchpad_header">
            <div class="filter_box">
                <img class="filter_icon" src="@/assets/chart/filter-icon.svg" alt="">
            </div>
            <div class="header_tabs">
                <div class="header_tab" @click="mints = 1" :class="{'active': mints === 1}">
                    <img src="@/assets/marketplace/launchpad/live.svg" alt="">
                    <div class="header_tab_text">Live mints</div>
                </div>
                <div class="header_tab" @click="mints = 2" :class="{'active': mints === 2}">
                    <img src="@/assets/marketplace/launchpad/finished.svg" alt="">
                    <div class="header_tab_text">Finished mints</div>
                </div>
                <div class="header_tab" @click="mints = 3" :class="{'active': mints === 3}">
                    <img src="@/assets/marketplace/launchpad/upcoming.svg" alt="">
                    <div class="header_tab_text">Upcoming mints</div>
                </div>
            </div> 

            <div class="header_sliders">
                <div class="slider_page"> <span class="slider_page active">01</span> / 01</div>
                <div class="slider_icons">
                    <img class="slider_icon" src="@/assets/chart/slider-icon.svg" alt="">
                    <img class="slider_icon second" src="@/assets/chart/slider-icon.svg" alt="">
                </div>
            </div>
        </div>

        <div class="cards_content">
            <div class="card_loop" v-for="item in 2" :key="item">
                <div class="card_box">
                    <div class="video_header">
                        <img class="video_header_logo" src="@/assets/marketplace/video-card-icon.svg" alt="">
                        <!-- <img class="video_header_logo" src="@/assets/marketplace/denziel-icon.svg" alt=""> -->
                        <div class="video_pause">
                            <img class="video_box_pause" src="@/assets/marketplace/pause_2.svg" alt="">
                        </div>
                    </div>
                    <div class="video_body">
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
                        <div class="box_text">Brief description of the channel - dummy text of the printing and typesetting industry.</div>
                        <div class="box_footer">
                            <div class="footer_dates">
                                <div class="date_text">Mint date</div>
                                <div class="date_value">01.01.23</div>
                            </div>
                            <div class="tag_content">
                                <div class="tag">#ETH-NFT</div>
                                <div class="tag">#NFT-Trading</div>
                                <div class="tag">#NFT-Trading</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'MarketLaunchpad',
    data() {
        return {
            mints: 1
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
            height: 63px;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .filter_box {
                background: rgba(85, 85, 85, 0.14);
                backdrop-filter: blur(14.7107px);
                border-radius: 6px;
                padding: 9px 15px;
                margin-right: 30px;
                .filter_icon {
                    width: 24px;
                    height: 24px;
                }
            }
            .header_tabs {
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                .header_tab {
                    padding: 9px 20px;
                    background: rgba(85, 85, 85, 0.14);
                    backdrop-filter: blur(14.511px);
                    border-radius: 6px;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    img {
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                    }
                    &.active {
                        background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
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
                    font-size: 16px;
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
                    font-size: 16px;
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

        .cards_content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 20px;
            margin-bottom: 100px;
            .card_loop {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
                transition: all 0.3s ease;
                &:hover {
                    transform: scale(1.01);
                }
            }
            .card_box {
                padding: 2px;
                overflow: hidden;
                .video_header {
                    cursor: pointer;
                    position: relative;
                    .video_header_logo {
                        width: 100%;
                        height: 150px;
                        object-fit: cover;
                    }
                    .video_pause {
                        border-radius: 50%;
                        background: #000000;
                        box-shadow: 0px 3.63217px 39.9538px rgba(0, 0, 0, 0.44);
                        backdrop-filter: blur(7px);
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        padding: 30px;
                        .video_box_pause {
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            top: 50%;
                            left: 55%;
                            transform: translate(-55%, -50%);
                        }
                    }
                }
                .video_body {
                    position: relative;
                    padding: 0 10px;
                    margin-top: -35px;
                    background: #141B22;
                    .box_title {
                        margin-top: 30px;
                        text-align: center;
                        font-weight: 400;
                        font-size: 16px;
                        margin-bottom: 25px;
                        padding-top: 10px;
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
                                    font-size: 16px;
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
                                font-size: 16px;
                                background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            }
                            &_footer {
                                white-space: nowrap;
                                font-weight: 400;
                                font-size: 16px;
                            }
                        }
                    }
                    .box_text {
                        text-align: center;
                        font-weight: 400;
                        font-size: 16px;
                        margin-bottom: 20px;
                        padding: 0 10px;
                    }
                    .box_footer {
                        padding: 0 5px;
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 10px;
                        .footer_dates {
                            .date_text {
                                font-size: 16px;
                            }
                            .date_value {
                                font-size: 16px;
                            }
                        }
                        .tag_content {
                            .tag {
                                width: fit-content;
                                padding: 3px 7px;
                                background: #131217;
                                font-weight: 400;
                                font-size: 16px;
                                color: #6BB8FF;
                                &:not(:last-child) {
                                    margin-bottom: 5px;
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                }
                &:hover {
                    &:before {
                        content: "";
                        position: absolute;
                        width: 1000px;
                        height: 100%;
                        background: linear-gradient(106.95deg, rgba(1, 167, 255, 0.8) 0.4%, rgba(255, 0, 245, 0.8) 103.58%, rgba(255, 0, 245, 0.8) 103.58%);
                        animation: animate 5s linear infinite;
                    }
                    @keyframes animate {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
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
            font-size: 16px;
        }
        .launchpad_select {
            &_item {
                padding: 20px 30px;
                .title {
                    font-size: 16px;
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
                            font-size: 16px;
                        }
                    }
                    .video_chanel_cost {
                        .chanel_minting {
                            font-size: 16px;
                        }
                        .chanel_nfts {
                            font-size: 16px;
                        }
                    }
                }
                &_body {
                    padding: 30px 20px;
                    .text {
                        font-size: 16px;
                    }
                    .raises {
                        .raise {
                            font-size: 16px;
                        }
                        .money {
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
} 
@media (max-width: 1600px) {
    .launchpad_content {
        .launchpad_header {
            .header_tabs {
                .header_tab {
                    font-size: 16px;
                }
            }
            .header_sliders {
                .slider_page {
                    font-size: 16px;
                    margin-right: 10px;
                }
                .slider_icons {
                    display: flex;
                    img {
                        width: 18px;
                        height: 18px;
                    }
                }
            }
        }

        .cards_content {
            .card_loop {
                .card_box {
                    .video_body {
                        .box_title {
                            font-size: 16px;
                        }
                        .box_buttons {
                            margin-bottom: 20px;
                            .box_button {
                                padding: 8px 15px;
                                &_header {
                                    .count {
                                        font-size: 16px;
                                    }
                                }
                                &_title {
                                    font-size: 16px;
                                }
                                &_footer {
                                    font-size: 16px;
                                }
                            }
                        }
                        .box_text {
                            font-size: 16px;
                        }
                        .box_footer {
                            .footer_dates {
                                .date_text {
                                    font-size: 16px;
                                }
                                .date_value {
                                    font-size: 16px;
                                }
                            }
                            .tag_content {
                                .tag {
                                    font-size: 16px;
                                    padding: 3px 5px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>