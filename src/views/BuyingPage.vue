<template>
    <div class="marketplace_detail">
        <div class="header">
            <div class="head_content">
                <div class="head_first">
                    <img class="head_first_logo" src="@/assets/buy/dandel-logo.svg" />
                    <div class="head_first_content">
                        <div class="head_first_title">DandelionWist</div>
                        <div class="head_first_line"></div>
                        <div class="head_first_text">A collection of 10,000 zombies evolving through the sweet juicy brains their owners decide to
                            feed them.</div>
                    </div>
                </div>
                <div class="head_second">
                    <div class="head_second_content">
                        <div class="header_footer_box" v-for="(item, index) in prices" :key="index">
                            <div class="header_footer_box_title">{{ item }}</div>
                            <div class="header_footer_box_text">Floor Price</div>
                        </div>
                    </div>
                    <div class="head_second_footer">
                        <div class="head_second_socials">
                            <div class="head_social_title">Socials</div>
                            <div class="head_social_content">
                                <img src="@/assets/buy/doknow-logo.svg" alt="">
                                <img src="@/assets/buy/twitter-logo.svg" alt="">
                                <img src="@/assets/buy/unknown-logo.svg" alt="">
                            </div>
                        </div>
                        <div class="head_btn">subscribe</div>
                    </div>
                </div>
            </div>
            <div class="header_footer_btns">
                <img src="@/assets/icons/share-btn.svg" />
                <img src="@/assets/icons/mote-btn.svg" />
            </div>
        </div>
        <div class="main">
            <div class="header_content">
                <div class="content_header">
                    <div class="header_items">
                        <div class="header_item" :class="{ 'active': $route.name === 'card-buying' }" @click="$router.push({ name: 'card-buying' })">
                            <img class="header_item_icon" src="@/assets/marketplace/detail/detail-item.svg" alt="" />
                            <div class="header_item_text">Items</div>
                        </div>
                        <div class="header_item" :class="{ 'active': $route.name === 'chart-buying' }"
                            @click="$router.push({ name: 'chart-buying' })">
                            <img class="header_item_icon" src="@/assets/marketplace/detail/detail-stat.svg" alt="" />
                            <div class="header_item_text">Analytics</div>
                        </div>
                        <div class="header_item" :class="{ 'active': $route.name === 'table-buying' }"
                            @click="$router.push({ name: 'table-buying' })">
                            <img class="header_item_icon" src="@/assets/marketplace/detail/detail-stat.svg" alt="" />
                            <div class="header_item_text">Activity</div>
                        </div>
                    </div>
                    <div class="header_refresh">
                        <img class="header_refresh_icon" src="@/assets/marketplace/detail/detail-reverse.svg" alt="" />
                        <div class="header_refresh_text"> Refreshed a while ago </div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestPageDetail",
    data() {
        return {
            prices: ['41 NMBL', '45 NMBL', '48 NMBL', '52 NMBL', '55 NMBL', '56 NMBL']
        }
    }

}
</script>

