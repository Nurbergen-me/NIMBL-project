<template>
    <div class="market_card">
        <div class="header_content"></div>
        <div class="cards_content">
            <div class="card_loop" v-for="item in 5" :key="item">
                <div class="card_box">
                    <div class="video_header">
                        <img class="video_header_logo" src="@/assets/marketplace/video-card-icon.svg" alt="">
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
    name: 'MarketCard'
}
</script>

<style lang="scss" scoped>
.market_card {
    // height: 100%;
    // width: 100%;
    .cards_content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 20px;
        .card_loop {
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
            // border: 2px solid #00EAF2;
            overflow: hidden;
            .video_header {
                cursor: pointer;
                position: relative;
                .video_header_logo {
                    width: 100%;  
                    object-fit: cover;
                    // border-radius: 6px;
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
                    font-size: 27px;
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
                            white-space: nowrap;
                            font-weight: 400;
                            font-size: 20px;
                        }
                    }
                }
                .box_text {
                    text-align: center;
                    font-weight: 400;
                    font-size: 18px;
                    margin-bottom: 20px;
                }
                .box_footer {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 10px;
                    .footer_dates {
                        .date_text {
                            font-size: 18px;
                        }
                        .date_value {
                            font-size: 22px;
                        }
                    }
                    .tag_content {
                        .tag {
                            width: fit-content;
                            padding: 3px 7px;
                            background: #131217;
                            font-weight: 400;
                            font-size: 18px;
                            color: #6BB8FF;
                            &:not(:last-child) {
                                margin-bottom: 5px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
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
</style>