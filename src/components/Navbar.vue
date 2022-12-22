<template>
  <div class="navbar">
        <img class="navbar_logo" src="@/assets/icons/logo.svg" alt="" @click="$router.push({'name': 'home'})" />
        <div class="navigators">
            <div class="navigator" @click="$router.back()">
                <img class="nav_icon" src="@/assets/icons/back.svg" alt="">
            </div>
            <div class="navigator">
                <img class="nav_icon next" src="@/assets/icons/back.svg" alt="">
            </div>
        </div>
        <div class="navbar_search" @click="toggle()">
            <input placeholder="Search Channels, Videos or NFTs" class="search" type="text" />
            <div class="search_box" v-if="searchBox">
                <div class="search_box_header">
                    <div class="search_box_item">
                        <img src="@/assets/navbar/search_1.svg" />
                        <div clas="name">All</div>
                    </div>
                    <div class="search_box_item">
                        <img src="@/assets/navbar/search_2.svg" />
                        <div clas="name">Channels</div>
                    </div>
                    <div class="search_box_item">
                        <img src="@/assets/navbar/search_3.svg" />
                        <div clas="name">Videos</div>
                    </div>
                    <div class="search_box_item">
                        <img src="@/assets/navbar/search_4.svg" />
                        <div clas="name">NFT</div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="search_box_bodies">
                    <div class="search_box_body">
                        <img class="img" src="@/assets/navbar/search_bg1.svg" />
                        <div class="body_item">
                            <div class="body_item_title">Simple academy</div>
                            <div class="body_item_subtitle">432 432 members </div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="search_box_body">
                        <img class="img" src="@/assets/navbar/search_bg2.svg" />
                        <div class="body_item">
                            <div class="body_item_title">Best academy</div>
                            <div class="body_item_subtitle">322 NMBL</div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="search_box_body">
                        <img class="img" src="@/assets/navbar/search_bg3.svg" />
                        <div class="body_item">
                            <div class="body_item_title">Where is my academy?</div>
                            <div class="body_item_subtitle">432 views</div>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
            </div> 
        </div>
        <div class="navbar_content">
            <div class="navbar_dropdown" @click="toggleWallet()">
                <div class="name" :class="{'active': walletBox === true}">Wallet</div>
                <img v-if="!walletBox" class="icon" src="@/assets/icons/arrow_down.svg" alt="" />
                <img v-else class="icon" src="@/assets/navbar/color_down.svg" alt="" />
            </div>
            <div class="navbar_body" v-if="walletBox">
                <div class="navbar_body_title">Wallet</div>
                <div class="navbar_body_box">
                    <div class="box_header">
                        <div class="total">Total balance</div>
                        <div class="value">340 NMBL</div>
                    </div>
                    <img src="@/assets/navbar/globus.svg" alt="">
                </div>
                <div class="navbar_body_footer">
                    <div class="footer_navbar">
                        <div class="footer_navbar_item active">Assets</div>
                        <div class="footer_navbar_item">Activity</div>
                    </div>
                    <div class="footer_body" v-for="item in 5" :key="item">
                        <div class="footer_body_left">
                            <img src="@/assets/navbar/logo-navbar.svg" />
                            <div class="footer_body_header">
                                <div class="header_title">@BlueWard2</div>
                                <div class="header_subtitle">28.09.22</div>
                            </div>
                        </div>
                        <div class="footer_body_right"> - $135,00 </div>
                    </div>
                </div>
            </div>
            <div class="navbar_dropdown">
                <div class="name">Wls</div>
                <img class="icon" src="@/assets/icons/arrow_down.svg" alt="" />
            </div>
            <div class="navbar_dropdown">
                <div class="name">Airdrop</div>
                <img class="icon" src="@/assets/icons/arrow_down.svg" alt="" />
            </div>
            <div class="chat_wrap active">
                <img class="chat_icon icon" src="@/assets/icons/chat.svg" alt="" />
            </div>
            <img class="icon person_icon" src="@/assets/icons/profile.svg" alt="" />
        </div>
  </div>
</template>
  
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            searchBox: false,
            walletBox: false,
        }
    },
    methods: {
        toggle() {
            this.searchBox = !this.searchBox
        },
        toggleWallet() {
            this.walletBox = !this.walletBox
        }
    }
};
</script>
  
<style lang="scss" scoped>
.navbar {
    font-family: "Octosquares-Regular";
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 82px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    // backdrop-filter: blur(6px);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(13, 7, 7, 0.4) 100%
    );
    background-clip: padding-box; /* !importanté */
    border: solid 2px transparent;
    position: relative;
    padding: 0 32px 0 7px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -2;
        margin: -2px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(
        to right,
        rgba(3, 230, 243, 0.6),
        rgba(52, 118, 254, 0.6),
        rgba(191, 25, 224, 0.6)
        );
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: #111a41;
    }
}
.navbar_logo {
    height: 63px;
    cursor: pointer;
}

.navigators {
    display: flex;
    .navigator {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(51.863px);
        margin-left: 10px;
        cursor: pointer;
        .nav_icon {
            display: flex;
            align-items: center;
            justify-content: center;
            &.next {
                opacity: 0.5;
                transform: rotate(180deg);
            }
        }
    }
}