<style lang="scss" scoped>
input {
    outline: none;
}
@media (max-width: 5000px) {
    .marketplace_detail {
        max-height: calc(100vh - var(--h-header-footer));
        overflow: hidden;
        .header {
            overflow: hidden;
            width: 100%;
            position: relative;
            background: url("@/assets/marketplace/detail/navbar_market.png") no-repeat;
            background-position: center;
            background-size: cover;
            .head_content {
                width: fit-content;
                padding: 0px 15px 30px;
                height: 100%;
                background: rgba(0, 0, 0, 0.21);
                box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
                backdrop-filter: blur(46.5146px);
                overflow: hidden;
                .head_first {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 30px;
                    gap: 28px;

                    &_logo {
                        width: 345px;
                        object-fit: cover;
                        display: block;
                    }
                    &_content {
                        max-width: 460px;
                    }
                    &_title {
                        font-family: "Octosquares-DBold";
                        font-size: 32px;
                        font-weight: 600;
                        text-transform: uppercase;
                        background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        margin-top: 24px;
                        margin-bottom: 10px;
                    }
                    &_text {
                        font-size: 20px;
                    }
                    &_line {
                        width: 200px;
                        height: 1px;
                        background: #646464;
                        margin-bottom: 10px;
                    }
                }
                .head_second {
                    display: flex;
                    gap: 25px;
                    align-items: flex-start;
                    .head_second_content {
                        display: grid;
                        grid-template-columns: repeat(3, auto);
                        grid-auto-rows: auto;
                        gap: 20px;
                        justify-content: center;

                        .header_footer_box {
                            cursor: pointer;
                            padding: 12px 35px;
                            background: rgba(0, 0, 0, 0.63);
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
                                font-size: 16px;
                            }
                            &_text {
                                font-weight: 400;
                                font-size: 16px;
                                opacity: 0.86;
                            }
                        }
                    }
                    .head_second_footer {
                        align-self: stretch;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .head_second_socials {
                            margin-bottom: 15px;
                            .head_social_title {
                                margin-bottom: 10px;
                            }
                            .head_social_content {
                                display: flex;
                                align-items: center;
                                gap: 10px;
                                img {
                                    cursor: pointer;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-radius: 50%;
                                    width: 32px;
                                    height: 32px;
                                    background: #222435;
                                    padding: 4px;
                                }
                            }
                        }
                        .head_btn {
                            cursor: pointer;
                            font-weight: 600;
                            text-transform: uppercase;
                            background: linear-gradient(182.53deg, rgba(234, 0, 213, 0.3) 3.75%, rgba(61, 94, 255, 0.3) 56.09%, rgba(0, 234, 242, 0.3) 102.36%);
                            border-radius: 6px;
                            text-align: center;
                            padding: 18px 40px;
                            margin: auto 0
                        }
                    }
                }
            }
            .header_footer_btns {
                position: absolute;
                display: flex;
                align-items: center;
                cursor: pointer;
                top: 15px;
                right: 15px;
                img {
                    width: 24px;
                    height: 24px;
                    fill: white;
                    &:first-child {
                        margin-right: 30px;
                    }
                }
            }
        }
        .main {
            height: calc(100vh - var(--h-header-footer) - 407px);
            display: flex;
            flex-direction: column;
            padding: 40px 20px;
            .header_content {
                display: flex;
                align-items: center;
                margin-bottom: 40px;
                .content_header {
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
                            box-shadow: inset 3.08919px 3.08919px 20.852px rgba(255, 255, 255, 0.04);
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
                                background: linear-gradient(273.52deg,
                                        rgba(0, 234, 242, 0.2) -54.44%,
                                        rgba(234, 0, 213, 0.2) 110.67%);
                                backdrop-filter: blur(7.72298px);
                            }
                        }
                    }
                    .header_refresh {
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
                            white-space: nowrap;
                            font-size: 16px;
                            color: #acacac;
                            opacity: 0.6;
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
            .head_content {
                padding: 0px 15px 25px;
                .head_first {
                    margin-bottom: 25px;
                    gap: 22px;
                    &_logo {
                        width: 307px;
                    }
                    &_content {
                        max-width: 440px;
                    }
                    &_title {
                        font-size: 26px;
                        margin-top: 20px;
                    }
                    &_text {
                        font-size: 19px;
                        line-height: 26px;
                    }
                }
                .head_second {
                    gap: 20px;
                    .head_second_content {
                        .header_footer_box {
                            padding: 12px 30px;
                            &_title {
                                font-weight: 600;
                                font-size: 16px;
                            }
                            &_text {
                                font-size: 13px;
                            }
                        }
                    }
                    .head_second_footer {
                        .head_second_socials {
                            margin-bottom: 15px;
                            .head_social_title {
                                margin-bottom: 10px;
                            }
                            .head_social_content {
                                gap: 10px;
                                img {
                                    cursor: pointer;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-radius: 50%;
                                    width: 32px;
                                    height: 32px;
                                    background: #222435;
                                    padding: 4px;
                                }
                            }
                        }
                        .head_btn {
                            font-size: 19px;
                            padding: 15px 33px;
                            margin: auto 0
                        }
                    }
                }
            }

            .header_footer_btns {
                position: absolute;
                display: flex;
                align-items: center;
                cursor: pointer;
                top: 15px;
                right: 15px;
                img {
                    width: 24px;
                    height: 24px;
                    fill: white;
                    &:first-child {
                        margin-right: 30px;
                    }
                }
            }
        }
        .main {
            height: calc(100vh - var(--h-header-footer) - 368px);
            padding: 25px 15px;
            .header_content {
                margin-bottom: 25px;
                .content_header {
 
                    .header_items {

                        margin-right: 38px;
                        .header_item {
                            
                            padding: 7px 35px;

                            &_icon {
   
                                width: 19px;
                                height: 19px;
                            }
                         
                        }
                    }
                    .header_refresh {

                        &_icon {
                            width: 24px;
                            height: 24px;
                        }
                        &_text {
         
                            font-size: 13px;
                
                        }
                    }
                }
            }
        }
    }
    
}
@media (max-width: 1600px) {
    .marketplace_detail {
        .header {
            &_head {
                padding: 0 40px;
            }
            &_footer {
                padding: 60px 40px 0 40px;
            }
        }
    }
}
</style>