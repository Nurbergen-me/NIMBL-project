<template>
    <div class="marketplace">
        <div class="navbar">
            <div class="navbar_item" v-for="item in 7">
                <img class="navbar_img" src="../assets/marketplace/navbar/ranking.svg" alt="">
                <div class="narvar_text">Rankings</div>
            </div>
        </div>

        <div class="main">
            <div class="container">

                <div class="header_content">
                    <img class="header_img" src="../assets/marketplace/market-header.jpg" alt="">
                    <div class="header_titles">
                        <div class="header_title">Discover, collect, and sell Channel NFTs and Passes</div>
                        <div class="header_subtitle">Neemble is the world’s first and largest tokenized video-sharing platform</div>
                        <div class="header_buttons">
                            <button class="button active">Create</button>
                            <button class="button">Explore</button>
                        </div>
                        <div class="header_footer">
                            <img class="header_footer_icon" src="../assets/marketplace/pause.svg" alt="">
                            <div class="header_footer_text">Learn more about Neemble</div>
                        </div>
                    </div>
                </div>

                <div class="content_categories">
                    <div class="category">
                        <img class="img" src="@/assets/category-1.png" alt="" />
                        <div class="name">Trending Videos</div>
                        <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
                    </div>
                    <div class="category">
                        <img class="img" src="@/assets/category-2.png" alt="" />
                        <div class="name">Crypto News</div>
                        <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
                    </div>
                    <div class="category">
                        <img class="img" src="@/assets/category-3.png" alt="" />
                        <div class="name">ETH NFTs</div>
                        <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
                    </div>
                    <div class="category">
                        <img class="img" src="@/assets/category-4.png" alt="" />
                        <div class="name">Play2Earn1</div>
                        <img class="add_icon" src="@/assets/icons/plus.svg" alt="" />
                    </div>
                </div>

                <div class="table_content">
                    <div class="select_content">
                        <div class="select_item active">
                            <img class="select_logo" src="@/assets/marketplace/select/creators.svg" alt="">
                            <div class="select_text">Top Creators</div>
                        </div>

                        <div class="select_item">
                            <img class="select_logo" src="@/assets/marketplace/select/rising.svg" alt="">
                            <div class="select_text">Rising Creators</div>
                        </div>
                        <div class="select_item">
                            <img class="select_logo" src="@/assets/marketplace/select/trending.svg" alt="">
                            <div class="select_text">Trending Creators</div>
                        </div>
                    </div>

                    <div class="table_inner">
                        <div class="table_content_2">
                            <div class="sidebar_sort">
                                <div class="sort_byDate">
                                    <div class="date active">1d</div>
                                    <div class="date">1w</div>
                                    <div class="date">1m</div>
                                    <div class="date">1y</div>
                                    <div class="date">All</div>
                                </div>
                                <div class="sort_byCategory">
                                    <div class="byCategory_text">All Categories</div>
                                    <img src="@/assets/icons/arrow_down.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="tables">
                            <div class="table" v-for="item in 5">
                                <img src="@/assets/marketplace/chanel_logo.svg" alt="">
                                <div class="title_content">
                                    <div class="rang">Rank 1</div>
                                    <div class="nike">@Tim.Cooks</div>
                                    <div class="level">level 14 creator </div>
                                </div>
                                <div class="tag_content">
                                    <div class="category">Categories:</div>
                                    <div class="tags">
                                        <div class="tag">#ETH-NFT</div>
                                        <div class="tag">#NFT-Trading</div>
                                        <div class="tag">#NFT-Trading</div>
                                    </div>
                                </div>
                                <div class="nimbl_content">
                                    <div class="nimble_item">
                                        <div class="nimble_subtitle">The # of Listings</div>
                                        <div class="nimble_title">480/4022</div>
                                    </div>
                                    <div class="nimble_item">
                                        <div class="nimble_subtitle">The # of Listings</div>
                                        <div class="nimble_title">480/4022</div>
                                    </div>
                                    <div class="nimble_item">
                                        <div class="nimble_subtitle">The # of Listings</div>
                                        <div class="nimble_title">480/4022</div>
                                    </div>
                                    <div class="nimble_item">
                                        <div class="nimble_subtitle">The # of Listings</div>
                                        <div class="nimble_title">480/4022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="launchpad_content">
                    <div class="launchpad_title">Launchpad</div>
                    <div class="launchpad_select">
                        <div class="launchpad_select_item active">
                            <img class="logo" src="@/assets/marketplace/launchpad/live.svg" alt="">
                            <div class="title">Live mints</div>
                        </div>
                        <div class="launchpad_select_item">
                            <img class="logo" src="@/assets/marketplace/launchpad/finished.svg" alt="">
                            <div class="title">Finished mints</div>
                        </div>
                        <div class="launchpad_select_item">
                            <img class="logo" src="@/assets/marketplace/launchpad/upcoming.svg" alt="">
                            <div class="title">Upcoming mints</div>
                        </div>
                    </div>

                    <div class="launchpad_boxs">
                        <div class="video_box" v-for="item in 6">
                            <img class="video_box_img" src="@/assets/marketplace/combinator 1.jpg" alt="">
                            <div class="video_box_headers">
                                <img
                                    class="video_img"
                                    src="@/assets/marketplace/logo_vide_chanel.svg"
                                    alt=""
                                />
                                <div class="video_chanel_titles">
                                    <div class="chanel_name">Y Combinator</div>
                                    <div class="chanel_viewers">120k Members</div>
                                </div>
                                <div class="video_chanel_cost">
                                    <div class="chanel_minting">Minting:</div>
                                    <div class="chanel_nfts">1111 NFTs</div>
                                </div>
                            </div>
                            <div class="video_box_body">
                                <div class="text">Brief description of the channel - dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
                                <div class="raises">
                                    <div class="raise">Raise</div>
                                    <div class="money">50 000$</div>
                                </div>
                                <div class="video_box_footer">
                                    <div class="starts">
                                        <div class="start">Start</div>
                                        <div class="date">Sep 30, 00:00 UTC</div>
                                    </div>
                                    <div class="prices">
                                        <div class="price">Price</div>
                                        <div class="value">123</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="opportunities_content">
                    <div class="opportunities_title">Whitelist opportunities</div>
                    <div class="oportunities_boxs">
                        <div class="opportunities_box">
                            <img class="opportunities_box_img" src="@/assets/marketplace/chanel_logo.svg" alt="">
                            <div class="opportunities_box_body">
                            <img class="logo" src="@/assets/marketplace/logo_vide_chanel.svg" alt="">
                                <div class="opportunities_box_title">Bankless</div>
                                <div class="opportunities_box_text">Brief description of the channel - dummy text of the printing and typesetting industry...</div>
                                <div class="opportunities_box_line"></div>
                                <div class="opportunities_box_footer">
                                    <div class="footer_title">Number of spots</div>
                                    <div class="footer_percentage">2%</div>
                                    <div class="footer_value">(50/2000)</div>
                                </div>
                                <button class="opportunities_box_button">Register for WL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup></script>

