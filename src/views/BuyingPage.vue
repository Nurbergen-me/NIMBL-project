<template>
    <div class="marketplace_detail">
        <div class="header">
            <div class="header_head">
                <img
                    @click="$router.push({name: 'home'})"
                    class="head_back"
                    src="@/assets/icons/back.svg"
                    alt=""
                />
                <img
                    class="head_logo"
                    src="@/assets/marketplace/detail/chanel_logo.svg"
                    alt=""
                />
            </div>
            <div class="header_footer">
                <div class="header_footer_titles">
                    <div class="header_footer_title">DandelionWist</div>
                    <div class="header_footer_text">
                        A collection of 10,000 zombies evolving through the
                        sweet juicy brains their owners decide to feed them.
                        Zombies are cute yet they'd crack your skull open and
                        jam a straw through your cortex to sip on that sweet
                        white matter.
                    </div>
                </div>
                <div class="header_footer_boxs">
                    <div class="header_footer_box" v-for="(item, index) in prices" :key="index">
                        <div class="header_footer_box_title">{{item}}</div>
                        <div class="header_footer_box_text">Floor Price</div>
                    </div>
                </div>
                <div class="header_footer_btns">
                    <img
                        class="header_footer_btn"
                        src="@/assets/icons/share-btn.svg"
                        alt=""
                    />
                    <img
                        class="header_footer_btn"
                        src="@/assets/icons/mote-btn.svg"
                        alt=""
                    />
                </div>
            </div>
            <div class="header_footer_line"></div>
        </div>
        <div class="main">
            <div class="header_content">
                <div class="filter_search">
                    <input placeholder="Search items" class="search" type="text" />
                </div>

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
                            <div class="header_item_text">Stats</div>
                        </div>
                    </div>
                    <div class="header_reverse">
                        <img
                            class="header_reverse_icon"
                            src="@/assets/marketplace/detail/detail-reverse.svg"
                            alt=""
                        />
                        <div class="header_reserve_text">
                            Refreshed a while ago
                        </div>
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
            prices: ['41 NMBL', '45 NMBL', '48 NMBL', '52 NMBL', '55 NMBL', '56 NMBL', '59 NMBL', '68 NMBL']
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
            width: 100%;
            padding-top: 80px;
            margin-bottom: 3%;
            &_head {
                position: relative;
                padding: 0 90px;
                height: 400px;
                width: 100%;
                background: url("@/assets/marketplace/detail/navbar_market.png")
                    no-repeat;
                background-position: center;
                background-size: cover;
                .head_back {
                    position: absolute;
                    top: 50px;
                    padding: 10px 20px;
                    background: rgba(255, 255, 255, 0.055);
                    box-shadow: inset 3.5875px 3.5875px 24.2156px
                        rgba(255, 255, 255, 0.04);
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
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    .header_footer_text {
                        font-weight: 400;
                        font-size: 16px;
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
                        box-shadow: inset 3.5875px 3.5875px 24.2156px
                            rgba(255, 255, 255, 0.04);
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
                .header_footer_btns {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    .header_footer_btn:first-child {
                        margin-right: 20px;
                        &.hover {
                            filter: invert(87%) sepia(3%) saturate(2964%)
                                hue-rotate(289deg) brightness(101%)
                                contrast(86%);
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
        .main {
            display: flex;
            flex-direction: column;
            .header_content {
                display: flex;
                align-items: center;
                margin-bottom: 40px;
                .filter_search {
                    background: #1a1b1c;
                    position: relative;
                    display: flex;
                    align-items: center;
                    padding: 5px 10px;
                    margin-right: 30px;
                    width: 380px;
                    &::before {
                        content: url("@/assets/icons/search.svg");
                        margin-top: 9px;
                        margin-left: 8px;
                        margin-right: 8px;
                    }
                    .search {
                        width: 100%;
                        padding-left: 15px;
                        font-weight: 400;
                        font-size: 16px;
                    }
                }
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
@media (max-width: 2000px) {
    .marketplace_detail {
        .header {
            &_footer {
                grid-template-columns: 2fr 3fr 0fr;
                .header_footer_titles {
                    font-size: 16px;
                    .header_footer_title {
                        font-size: 16px;
                    }
                    .header_footer_text {
                        font-size: 16px;
                    }
                }
                .header_footer_boxs {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr; // 200px 200px 200px 200px;
                    .header_footer_box {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        &_title {
                            font-size: 16px;
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
    }
}
@media (max-width: 1700px) {
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