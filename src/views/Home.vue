<template>
  <div class="home">
    <div class="sidebar">
        <div class="sidebar_video">
            <img class="video" src="@/assets/video-1.jpg" alt="" />
            <div class="name">GarryVee's Page</div>
        </div>
        <template v-if="showSubscribers === false">
            <div class="sidebar_tabs">
                <div class="tab active">Top</div>
                <div class="tab">Trending</div>
                <div class="tab">Rising</div>
                <div class="tab">Watching List</div>
            </div>
            <div class="channels">
                <div class="sidebar_sort">
                    <div class="sort byDate">
                        <div class="date active">1d</div>
                        <div class="date">1w</div>
                        <div class="date">1m</div>
                        <div class="date">1y</div>
                        <div class="date">All</div>
                    </div>
                    <div class="sort byCategory">
                        <div>All Categories</div>
                        <img src="../assets/icons/arrow_down.svg" alt="">
                    </div>
                    <div class="sort all">View All</div>
                </div>
                <div class="sidebar_channels">
                    <table>
                        <tr class="col">
                            <th class="col-1">Channels</th>
                            <th class="col-2">Subscribers</th>
                            <th class="col-3">Floor Price</th>
                            <th class="col-4">Total Volume</th>
                        </tr>
                        <tr class="table_value" @click="toogleSubscribers()" v-for="item in 2" :key="item"> 
                            <td class="table_channel">
                                <div class="id">1</div>
                                <img class="img" src="../assets/video/chanel_logo.svg" alt="">
                                <div class="name">@BlueWard2</div>
                            </td>
                            <td class="table_subs">100k</td>
                            <td class="table_floor">134 NMBL</td>
                            <td class="table_floor">238 NMBL</td>
                        </tr>
                    </table>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="channels">
                <div class="subs_header">
                    <div class="subs_header_head">
                        <img class="back_btn" src="../assets/icons/back.svg" alt="" @click="toogleSubscribers()">
                        <div class="subs_titles">
                            <img src="../assets/icons/avatar.svg" alt="">
                            <div class="subs_title">@BlueWard2</div>
                        </div>
                    </div>
                    <div class="go_to_channel">Go to channel </div>
                </div>
                <div class="about_channel">
                    <div class="about_channel_box" v-for="item in 6">
                        <div class="value">100 132</div>
                        <div class="key">Members</div>
                    </div>
                </div>
                <div class="subs_videos">
                    <div class="subs_videos_header">Trending Videos</div>
                    <div class="subs_video_video">
                        <div class="subs_videos_box" v-for="item in 3">
                            <div class="subs_videos_main">
                                <div class="subs_img">
                                    <img style="object-fit:cover; " src="../assets/icons/subs_videos.svg" alt="">
                                </div>
                                <div class="videos_timeline">13:13</div>
                            </div>
                            <div class="subs_videos_names">Talks about NFT videos that can change world...</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </template>
    </div>
    <div class="content">
        <div class="content_categories">
            <div class="category">
                <img class="img" src="@/assets/category-1.png" alt="" />
                <div class="name">Trending Videos</div>
                <img class="add_icon" src="@/assets/icons/plus.svg" alt="">
            </div>
            <div class="category">
                <img class="img" src="@/assets/category-2.png" alt="" />
                <div class="name">Crypto News</div>
                <img class="add_icon" src="@/assets/icons/plus.svg" alt="">
            </div>
            <div class="category">
                <img class="img" src="@/assets/category-3.png" alt="" />
                <div class="name">ETH NFTs</div>
                <img class="add_icon" src="@/assets/icons/plus.svg" alt="">
            </div>
            <div class="category">
                <img class="img" src="@/assets/category-4.png" alt="" />
                <div class="name">Play2Earn1</div>
                <img class="add_icon" src="@/assets/icons/plus.svg" alt="">
            </div>
        </div>
        <div class="videos_content">
            <div class="video_box" @click="$router.push({name: 'detail'})" v-for="item in 26">
                <img class="video_box_img" src="@/assets/icons/playlist-1.svg" alt="">
                <div class="video_box_title">
                    <div style="display:flex; align-items:center;">
                        <img class="video_img" src="@/assets/icons/fish_icon.svg" alt="">
                        <div class="nikname">@BlueWard2</div>
                    </div>
                    <div class="prices">
                        <div class="price_title">Floor Price:</div>
                        <div class="price_value">140 NMBL</div>
                    </div>
                </div>
                <div class="video_header">
                    <div class="video_header_title">Gary Vee Explains How He Made $90 Million on NFTs & Why They ghhtr htrhtrhtr</div>
                    <div class="video_views_box">
                        <div class="video_views">
                            <img src="../assets/video/likes.svg" alt="">
                            <div class="video_views_count">100 345</div>
                        </div>
                        <div class="video_views">
                            <img src="../assets/video/viewers.svg" alt="">
                            <div class="video_views_count">100 345</div>
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
    name: 'Home',
    data() {
        return {
            showSubscribers: false
        }
    },
    methods: {
        toogleSubscribers() {
            this.showSubscribers = !this.showSubscribers
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.sidebar {
    min-width: 866px;
    display: flex;
    flex-direction: column;
    color: #fff;

    &_video {
        width: 100%;
        .video {
            height: 420px;
            width: 100%;
            object-fit: cover;
        }
        .name {
            background: linear-gradient(
                273.52deg,
                rgba(0, 234, 242, 0.2) -54.44%,
                rgba(234, 0, 213, 0.2) 110.67%
            );
            backdrop-filter: blur(8.96875px);
            font-size: 23px;
            font-weight: 700;
            text-align: center;
            height: 43px;
            position: relative;
            border: 1px solid rgba(234, 0, 213, 0.5);
        }
    }
    /* Show Subscribers */
    &_tabs {
        width: 100%;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(46.5146px);
        display: flex;
        .tab {
            cursor: pointer;
            width: 25%;
            font-size: 23px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            &.active {
                background: linear-gradient(
                273.52deg,
                rgba(0, 234, 242, 0.2) -54.44%,
                rgba(234, 0, 213, 0.2) 110.67%
                );
                backdrop-filter: blur(8.96875px);
                border: 1px solid rgba(234, 0, 213, 0.5);
            }
        }
    }

    &_sort {
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;
        .sort {
            display: flex;
            background: #141c25;
            border: 1px solid rgba(234, 0, 213, 0.5);
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            cursor: pointer;

            &.byCategory {
                display: flex;
                // margin-left: 45px;
                // margin-right: 140px;
                padding: 0 20px;
                font-weight: 400;
                font-size: 21.525px;
                line-height: 30px;
            }
            &.all {
                padding: 0 20px;
                font-weight: 400;
                font-size: 21.525px;
                line-height: 30px;
            }

        }

        .byDate {
            .date {
                width: 20%;
                height: 54px;
                width: 54px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 21px;

                &.active {
                    background: linear-gradient(
                        273.52deg,
                        rgba(0, 234, 242, 0.2) -54.44%,
                        rgba(234, 0, 213, 0.2) 110.67%
                    );
                    backdrop-filter: blur(8.96875px);
                }
            }
        }
    }
    .channels {
        padding: 35px 22px;
    }
    table {
        width: 100%;
        text-align: center;
        tr {
            height: 116px;
            th {
                font-weight: 400;
                font-size: 19.7313px;
                line-height: 28px;
            }
            td {
                cursor: pointer;
            }
            .col-1 {
                text-align: left;
            }
            .table_channel {
                display: flex;
                align-items: center;
                margin-right: 50px;
                height: 116px;
                .id {
                    font-weight: 400;
                    font-size: 18.8344px;
                    line-height: 26px;
                    margin-right: 26px;
                }
                .img {
                    border-radius: 50%;
                    width: 56px;
                    height: 56px;
                    margin-right: 18px;
                }
                .name {
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 31px;
                }
            }
            .table_subs {
                font-weight: 400;
                font-size: 22px;
                line-height: 31px;
                margin-right: 69px;
            }
            .table_floor {
                font-weight: 400;
                font-size: 22px;
                line-height: 31px;
                background-color: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
            }
        }
    }
    .subs_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 34px;
        &_head {
            display: flex;
            align-items: center;
            .back_btn {
                cursor: pointer;
                padding: 10px 15px;
                margin-bottom: auto;
                background: rgba(255, 255, 255, 0.35);
                box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
                backdrop-filter: blur(46.5146px);
            }
            .subs_titles {
                display: flex;
                align-items: center;
                margin-left: 22px;
                .subs_title {
                    font-weight: 400;
                    font-size: 30.3701px;
                    line-height: 43px;
                    margin-left: 21px;
                }
            }
        }
        .go_to_channel {
            cursor: pointer;
            padding: 22px 30px;
            font-weight: 400;
            font-size: 22.32px;
            line-height: 31px;
            background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
            backdrop-filter: blur(8.96875px);
        }
    }
    .about_channel {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &_box {
            cursor: pointer;
            text-align: center;
            width: calc(33.33% - 18px);
            padding: 18px 30px;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(46.5146px);
            margin-bottom: 52px;
            .value {
                font-weight: 400;
                font-size: 26px;
                line-height: 36px;
                margin-bottom: 10px;
                &:hover {
                    color: #EA00D5;
                }
            }
            .key {
                font-weight: 400;
                font-size: 20px;
                line-height: 118%;
            }
        }
    }
    .subs_videos {
        .subs_videos_box {
            position: relative;
            width: 267px;
            border-radius: 12px;
            margin: 0 7px 0 7px;
            cursor: pointer;
            .subs_videos_main {
                border-radius: 12px;
                .subs_img {
                }
                .videos_timeline {
                    position: absolute;
                    z-index: 2;
                    background: rgba(31, 26, 33, 0.11);
                    backdrop-filter: blur(10.2876px);
                    border-radius: 6px;
                    bottom: 75px;
                    left: 15px;
                    padding: 3px;
                    background: rgba(31, 26, 33, 0.11);
                    backdrop-filter: blur(10.2876px);
                    border: 1px solid rgba(31, 26, 33, 0.11);
                    cursor: pointer;
                }
            }
            .subs_videos_names {
                font-weight: 400;
                font-size: 21px;
                line-height: 29px;
            }
        }
        .subs_video_video {
            display: flex;
            // & > *:not(:last-child) {
            //     margin-right: 15px;
            // }
        }
        &_header {
            font-weight: 400;
            font-size: 28.9577px;
            line-height: 41px;
            margin-bottom: 18px;
        }
    }
    /* Show Detail */
}
  

.content {
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 100%;
    .content_categories {
        display: flex;
        width: 100%;
        height: 213px;
        margin-bottom: 55px;
        .category {
            width: 25%;
            // height: 213px;
            position: relative;
            .img {
                width: 100%;
            }
            .name {
                position: absolute;
                top: 50%;
                left: 25%;
                font-weight: 400;
                font-size: 32px;
                line-height: 45px;
            }
            .add_icon {
                position: absolute;
                z-index: 1;
                bottom: 10px;
                right: 10px;
                width: 28px;
                height: 28px;
                padding: 5px;
                border-radius: 50%;
                background: #767676;
                color: #000000;
            }
        }
    }
}

.videos_content {
    height: calc(100vh - 400px);
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 0 16px;
    
    .video_box {
        cursor: pointer;
        width: calc(25% - 22px);
        background: linear-gradient(180deg, rgba(139, 139, 139, 0.51) 54.13%, rgba(11, 11, 11, 0.51) 90.66%);
        box-shadow: inset -3.80257e-16px -0.802504px 4.01252px rgba(217, 10, 218, 0.33), inset 0.802504px 0px 4.01252px rgba(0, 234, 242, 0.33);
        backdrop-filter: blur(4.81502px);
        margin: 0 11px 32px;
        &_img {
            width: 100%;
            object-fit: cover;
        }
        &_title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;
            height: 58px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(16.8526px);
            margin-top: -20px;
            
            .video_img {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .nikname {
                font-weight: 400;
                font-size: 24px;
                line-height: 33px;
                margin-right: 24px;
                overflow: hidden;
            }
            .price {
                &_title {
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 25px;
                }
                &_value {
                    font-family: "Octosquares-Bold";
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 22px;
                    background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
        .video_header {
            padding: 12px;
            &_title {
                font-weight: 400;
                font-size: 20px;
                line-height: 28px;
                margin-bottom: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
                -webkit-box-orient: vertical;
            }
            .video_views_box {
                display: flex;
                align-items: center;
                cursor: pointer;
                .video_views {
                    display: flex;
                    align-items: center;
                    
                    .video_views_count {
                        margin-left: 8px;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                    }
                }
                & > *:not(:last-child) {
                    margin-right: 31px;
                }
            }
        }
    }
    
    
    
}
</style>