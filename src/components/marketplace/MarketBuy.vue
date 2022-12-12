<template>
    <div class="shop">
        <div class="shop_header">
            <div class="option" :class="{'active': selectOption === 1}" @click="selectOption = 1">
                Buy
            </div>
            <div class="option" :class="{'active': selectOption === 2}" @click="selectOption = 2">
                Bid
            </div>
            <div class="option" :class="{'active': selectOption === 3}" @click="selectOption = 3">
                Sweep
            </div>
        </div>
        <div class="shop_card">
            <div class="name">
                Bulk Buy
            </div>
            <div class="shop_item">
                <div class="item_img_wrap">
                    <img src="@/assets/video-1.jpg" alt="product" class="item_img">
                </div>
                <div class="item_name">
                    @BlueWard2
                </div>
                <div class="item_price">
                    Floor Price: <br><span class="gradient-number">44 NMBL</span> 
                </div>
            </div>
            <div class="shop_button">
                Buy now
            </div>
        </div>
        <div class="shop_reccomendations">
            <div class="reccom_category">
                <div class="reccom_header">
                    <div class="name">
                        Listings
                    </div>
                    <div class="live">
                        Live
                    </div>
                    <select class="select">
                        <option value="Recent">Recent</option>
                        <option value="Recent">Recent</option>
                        <option value="Recent">Recent</option>
                    </select>
                </div>
                <div class="reccom_body">
                    <div class="reccom_card card" v-for="(item, index) in cards" :key="index">
                        <!-- <img src="@/assets/marketplace/channel-img.png" alt="channel" class="card_img"> -->
                        <img class="video_box_logo" v-if="index === 0" src="@/assets/community/com6-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 1" src="@/assets/community/com7-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 2" src="@/assets/community/com8-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 3" src="@/assets/community/com9-logo.svg" alt="" />
                        <img class="video_box_logo" v-if="index === 4" src="@/assets/community/com10-logo.svg" alt="" />
                        <div class="card_info">
                            <div class="name">
                                #{{item.name}}
                            </div>
                            <div class="date">
                                {{item.date}}
                            </div>
                            <div class="creator">
                                by <span>@{{item.creator}}</span>
                            </div>
                        </div>
                        <div class="reccom_footer">
                            <div class="reccom_footer_text">{{item.price}}</div>
                            <div class="reccom_footer_button">Quick Buy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarketBuy',
    data() {
        return {
            selectOption: 1,
            cards: [
                {name: '1209', date: '4 minutes', creator: 'BlueWard2', price: '44 NMBL'},
                {name: '1244', date: '5 minutes', creator: 'Charlie', price: '45 NMBL'},
                {name: '1315', date: '11 minutes', creator: 'Jielae25', price: '51 NMBL'},
                {name: '1558', date: '28 minutes', creator: 'Kitaromo Si', price: '56 NMBL'},
                {name: '1368', date: '52 minutes', creator: 'Budishwily Kan', price: '64 NMBL'},

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.shop {
    background: rgba(33, 35, 52, 0.45);
    box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(51.863px);
    // min-width: 708px;
    margin-left: 23px;
    border-radius: 1px;

    &_header {
        background: #1A1B1C;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;

        .option {
            font-size: 16px;
            padding: 14px 0 20px;
            position: relative;
            text-align: center;
            cursor: pointer;
            transition: all 0.5s ease;

            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 3px;
                border-radius: 3px;
                background: linear-gradient(to left,rgba(33, 141, 159, 1), rgba(92, 99, 163, 1), rgba(131, 40, 150, 0.8));
                opacity: 0;
            }

            &.active:after {
                opacity: 1;
            }
            &:hover {
                background: linear-gradient(to left,rgba(33, 141, 159, 1), rgba(92, 99, 163, 1), rgba(131, 40, 150, 0.8));
            }
        }
    }

    &_card {
        background: #1A1B1C;
        padding: 37px 44px;

        .name {
            font-size: 16px;
            margin-bottom: 28px;
        }
    }

    &_item {
        display: flex;

        .item_img {
            width: 80px;
            height: 68px;
            object-fit: cover;
            border-radius: 10px;

            &_wrap {
                position: relative;

                &:after {
                    content: '';
                    background:  #1A1B1C url('../assets/icons/close_icon.svg') no-repeat center;
                    position: absolute;
                    display: block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    top: -8px;
                    right: -8px;
                    cursor: pointer;

                }
            }
        }

        .item_name {
            font-size: 16px;
            margin-left: 30px;
            margin-right: auto;
        }

        .item_price {
            color: #BFBFBF;
            font-size: 16px;
        }
    }

    &_button {
        cursor: pointer;
        background: #D70BDA;
        width: 100%;
        border-radius: 10px;
        padding: 12px 0 17px;
        font-family: "Octosquares-Bold";
        font-size: 16px;
        text-align: center;
        margin-top: 30px;
        opacity: 0.8;
        &:hover {
            opacity: 1;
        }
    }

    &_reccomendations {
        width: 100%;
        padding: 20px 24px;

        .reccom_category {
            cursor: pointer;
            display: flex;
            flex-direction: column;
        }
        .reccom_header {
            width: 100%;
            display: grid;
            grid-template-columns: 4fr 2fr 2fr;
            margin-bottom: 18px;
            
            .name {
                font-family: "Octosquares-Medium";
                font-size: 16px;
            }

            .live {
                background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                backdrop-filter: blur(7px);
                width: 60px;
                border: 1px solid;
                font-size: 16px;
                padding: 3px 5px;
                display: flex;
                text-align: center;
                justify-content: center;
                margin: 0 15px 0 20px;
            }

            .select {
                border: 1px solid #3F2D5A;
                // padding: 10px 5px;
                width: 125px;
                font-size: 16px;
                padding-left: 20px;
            }
        }

        .reccom_body {
            // height: calc( 100vh - 600px );
            overflow-y: scroll;
            margin-bottom: 10px;
            .card {
                display: grid;
                grid-template-columns: 1fr 2.5fr 2.5fr;
                align-items: center;
                background: #171C2D;
                padding: 20px 7px;
                margin-bottom: 10px;

                &_img {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 50%;
                    margin-right: 14px;
                }

                &_info {
                    .name {
                        font-size: 16px;
                        margin-bottom: 5px;
                    }
                    .date {
                        font-size: 16px;
                        color: #707791;
                        margin-bottom: 5px;
                    }
                    .creator {
                        white-space: nowrap;
                        font-size: 16px;
                        color: #707791;

                        span {
                            font-size: 16px;
                            font-family: "Octosquares-Bold";
                            color: #00EAF2;
                        }
                    }
                }

                .reccom_footer {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    &_text {
                        margin-bottom: 5px;
                        font-size: 16px;
                        background: linear-gradient(89.76deg, #03E9F2 30.75%, #D90CDA 66.67%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    &_button {
                        cursor: pointer;
                        text-align: center;
                        padding: 5px 10px;
                        font-size: 16px;
                        background: linear-gradient(270deg, rgba(234, 0, 213, 0.4) 0.2%, rgba(61, 94, 255, 0.4) 53.17%, rgba(0, 234, 242, 0.4) 100%);
                        border-radius: 6px;
                    }
                }
            }
        }
    }
}
@media(max-width: 2000px) {
    .shop {
        &_header {
            .option {
                font-size: 16px;
            }
        }
        &_card {
            padding: 20px 25px;
            .name {
                font-size: 16px;
            }
        }
        &_item {
            .item_name {
                font-size: 16px;
                margin-left: 10px;
            }
            .item_price {
                font-size: 16px;
            }
        }
        &_button {
            font-size: 16px;
        }
        &_reccomendations {
            .reccom_header {
                .name {
                    font-size: 16px;
                }
                .live {
                    font-size: 16px;
                }
            }
            .reccom_body {
                .card {
                    display: grid;
                    grid-template-columns: 1fr 2fr 1.5fr;
                    &_info {
                        .name {
                            font-size: 16px;
                        }
                        .date {
                            font-size: 16px;
                        }
                        .creator {
                            font-size: 16px;
                        }
                    }
                    .reccom_footer {
                        &_text {
                            font-size: 16px;
                        }
                        &_button {
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
}
</style> 