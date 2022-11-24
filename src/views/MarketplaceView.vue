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
    </div>
</template>
<script setup>

</script>

<style lang="scss">

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
    min-height: 100vh;
    padding-top: 27px;
    display: flex;
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
        width: 1405px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .product {
            background: rgba(26, 25, 25, 0.8);
            box-shadow: 0px 0px 12px #473F9E;
            width: calc(33.3% - 27px);
            margin-bottom: 18px;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s ease;

            &:hover {
                transform: scale(1.07);
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
}
</style>