.navbar_search {
    font-family: "Octosquares-Regular";
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.35);
    box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(23.5px);

    .search {
        background: #0A0E20;
        padding-left: 80px;
        color: #ffffff;
        width: 660px;
        height: 52px;
        z-index: 2;
        font-weight: 400;
        font-size: 18px;
        line-height: 37px;
        &::placeholder {
            color: rgba(255, 255, 255, 0.8);
        }
    }

    .search_box {
        padding: 10px;
        width: 100%;
        height: 350px;
        position: absolute;
        left: 0;
        top: 55px;
        overflow: hidden;
        background: #111a41;
        &_header {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        &_item {
            cursor: pointer;
            padding: 5px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                margin-right: 10px;
            }
            &.active, &:hover {
                background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                backdrop-filter: blur(10px);
            }
        }
        &_bodies {
            display: grid;
            gap: 10px;
        }
        &_body {
            padding: 10px;
            &:hover {
                background: #000000;
            }
            width: 100%;
            height: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            .img {
                padding-right: 10px;
            }
            .body_item_title {
                font-size: 20px;
            }
            .body_item_subtitle {
                font-size: 16px;
            }
        }
        .line {
            // margin: 5px 0;
            width: 100%;
            height: 2px;
            background: #1A294A;
        }
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -2;
        margin: -2px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(
        to right,
        rgba(3, 230, 243, 0.6),
        rgba(52, 118, 254, 0.6),
        rgba(191, 25, 224, 0.6)
        );
    }
    &:before {
        content: '';
        background: url("../assets/icons/search.svg") no-repeat center / contain;
        position: absolute;
        display: block;
        width: 30px;
        height: 30px;
        left: 31px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }
}

.back_main {
    cursor: pointer;
    display: flex;
}

.back_icon {
    width: 16px;
    height: 16px;
}

.navbar_content {
    position: relative;
    display: flex;
    align-items: center;
    .navbar_dropdown {
        display: flex;
        margin-right: 60px;
        cursor: pointer;
        .name {
            text-transform: uppercase;
            font-family: "Octosquares-Bold";
            font-weight: 400;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.85);
            margin-right: 13px;
            &.active {
                color: #EA00D5;
            }
        }
    }
    &.activee {
        color: #EA00D5;
    }
    .navbar_body {
        position: absolute;
        font-family: "Octosquares-Bold";
        width: 400px;
        height: 520px;
        position: absolute;
        top: 70px;
        left: 0;
        background: #000000;
        border-radius: 12px;
        padding: 10px;
        &_title {
            font-size: 20px;
            margin-bottom: 10px;
        }
        &_box {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-radius: 12px;
            margin-bottom: 20px;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(90deg, #33D3FF -6.67%, #FF04D4 48.29%, #A702FF 105.83%);
        }
        &_footer {
            cursor: pointer;
            .footer_navbar {
                cursor: pointer;
                display: flex;
                width: 100%;
                &_item {
                    padding: 5px;
                    width: 50%;
                    text-align: center;
                    font-size: 16px;
                    margin-bottom: 20px;
                    &.active, &:hover {
                        background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 56.69%, #D70BDA 102.91%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        border-bottom: 1px solid #D70BDA;
                    }
                }
            }
            .footer_body {
                padding: 5px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
                &_left {
                    display: flex;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }
                &_header {
                    font-size: 16px;
                    .header_title {
                        color: rgba(0, 234, 242, 0.7);
                    }
                }
                &:last-child {
                    margin: 0;
                }
                &:hover {
                    background: #1A294A;
                    border-radius: 12px;
                }
            }
        }
    }
}

.chat {
    &_wrap {
        position: relative;
        margin-right: 47px;
        &.active {

            &:after {
                content: '';
                background: #F51380;
                border: 2.57044px solid rgba(17, 15, 15, 0.7);
                width: 11px;
                height: 11px;
                border-radius: 50%;
                position: absolute;
                display: block;
                top: -4px;
                right: -4px;
            }
        }
    }
}

@media (max-width: 2000px) {
  .navbar {
    height: 70px;
  }
  .search {
    height: 44px;
    line-height: 44px;
    font-size: 20px;
  }
  .navbar_search::before {
    width: 24px;
    height: 24px;
  }
  .navbar_dropdown {
    margin-right: 40px;
    .name {
      font-size: 18px;
    }
    img {
      width: 18px;
    }
  }
  .chat_wrap {
    margin-right: 20px;
    height: 30px;
  }
  .chat_icon {
    width: 30px;
  }
  .person_icon {
    width: 35px;
  }
}
@media (max-width: 1600px) {
  .navbar {
    height: 60px;
    &_logo {
      height: 50px;
    }
    &_search {

      &:before {
        left: 16px;
        width: 20px;
        height: 20px;
      }
    }
    .search {
      width: 550px;
      font-size: 16px;
      height: 38px;
      line-height: 40px;
      padding-left: 50px;
    }
  }
  .navbar_dropdown {
    margin-right: 36px;
    .name {
      font-size: 16px;
    }
    img {
      width: 16px;
    }
  }
}
@media (max-width: 1600px) { 
  .navbar {
    &_logo {
      height: 45px;
    }
    .search {
      max-width: 460px;
    }
    &_dropdown {
      margin-right: 26px;

      .name {
        font-size: 14px;
      }

      img {
        width: 14px;
      }
    }
  }
}
</style>
  