<style scoped lang="scss">

.marketplace {
    display: flex;   
    align-items: flex-start;
    color: #FFFFFF;
    height: 100%;
    overflow: auto;
    .navbar {
        // display: flex;
        // flex-direction: column;
        padding: 40px;
        background: #0D192F;
        border-right: 1px solid rgba(191, 25, 224, 0.36);
        .navbar_item {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-bottom: 40px;
            .navbar_img {
                margin-right: 22px;
            }
            .narvar_text {
                font-weight: 400;
                font-size: 29px;
                line-height: 34px;
                &:hover, &.active {
                    background: linear-gradient(
                        273.52deg,
                        rgba(0, 234, 242, 0.2) -54.44%,
                        rgba(234, 0, 213, 0.2) 110.67%
                    );
                    text-decoration: underline;
                }
            }
        }
    }

    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        .header_content {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 100px;
            .header_img {
                height: 620px;
                object-fit: cover;
                margin-right: 40px;
            }
            .header_titles {
                width: 50%;
                .header_title {
                    width: 80%;
                    font-weight: 400;
                    font-size: 71.0721px;
                    line-height: 100.5%;
                    margin-bottom: 2%;
                }
                .header_subtitle {
                    width: 70%;
                    font-weight: 400;
                    font-size: 36.6465px;
                    line-height: 90.5%;
                    opacity: 0.77;
                    margin-bottom: 5%;
                }
                .header_buttons {
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                    .button {
                        overflow: hidden;
                        padding: 25px 50px;
                        border: 3px solid rgba(59, 101, 255, 0.5);
                        border-radius: 12px;
                        font-weight: 400;
                        font-size: 40px;
                        line-height: 49px;
                        letter-spacing: 0.02em;
                        text-align: center;
                        transition: all 0.5s ease-in;
                        &.active {
                            border-radius: 12px;
                            background: linear-gradient(90.24deg, rgba(1, 234, 242, 0.5) 0.21%, rgba(59, 101, 255, 0.5) 57.08%, rgba(215, 11, 218, 0.5) 102.91%);
                        }
                        &:hover {
                            background: linear-gradient(90.24deg, rgba(1, 234, 242, 0.5) 0.21%, rgba(59, 101, 255, 0.5) 57.08%, rgba(215, 11, 218, 0.5) 102.91%);
                        }
                        &:not(:last-child) {
                            margin-right: 30px;
                        }
                    }
                }

                .header_footer {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    &_icon {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #473F9E;
                        padding: 8px;
                        border-radius: 50%;
                        margin-right: 15px;
                    }
                    &_text {
                        font-weight: 400;
                        font-size: 26.652px;
                        line-height: 29px;
                        color: #473F9E;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            .header_footer {
                display: flex;
                align-items: center;
                // &_icon {

                // }
            }
        }

        .traiding_content {
            margin-bottom: 40px;
        }

        .table_content {
            padding: 50px 30px;
        }

        .select_content {
            display: flex;
            align-items: center;
            cursor: pointer;
            width: 100%;
            margin-bottom: 30px;
            transition: 0.3s ease;
            .select_item {
                padding: 20px 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 33.33%;
                height: 100%;
                display: flex;
                align-items: center;
                background: #000000;
                transition: all 0.3s ease;
                &.active {
                    background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                    backdrop-filter: blur(10px);
                    border: 1px solid #ea00d5;
                    border-bottom: 2px solid #00eaf2;
                }
                &:hover {
                    border: 1px solid #ea00d5;
                    border-bottom: 2px solid #00eaf2; 
                }
                .select_logo {
                    margin-right: 40px;
                }
                .select_text {
                    font-weight: 400;
                    font-size: 35px;
                    line-height: 55px;
                }
            }
        }

        .table_inner {
            padding: 10px 20px;
            .table_content_2 {
                .sidebar_sort {
                    display: flex;
                    align-items: center;
                    height: 63px;
                    margin-bottom: 30px;
                    cursor: pointer;
                        
                    .sort_byDate {

                        background: #141C25;
                        margin-right: 30px;
                        width: 500px;
                        display: flex;
                        align-items: center;
                        border: 1px solid rgba(234, 0, 213, 0.5);
                        .date {
                            padding: 14px 25px;
                            width: 60%;
                            font-weight: 400;
                            font-size: 25.4319px;
                            line-height: 36px;
                            text-align: center;
                            &.active {
                                background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                                backdrop-filter: blur(10.5966px);
                            }
                            &:hover {
                                background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                                backdrop-filter: blur(10.5966px);
                            }
                        }
                    }

                    .sort_byCategory {
                        background: #141C25;
                        display: flex;
                        align-items: center;
                        padding: 14px 25px;
                        border: 1px solid rgba(234, 0, 213, 0.5);
                        .byCategory_text {
                            font-weight: 400;
                            font-size: 25.4319px;
                            line-height: 36px;
                            text-align: center;
                            margin-right: 15px;
                        }
                    }
                }
            }

            .tables {
                .table {
                    cursor: pointer;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 2fr;
                    justify-items: center;
                    align-items: center;
                    transition: 0.3s ease;
                    .title_content {
                        display: grid;
                        grid-gap: 15px;
                        .rang {
                            font-weight: 400;
                            font-size: 24.7747px;
                            line-height: 30px;
                            font-family: "Octosquares-Bold";
                            background: linear-gradient(
                                90.24deg,
                                #01eaf2 0.21%,
                                #3b65ff 57.08%,
                                #d70bda 102.91%
                            );
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                        .nike {
                            font-weight: 400;
                            font-size: 28.2405px;
                            line-height: 40px;
                        }
                        .level {
                            background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.1) -54.44%, rgba(234, 0, 213, 0.1) 110.67%);
                            backdrop-filter: blur(6.01991px);
                            border-radius: 3px;
                            padding: 10px 30px;

                            font-weight: 400;
                            font-size: 20.8458px;
                            line-height: 17px;
                            opacity: 0.7;
                        }
                    }
                    .tag_content {
                        .category {
                            font-weight: 400;
                            font-size: 24.7747px;
                            line-height: 35px;
                            color: #979797;
                            margin-bottom: 10px;
                        }
                        .tags {
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            .tag {
                                padding: 3px 7px;
                                background: #131217;
                                font-weight: 400;
                                font-size: 19.2692px;
                                line-height: 19px;
                                color: #6BB8FF;
                                &:not(:last-child) {
                                    margin-bottom: 5px;
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                    .nimbl_content {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        gap: 20px 40px;
                        .nimble_item {
                            .nimble_subtitle {
                                font-weight: 400;
                                font-size: 24.7747px;
                                line-height: 35px;

                                color: #FFFFFF;
                            }
                            .nimble_title {
                                font-weight: 400;
                                font-size: 28.2432px;
                                line-height: 34px;

                                background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            }
                        }
                    }
                    &:hover {
                        background: #14161E;
                        padding: 10px;
                        transform: scale(1.02);
                    }
                }
            }
        }
        

        .launchpad_content {
            margin-bottom: 30px;
            .launchpad_title {
                font-weight: 400;
                font-size: 65.589px;
                line-height: 92px;
                color: #FFFFFF;
                margin-bottom: 30px;
            }
            .launchpad_select {
                display: grid;
                grid-template-columns: 400px 400px 400px;
                text-align: center;
                gap: 40px;
                margin-bottom: 30px;
                &_item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    padding: 20px 40px;
                    background: rgba(85, 85, 85, 0.14);
                    backdrop-filter: blur(17.0531px);
                    border-radius: 12px;
                    transition: 0.3s ease;
                    .logo {
                        margin-right: 20px;
                    }
                    .title {
                        font-weight: 400;
                        font-size: 25px;
                        line-height: 52px;
                    }
                    &.active, &:hover {
                        background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                        backdrop-filter: blur(16.8216px);
                    }
                }
            }

            .launchpad_boxs {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr; // 600px 600px 600px; //
                grid-gap: 50px;
                .video_box {
                    transition: all 0.5s ease;
                    cursor: pointer;
                    border: 1px solid #A162F7;
                    border-radius: 12px;
                    overflow: hidden;
                    &_img {
                        width: 100%;
                        object-fit: cover;
                    }
                    &_headers {
                        padding: 20px;
                        background: rgba(0, 0, 0, 0.5);
                        backdrop-filter: blur(16.8526px);
                        margin-top: -50px;
                        display: grid;
                        grid-template-columns: 1fr 4fr 2fr;
                        align-items: center;
                        .video_chanel_titles {
                            .chanel_name {
                                font-weight: 400;
                                font-size: 31.0612px;
                                line-height: 43px;
                            }
                            .chanel_viewers {
                                font-weight: 400;
                                font-size: 19.6063px;
                                line-height: 27px;
                            }
                        }
                        .video_chanel_cost {
                            .chanel_minting {
                                font-weight: 400;
                                font-size: 24.2382px;
                                line-height: 34px;
                            }
                            .chanel_nfts {
                                font-family: "Octosquares-Bold";
                                white-space: nowrap;
                                font-weight: 400;
                                font-size: 32.7215px;
                                line-height: 39px;
                                background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            }
                        }
                    }
                    &_body {
                        padding: 50px 20px;
                        .text {
                            font-weight: 400;
                            font-size: 25px;
                            line-height: 37px;
                        }
                        .raises {
                            text-align: center;
                            .raise {
                                font-weight: 400;
                                font-size: 26px;
                                line-height: 37px;
                                text-align: center;
                                color: rgba(255, 255, 255, 0.62);
                            }
                            .money {
                                font-weight: 400;
                                font-size: 30px;
                                line-height: 43px;
                            }
                        }
                        .video_box_footer {
                            display: flex;
                            justify-content: space-between;
                            .starts {
                                .start {
                                    font-weight: 400;
                                    font-size: 21px;
                                    line-height: 37px;
                                    color: rgba(255, 255, 255, 0.62);
                                }
                                .date {
                                    font-weight: 400;
                                    font-size: 21px;
                                    line-height: 37px;
                                }
                            }
                            .prices {
                                .price {
                                    font-weight: 400;
                                    font-size: 21px;
                                    line-height: 37px;
                                    color: rgba(255, 255, 255, 0.62);
                                }
                                .value {
                                    font-weight: 400;
                                    font-size: 21px;
                                    line-height: 37px;
                                }
                            }
                        }
                    }
                    &:hover {
                        transform: scale(1.02);
                        box-shadow: 0 0 11px rgba(33,33,33,.5); 
                    }
                }
                
            }
        }

        .opportunities_content {
            .opportunities_title {
                font-weight: 400;
                font-size: 64.2363px;
                line-height: 90px;
                margin-bottom: 50px;
            }
            .oportunities_boxs {
                display: grid;
                grid-template-columns: 3;
                grid-template-rows: 3;
                // width: 635px;
                // height: 420px;
                
            }
        }
    }
}
.content_categories {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 213px;
    margin-bottom: 55px;
    font-family: "Octosquares-Bold";
    .category {
      min-width: 300px;
      width: calc(25% - 22px);
      margin: 0 11px;
      // height: 213px;
      aspect-ratio: 16 / 9;
      position: relative;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        .img {
          transform: scale(1.2);
        }
      }
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
      }
      .name {
        position: absolute;
        font-weight: 400;
        font-size: 32px;
        line-height: 45px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .add_icon {
        position: absolute;
        z-index: 1;
        bottom: 10px;
        right: 10px;
        width: 47px;
        height: 47px;
        padding: 15px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.14);
        box-shadow: inset 3.20909px 3.20909px 21.6614px
          rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(16.0455px);
        color: #000000;
        cursor: pointer;
        transition: 0.5s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }
}
</style>