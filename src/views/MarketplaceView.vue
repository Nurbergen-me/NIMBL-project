<template>
    <div class="market">
        <div class="sidebar">
            <div class="search">
                <img src="../assets/icons/search_icon.svg" class="search_icon" alt="search">
                <input type="text" class="search_input" placeholder="Search items">
            </div>
            <div class="filter">
                <div class="filter_header">
                    <img src="../assets/icons/filter_icon.svg" alt="filter_icon">
                </div>
                <div class="filter_buy">
                    Buy now
                    <input type="checkbox">
                </div>
                <div class="filter_prices">
                    <div class="filter_prices_header">
                        Price
                        <img src="../assets/icons/arrow_down.svg" alt="filter_icon">
                    </div>
                    <div class="filter_prices_body">
                        <select class="filter_select">
                            <option value="sol">SOL</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <input type="text" placeholder="min">
                        to
                        <input type="text" placeholder="max">
                    </div>
                </div>
                <div class="filter_params">
                    Recent
                </div>
                <div class="filter_params">
                    Live trade
                </div>
            </div>
        </div>
        <div class="market_body">
            <div class="topmenu">
                <button class="topmenu_btn active">
                    <img src="../assets/icons/layers_icon.svg" alt="layers">
                    Items
                </button>
                <button class="topmenu_btn">
                    <img src="../assets/icons/auctions_icon.svg" alt="auctions">
                    Auctions
                </button>
                <div class="topmenu_refresh">
                    <img src="../assets/icons/refresh_icon.svg" alt="auctions">
                    Refreshed a while ago
                </div>
            </div>
            <div class="products">
                <div class="product" v-for="product in 16">
                    <div class="product_header">
                        <div class="name">
                            NFT Level 3
                        </div>
                    </div>
                    <img src="../assets/marketplace/product-1.png" alt="product" class="product_img">
                    <div class="product_footer">
                        <div class="product_footer_item channel">
                            <img src="../assets/video/chanel_logo.svg" alt="logo" class="channel_img">
                            @BlueWard2
                        </div>
                        <div class="product_footer_item price">
                            <img src="../assets/icons/nimbl-circle.png" alt="logo" class="channel_img">
                            31.4
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shop">
            <div class="shop_header">
                <div class="option active">
                    Buy
                </div>
                <div class="option">
                    Bid
                </div>
                <div class="option">
                    Sweep
                </div>
            </div>
            <div class="shop_card">
                <div class="name">
                    Bulk Buy
                </div>
                <div class="shop_item">
                    <div class="item_img_wrap">
                        <img src="../assets/video-1.jpg" alt="product" class="item_img">
                    </div>
                    <div class="item_name">
                        @BlueWard2
                    </div>
                    <div class="item_price">
                        Floor Price: <span class="gradient-number">44 NMBL</span> 
                    </div>
                </div>
                <div class="shop_button">
                    Buy now
                </div>
            </div>
            <div class="shop_reccomendations reccom">
                <div class="reccom_category">
                    <div class="reccom_header">
                        <div class="name">
                            Sales
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
                        <div class="reccom_card card" v-for="card in 20">
                             <img src="../assets/marketplace/channel-img.png" alt="channel" class="card_img">
                             <div class="card_info">
                                <div class="name">
                                    #1209
                                </div>
                                <div class="date">
                                    4 minutes
                                </div>
                                <div class="creator">
                                    by <span>@BlueWard2</span>
                                </div>
                             </div>
                             <div class="card_price gradient-number">
                                44 NMBL
                             </div>
                        </div>
                    </div>
                </div>
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
                        <div class="reccom_card card" v-for="card in 20">
                             <img src="../assets/marketplace/channel-img.png" alt="channel" class="card_img">
                             <div class="card_info">
                                <div class="name">
                                    #1209
                                </div>
                                <div class="date">
                                    4 minutes
                                </div>
                                <div class="creator">
                                    by <span>@BlueWard2</span>
                                </div>
                             </div>
                             <div class="card_price gradient-number">
                                44 NMBL
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
    name: 'MarketPlaceView'
}
</script>

<style lang="scss" scoped>

input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 20px;
    line-height: 28px;
    color: #fff;

    &::placeholder {
        color: rgba(255, 255, 255, 0.8);
    }
}

