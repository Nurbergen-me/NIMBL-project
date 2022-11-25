<template>
    <div class="marketplace">
        <div class="navbar">
            <div class="navbar_item" v-for="item in 7">
                <img class="navbar_img" src="../assets/marketplace/navbar/ranking.svg" alt="">
                <div class="narvar_text">Rankings</div>
            </div>
        </div>
        <div class="main">

            <!-- <HeaderTraidingVue class="traiding_content" /> -->
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

            <!-- <HeaderTraidingVue class="traiding_content" /> -->
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

                <div class="table_content">
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
                            <img src="../assets/icons/arrow_down.svg" alt="" />
                        </div>
                    </div>
                </div>

                <!-- <div class="table">
                    <img src="@/assets/marketplace/chanel_logo.svg" alt="">
                    <div class="title_content">
                        <div class="rang">Rank 1</div>
                        <div class="nike">@Tim.Cooks</div>
                        <div class="level"></div>
                    </div>
                    <div class="tag_content">
                        <div class="category">Categories:</div>
                        <div class="tags">
                            <div class="tag">#ETH-NFT</div>
                            <div class="tag">#NFT-Trading</div>
                        </div>
                    </div>
                    <div class="nimbl_content">
                        <div class="nimble_item">
                            <div class="nimble_subtitle">The # of Listings</div>
                            <div class="nimble_title">480/4022</div>
                        </div>
                    </div>
                </div> -->

            </div>

        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.marketplace {
    display: flex;
    color: #FFFFFF;
    .navbar {
        display: flex;
        flex-direction: column;
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
                        transition: all 0.1s ease-in;
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
                &_icon {

                }
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
        .table_content {
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