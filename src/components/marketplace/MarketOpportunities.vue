<template>
    <div class="opportunities_content">
        <div class="opportunities_title">Whitelist opportunities</div>
        <div class="opportunities_boxs" v-if="type === 1">
            <div class="opportunities_box" v-for="item in 6">
                <img class="opportunities_box_img" src="@/assets/marketplace/chanel_logo.svg" alt="">
                <div class="opportunities_box_body">
                <img class="logo" src="@/assets/marketplace/gainer/logo_vide_chanel.svg" alt="">
                    <div class="opportunities_box_title">Bankless</div>
                    <div class="opportunities_box_text">Brief description of the channel - dummy text of the printing and typesetting industry...</div>
                    <div class="opportunities_box_line">
                        <div class="opportunities_box_line active"></div>
                    </div>
                    <div class="opportunities_box_footer">
                        <div class="footer_title">Number of spots</div>
                        <div class="footer_percentage">2%</div>
                        <div class="footer_value">(50/2000)</div>
                    </div>
                    <button class="opportunities_box_button">Register for WL</button>
                </div>
            </div>
        </div>

        <div class="opportunities_boxs_2"  v-if="type === 2">
            <div class="opportunities_box_2">
                <div class="video_header">
                    <img class="video_header_logo" src="@/assets/marketplace/denziel-icon.svg" alt="">
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
                    <div class="video_text">Increase your income by joining us the most famous pixel arts. You won’t regret it.</div>
                    <div class="video_button">Participate</div>
                </div>
            </div>
            <div class="opportunities_box_2">
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
                    <div class="video_text">Increase your income by joining us the most famous pixel arts. You won’t regret it.</div>
                    <div class="video_button">Participate</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarketOpportunities',
    props: {
        type: {
            default: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.opportunities_content {
    margin-bottom: 100px;
    .opportunities_title {
        font-weight: 400;
        font-size: 64.2363px;
        line-height: 90px;
        margin-bottom: 50px;
    }
    .opportunities_boxs {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 60px;
        .opportunities_box {
            transition: all 0.5s ease;
            cursor: pointer;
            overflow: hidden;
            border-radius: 12px;
            background: rgba(33, 35, 52, 0.45);
            box-shadow: inset 6.25238px 6.25238px 42.2036px rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(81.0668px);
            &_img {
                width: 100%;
                object-fit: contain;
            }
            &_body {
                position: relative;
                padding: 50px 20px;
                .logo {
                    position: absolute;
                    border-radius: 50%;
                    width: 86px;
                    height: 86px;
                    object-fit: contain;
                    top: -15%;
                }
                .opportunities_box_title {
                    font-weight: 400;
                    font-size: 35px;
                    line-height: 50px;
                    margin-bottom: 10px;
                }
                .opportunities_box_text {
                    font-weight: 400;
                    font-size: 23px;
                    line-height: 33px;
                    margin-bottom: 40px;
                    opacity: 0.6;
                }
                .opportunities_box_line {
                    position: relative;
                    height: 7px;
                    width: 100%;
                    background: #2C2C35;
                    border-radius: 6px;
                    margin-bottom: 10px;
                    &.active {
                        width: 100px;
                        height: 7px;
                        position: absolute;
                        background: linear-gradient(273.27deg, #00EAF2 0.47%, #EA00D5 99.64%);
                    }
                }
                .opportunities_box_footer {
                    font-weight: 400;
                    font-size: 21px;
                    line-height: 30px;
                    display: grid;
                    grid-template-columns: 2fr 0.2fr 0.5fr;
                    margin-bottom: 20px;
                    .footer_value {
                        opacity: 0.6;
                    }
                }
                .opportunities_box_button {
                    width: 100%;
                    height: 60px;
                    background: linear-gradient(90.24deg, rgba(1, 234, 242, 0.57) 0.21%, rgba(59, 101, 255, 0.57) 57.08%, rgba(215, 11, 218, 0.57) 102.91%);
                    border-radius: 6px;
                    text-align: center;
                    font-weight: 400;
                    font-size: 26px;
                    line-height: 36px;
                    &:hover {
                        background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                    }
                }
            }
            &:hover {
                transform: scale(1.02);
            }
        }
        
    }
    .opportunities_boxs_2 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 60px;
        .opportunities_box_2 {
            transition: all 0.5s ease;
            width: 100%;
            cursor: pointer;
            padding: 10px;
            background: rgba(13, 20, 41, 0.44);
            border-radius: 12px;
            border: 2px solid rgba(234, 0, 213, 0.2);
            .video_header {
                position: relative;
                margin-bottom: 30px;
                .video_header_logo {
                    width: 100%;  
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
                    padding: 50px;
                    .video_box_pause {
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
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    &_left {
                        display: flex;
                        align-items: center;
                    }
                    &_right {
                        margin-right: 10px;
                    }

                    .video_box_logo {
                        width: 50px;
                        height: 50px;
                        object-fit: contain;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                    .video_box_title {
                        font-weight: 400;
                        font-size: 35px;
                        line-height: 50px;
                    }
                    .video_box_prices {
                        .price {
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 22px;
                        }
                        .value {
                            font-family: "Octosquares-Bold";
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 25px;

                            background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                    }
                    
                }
                .line {
                    // margin-bottom: 10px;
                    margin: 0 auto 15px auto;
                    width: 50px;
                    height: 1px;
                    background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                }
                .video_text {
                    font-weight: 400;
                    font-size: 15px;
                    text-align: center;
                    margin-bottom: 30px;
                }
                .video_button {
                    font-family: "Octosquares-Bold";
                    clip-path: polygon(10% 0, 100% 0, 100% 60%, 89.8% 100%, 0 100%, 0 40%);
                    font-size: 25px;
                    line-height: 57px;
                    text-align: center;
                    padding: 5px 30px;
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
            &:hover {
                transform: scale(1.02);
            }
        }
    }
}
</style>