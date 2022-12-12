<template>
    <div class="opportunities_content">

        <div class="header_content">
            <div class="filter_box">
                <img class="filter_icon" src="@/assets/chart/filter-icon.svg" alt="">
            </div>

            <div class="header_sliders">
                <div class="slider_page"> <span class="slider_page active">01</span> / 01</div>
                <div class="slider_icons">
                    <img class="slider_icon" src="@/assets/chart/slider-icon.svg" alt="">
                    <img class="slider_icon second" src="@/assets/chart/slider-icon.svg" alt="">
                </div>
            </div>
        </div>

        <div class="opportunities_boxs">
            <div class="box" v-for="(item, index) in cards" :key="index">
                <div class="opportunities_box">
                    <div class="video_header">
                        <img v-if="index === 0" class="video_header_logo" src="@/assets/marketplace/lorge-opport.svg" alt="">
                        <img v-if="index === 1" class="video_header_logo" src="@/assets/opp/1.jfif" alt="">
                        <img v-if="index === 2" class="video_header_logo" src="@/assets/opp/2.jfif" alt="">
                        <img v-if="index === 3" class="video_header_logo" src="@/assets/opp/3.jfif" alt="">
                        <img v-if="index === 4" class="video_header_logo" src="@/assets/opp/4.jfif" alt="">
                        <div class="video_pause">
                            <img class="video_box_pause" src="@/assets/marketplace/pause_2.svg" alt="">
                        </div>
                    </div>
                    <div class="video_body">
                        <div class="video_box_titles">
                            <div class="video_box_titles_left">
                                <img class="video_box_logo" v-if="index === 0" src="@/assets/community/com1-logo.svg" alt="" />
                                <img class="video_box_logo" v-if="index === 1" src="@/assets/community/com2-logo.svg" alt="" />
                                <img class="video_box_logo" v-if="index === 2" src="@/assets/community/com3-logo.svg" alt="" />
                                <img class="video_box_logo" v-if="index === 3" src="@/assets/community/com4-logo.svg" alt="" />
                                <img class="video_box_logo" v-if="index === 4" src="@/assets/community/com5-logo.svg" alt="" />
                                <div class="video_box_title">@{{item.name}}</div>
                            </div>
                            <div class="video_box_titles_right">
                                <div class="price">Community Size:</div>
                                <div class="value">{{item.value}}</div>
                            </div>
                        </div>
                        <div class="video_box_titles_date">
                            <div class="date">Mint Date:</div>
                            <div class="time">{{item.date}}</div>
                        </div>
                        <div class="sports_content">
                            <div class="sport_lines"></div>
                            <div class="sport_titles">
                                <div class="sport_title">Number of spots</div>
                                <div class="sport_texts">
                                    <div class="percentage">{{item.percantage}}</div>
                                    <div class="value">{{item.value}}</div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="video_text">Increase your income by joining us the most famous pixel arts.</div> -->
                        <div class="video_button">Participate</div>
                    </div>
                </div>
            </div>

            <div class="opportunities_box_2" v-for="item in 0" :key="item">
                <div class="video_header">
                    <img class="video_header_logo" src="@/assets/marketplace/james-icon.svg" alt="">
                    <div class="video_pause">
                        <img class="video_box_pause" src="@/assets/marketplace/pause_2.svg" alt="">
                    </div>
                </div>
                <div class="video_body">
                    <div class="video_box_titles">
                        <div class="video_box_titles_left">
                            <img class="video_box_logo" src="@/assets/icons/avatar.svg" alt="">
                            <div class="video_box_title">@Denziel</div>
                        </div>
                        <div class="video_box_titles_right">
                            <div class="video_box_prices">
                                <div class="price">floor price</div>
                                <div class="value">65 NMBL</div>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="video_text">Increase your income by joining us the most famous pixel arts.</div>
                    <div class="video_button">Participate</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MarketOpportunities',
    data() {
        return {
            cards: [
                {name: 'Denziel', value: '6.2K', date: 'Dec 24, 10:00', percantage: '2%', value: '50/2000'},
                {name: 'BaseMac', value: '6.5K', date: 'Dec 26, 11:00', percantage: '5%', value: '60/2100'},
                {name: 'Kontantinue', value: '6.8K', date: 'Dec 30, 23:00', percantage: '7%', value: '61/2110'},
                {name: 'GrizeCrocc', value: '7.3K', date: 'Jan 01, 17:00', percantage: '11%', value: '65/2500'},
                {name: 'AgroTims', value: '7.5K', date: 'Jan 14, 18:00', percantage: '13%', value: '70/2700'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
    .opportunities_content {
        // margin-bottom: 100px;
        .opportunities_title {
            font-weight: 400;
            font-size: 16px;
            line-height: 90px;
            margin-bottom: 50px;
        }

        .header_content {
            width: 100%;
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
                    font-size: 16px;
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

        .opportunities_boxs {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 40px;
            .box {
                height: fit-content;
                position: relative;
                transition: all 0.5s ease;
                &:before,
                &:after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(95deg, rgba(1, 167, 255, 0.8) 0.4%, rgba(255, 0, 245, 0.8) 103.58%);
                    transition: 0.5s;
                    border-radius: 12px;
                }

                &:hover::before {
                    border-radius: 12px;
                    inset: -3px;
                }
                &:hover:after {
                    border-radius: 12px;
                    inset: -3px;
                    filter: blur(10px);
                }
                &:hover {
                    transform: scale(1.01);
                }
            }
            .opportunities_box {
                position: relative;
                z-index: 10;
                height: fit-content;
                width: 100%;
                background: #000000;
                border: 2px solid rgba(234, 0, 213, 0.2);
                padding: 10px;
                border-radius: 12px;
                cursor: pointer;
                .video_header {
                    cursor: pointer;
                    position: relative;
                    margin-bottom: 15px;
                    .video_header_logo {
                        width: 100%;  
                        height: 130px;
                        object-fit: cover;
                        border-radius: 6px;
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
                    width: 100%;
                    .video_box_titles {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        align-items: flex-start;
                        gap: 10px;
                        &_left {
                            display: flex;
                            align-items: flex-start;
                        }

                        &_date {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-bottom: 10px;
                            .date {
                                font-size: 16px;
                            }
                            .time {
                                font-size: 16px;
                            }
                        }

                        .video_box_logo {
                            width: 40px;
                            height: 40px;
                            object-fit: cover;
                            border-radius: 50%;
                            margin-right: 10px;
                        }
                        .video_box_title {
                            font-size: 16px;
                        }
                        .video_box_titles_right {
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            .price {
                                font-size: 16px;
                                white-space: nowrap;
                                margin-right: 10px;
                            }
                            .value {
                                white-space: nowrap;
                                font-family: "Octosquares-Bold";
                                font-size: 16px;

                                background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            }
                        }
                    }
                    .line {
                        margin: 5px auto 15px auto;
                        width: 50px;
                        height: 2px;
                        background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                    }
                    .sports_content {
                        width: 100%;
                        .sport_lines {
                            position: relative;
                            width: 100%;
                            height: 8px;
                            background: #2C2C35;
                            &:after {
                                position: absolute;
                                content: "";
                                width: 100px;
                                height: 8px;
                                top: 0;
                                left: 0;
                                background: linear-gradient(273.27deg, #00EAF2 0.47%, #EA00D5 99.64%);;
                            }
                        }
                        .sport_titles {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin-bottom: 20px;
                            .sport_title {
                                font-size: 16px;
                            }
                            .sport_texts {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .percentage {
                                    font-size: 16px;
                                    margin-right: 10px;
                                }
                                .value {
                                    font-size: 16px;
                                    color: rgba(255, 255, 255, 0.62);
                                }
                            }
                        }
                    }
                    .video_button {
                        width: calc(100% - 25%);
                        font-family: "Octosquares-Bold";
                        clip-path: polygon(10% 0, 100% 0, 100% 60%, 89.8% 100%, 0 100%, 0 40%);
                        font-size: 16px;
                        margin: 0 auto;
                        text-align: center;
                        padding: 5px 20px;
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
@media (max-width: 1855px) {
    .opportunities_content {
        .opportunities_title {
            font-size: 60px;
        }
        .opportunities_boxs {
            .opportunities_box {
                .video_body {
                    .video_box_titles {
                        margin-bottom: 15px;
                        .video_box_titles_date {
                            // width: 100px;
                        }
                    }
                    .video_text {
                        font-size: 18px;
                    }
                    .video_button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
}
@media (max-width: 1855px) {
    .opportunities_content {
        .opportunities_title {
            font-size: 16px;
        }
        .opportunities_boxs {
            grid-gap: 20px;
            .opportunities_box {
                .video_body {
                    .video_box_titles {
                        margin-bottom: 15px;
                        .video_box_titles_date {
                            // width: 100px;
                        }
                    }
                    .video_text {
                        font-size: 16px;
                    }
                    .video_button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
}
</style>