.market {
    padding-top: 27px;
    display: flex;
    justify-content: space-between;
    .sidebar {
        margin-left: 2px;
        width: 360px;

        .search {
            background: #1A1B1C;
            border-radius: 1px;
            display: flex;
            align-items: center;
            padding-left: 43px;
            margin-bottom: 32px;

            &_icon {
                margin-right: 38px;
            }

            &_input {
                line-height: 58px;
            }
        }

        .filter {
            background: rgba(33, 35, 52, 0.45);
            box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(51.863px);
            color: #fff;
            font-size: 24px;
            padding-bottom: 38px;

            &_header {
                height: 65px;
                display: flex;
                align-items: center;
                padding-left: 18px;
            }
            &_buy {
                background: #0C111E;
                height: 74px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 23px 0 18px;
            }
            &_prices {
                padding-left: 18px;
                padding-right: 8px;
                font-size: 20px;

                input, select{
                    background: transparent;
                    width: 94px;
                    border: 1px solid #3B4760;
                    border-radius: 5px;
                    text-align: center;
                    padding: 6px 0;
                    color: #fff;
                    height: 42px;
                    font-size: 20px;

                    &::placeholder {
                        color: rgba(59, 71, 96, 1);
                    }
                }

                &_header, &_body {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                &_header {
                    padding: 23px 16px 20px 0;
                }
            }
            &_params {
                margin-top: 50px;
                cursor: pointer;
                padding-left: 18px;
            }
        }
    }

    &_body {
        margin-left: 46px;
    }

    .topmenu {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        &_btn {
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 3.08919px 3.08919px 20.852px rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(40.0537px);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 242px;
            height: 60px;

            &.active {
                background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(234, 0, 213, 0.5);
                z-index: 1;
            }

            img {
                margin-right: 18px;
            }
        }
        &_refresh {
            margin-left: 43px;
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                border: 1px solid #444444;
                border-radius: 5px;
                padding: 6px 4px;
                margin-right: 18px;
            }
        }
    }

    .products {
        height: calc(100vh - 220px);
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px;

        .product {
            background: rgba(26, 25, 25, 0.8);
            box-shadow: 0px 0px 12px #473F9E;
            width: calc(33.33% - 18px);
            margin-bottom: 18px;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s ease;

            &:hover {
                transform: scale(1.03);
            }

            &_header {
                .name {
                    font-size: 16px;
                    padding: 7px 0 5px 8px;
                }

                &:after {
                    content: '';
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(1, 234, 242, 0.5) -20.05%, rgba(54, 112, 254, 0.3) 58.06%, rgba(220, 8, 217, 0.5) 115.23%);
                    backdrop-filter: blur(4.09517px);
                    display: block;
                    width: 167px;
                    height: 9px;
                
                }
            }

            &_img {
                width: 100%;
                object-fit: cover;
                aspect-ratio: 16 / 9;
                transition: 0.5s ease;
            }

            &_footer {
                padding: 10px 8px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &_item {
                    display: flex;
                    align-items: center;
                }

                .channel {
                    &_img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }
            }
        }
    }

    .shop {
        background: rgba(33, 35, 52, 0.45);
        box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(51.863px);
        min-width: 708px;
        margin-left: 23px;
        border-radius: 1px;

        &_header {
            background: #1A1B1C;
            display: flex;
            align-items: center;

            .option {
                width: 33.3%;
                font-size: 24px;
                padding: 14px 0 20px;
                position: relative;
                text-align: center;
                cursor: pointer;

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
            }
        }

        &_card {
            background: #1A1B1C;
            padding: 37px 44px;

            .name {
                font-size: 30px;
                margin-bottom: 28px;
            }
        }

        &_item {
            display: flex;
            align-items: center;
            justify-content: space-between;

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
                font-size: 24px;
                margin-left: 30px;
                margin-right: auto;
            }

            .item_price {
                color: #BFBFBF;
                font-size: 20px;

                span {
                }
            }
        }
        &_button {
            background: #D70BDA;
            width: 100%;
            border-radius: 10px;
            padding: 12px 0 17px;
            font-family: "Octosquares-Bold";
            font-size: 30px;
            text-align: center;
            margin-top: 30px;
        }

        &_reccomendations {
            display: flex;
            justify-content: space-between;
            padding: 20px 24px;

            .reccom {
                &_category {
                    width: calc(50% - 6px);
                }

                &_header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 18px;
                    
                    .name {
                        font-family: "Octosquares-Medium";
                        font-size: 20px;
                    }

                    .live {
                        background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                        backdrop-filter: blur(7px);
                        width: 60px;
                        border: 1px solid;
                        font-size: 14px;
                        padding: 3px 0;
                        text-align: center;
                        margin: 0 15px 0 20px;
                    }

                    .select {
                        border: 1px solid #3F2D5A;
                        padding: 10px 0;
                        width: 125px;
                        font-size: 15px;
                        padding-left: 20px;
                    }
                }

                &_body {
                    height: calc( 100vh - 600px );
                    overflow-y: scroll;
                    .card {
                        background: #171C2D;
                        display: flex;
                        align-items: flex-start;
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
                                margin-bottom: 8px;
                            }
                            .date {
                                font-size: 14px;
                                color: #707791;
                                margin-bottom: 13px;
                            }
                            .creator {
                                font-size: 14px;
                                color: #707791;

                                span {
                                    font-family: "Octosquares-Bold";
                                    color: #00EAF2;
                                }
                            }
                        }
                        &_price {

                        }
                    }
                }
            }
        }
    }
}
</style>