<template>
    <div class="marketplace_detail">
        <div class="header">
            <div class="head_content">
                <div class="head_first">
                    <img class="head_first_logo" src="@/assets/buy/dandel-logo.svg" />
                    <div class="head_first_content">
                        <div class="head_first_title">DandelionWist</div>
                        <div class="head_first_line"></div>
                        <div class="head_first_text">A collection of 10,000 zombies evolving through the sweet juicy brains their owners decide to feed them.</div>
                    </div>
                </div> 
                <div class="head_second">
                    <div class="head_second_content">
                        <div class="header_footer_box" v-for="(item, index) in prices" :key="index">
                            <div class="header_footer_box_title">{{item}}</div>
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
                        <div class="header_item" :class="{'active': $route.name === 'card-buying'}" @click="$router.push({name: 'card-buying'})">
                            <img
                                class="header_item_icon"
                                src="@/assets/marketplace/detail/detail-item.svg"
                                alt=""
                            />
                            <div class="header_item_text">Items</div>
                        </div>
                        <div class="header_item" :class="{'active': $route.name === 'chart-buying'}" @click="$router.push({name: 'chart-buying'})">
                            <img
                                class="header_item_icon"
                                src="@/assets/marketplace/detail/detail-stat.svg"
                                alt=""
                            />
                            <div class="header_item_text">Analytics</div>
                        </div>
                        <div class="header_item" :class="{'active': $route.name === 'table-buying'}" @click="$router.push({name: 'table-buying'})">
                            <img
                                class="header_item_icon"
                                src="@/assets/marketplace/detail/detail-stat.svg"
                                alt=""
                            />
                            <div class="header_item_text">Activity</div>
                        </div>
                    </div>
                    <div class="header_reverse">
                        <img class="header_reverse_icon" src="@/assets/marketplace/detail/detail-reverse.svg" alt="" />
                        <div class="header_reserve_text"> Refreshed a while ago </div>
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
        height: 100%;
        .header {
            overflow: hidden;
            width: 100%;
            margin-bottom: 3%;
            position: relative;
            height: 400px;
            background: url("@/assets/marketplace/detail/navbar_market.png") no-repeat;
            background-position: center;
            background-size: cover;
            .head_content {
                padding: 0 10px;
                width: 50%;
                height: 100%;
                background: rgba(0, 0, 0, 0.21);
                box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
                backdrop-filter: blur(46.5146px);
                overflow: hidden;
                .head_first {
                    display: flex;
                    align-items: center;
                    &_logo {
                        width: 400px;
                        height: 260px;
                        margin-right: 10px;
                    }
                    &_title {
                        font-family: "Octosquares-DBold";
                        font-size: 24px;
                        font-weight: 600;
                        text-transform: uppercase;
                        background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        margin-bottom: 10px;
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
                    align-items: flex-start;
                    justify-content: space-between;
                    width: 100%;
                    .head_second_content {
                        width: 100%;
                        margin-right: 15px;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-auto-rows: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        gap: 15px;
                        justify-content: center;

                        .header_footer_box {
                            cursor: pointer;
                            padding: 5px 7px;
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
                        width: 40%;
                        display: flex;
                        flex-direction: column;
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
                            text-transform: uppercase;
                            background: linear-gradient(182.53deg, rgba(234, 0, 213, 0.3) 3.75%, rgba(61, 94, 255, 0.3) 56.09%, rgba(0, 234, 242, 0.3) 102.36%);
                            border-radius: 6px;
                            text-align: center;
                            padding: 10px 20px;
                            margin-bottom: auto;
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
            display: flex;
            flex-direction: column;
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
// @media (max-width: 2000px) {
//     .marketplace_detail {
//         .header {
//             &_footer {
//                 grid-template-columns: 2fr 3fr 0fr;
//                 .header_footer_titles {
//                     font-size: 16px;
//                     .header_footer_title {
//                         font-size: 16px;
//                     }
//                     .header_footer_text {
//                         font-size: 16px;
//                     }
//                 }
//                 .header_footer_boxs {
//                     display: grid;
//                     grid-template-columns: 1fr 1fr 1fr 1fr; // 200px 200px 200px 200px;
//                     .header_footer_box {
//                         display: flex;
//                         flex-direction: column;
//                         align-items: center;
//                         justify-content: center;
//                         &_title {
//                             font-size: 16px;
//                         }
//                         &_text {
//                             font-weight: 400;
//                             font-size: 16px;
//                             opacity: 0.86;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// @media (max-width: 1700px) {
//     .marketplace_detail {
//         .header {
//             &_head {
//                 padding: 0 40px;
//             }
//             &_footer {
//                 padding: 60px 40px 0 40px;
//             }
//         }
//     }
// }
</style>