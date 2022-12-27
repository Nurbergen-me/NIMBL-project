<template>
    <div class="community">
        <div class="community_feed">
            <div class="name">
                Community Feed
            </div>
            <div class="community_feed_comments">
                <Comments :canComment="false" />
            </div>
        </div>
        <div class="community_content">
            <div class="community_channels">
                <div class="community_channels_logo_wrap" v-for="channel, index in 13" :key="'channel-' + index">
                    <img src="../assets/community/com1-logo.svg" alt="channel" class="community_channels_logo">
                </div>
            </div>
            <div class="community_channel channel">
                <div class="channel_info">
                    <img src="../assets/community/com1-logo.svg" alt="channel" class="logo">
                    <div class="channel_info_about">
                        <div class="name">
                            Bankless
                        </div>
                        <div class="quantity">
                            Community Size: <span>4.2k</span>
                        </div>
                    </div>
                </div>
                <div class="channel_numbers">
                    <div class="channel_numbers_item">
                        Floor Price: <span>20 NMBL</span>
                    </div>
                    <div class="channel_numbers_item">
                        Volume: <span>134 NMBL</span>
                    </div>
                </div>
                <div class="channel_position">
                    <div class="channel_position_number">
                        GaryVee #1

                        <img src="../assets/icons/arrow_down.svg" alt="arrow-down" class="channel_position_arrow">
                    </div>
                    <div class="channel_position_online">
                        32 online
                    </div>
                </div>
            </div>
            <div class="community_content_body">
                <Comments />
            </div>
        </div>
    </div>
</template>

<script>
import Comments from '@/components/Comments.vue'
export default {
    name: "Community",
    components: {
        Comments
    },
}
</script>

<style lang="scss" scoped>
.community {
    display: flex;
    align-items: flex-start;
    // - header - bottom 
    height: calc(100vh - 78px - 86px);
    overflow-y: hidden;


    &_feed {
        height: 100%;
        width: 40%;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(51.863px);

        &_comments {
            height: 100%;
        }

        .name {
            background: linear-gradient(273deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
            backdrop-filter: blur(9px);
            text-align: center;
            padding: 10px 0;
            font-size: 24px;
            line-height: 32px;
        }
    }
    &_content {
        position: relative;
        width: 60%;
        height: 100%;
        &_body {
            height: calc(100vh - 78px - 86px - 166px - 143px)
        }
    }
    &_channels {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(51px);
        padding: 14px 25px;
        display: flex;
        align-items: center;
        width: 100%;
        overflow-x: scroll;

        &_logo {
            width: 134px;
            height: 134px;
            border-radius: 50%;
            margin: 0 14px;

            &_wrap {
                position: relative;

                &::after {
                    content: '';
                    background: linear-gradient(to bottom, rgba(191, 25, 224, 0.61), rgba(52, 117, 254, 0.61), rgba(5, 226, 243, 0.61), rgba(23, 216, 31, 0.37));
                    position: absolute;
                    display: block;
                    width: 5px;
                    height: 90px;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -2px;
                }
            }
        }
    }
    .channel {
        display: flex;
        align-items: center;
        background: #141C25;
        padding-left: 38px;

        &_info {

            display: flex;
            align-items: center;
            margin-right: 80px;

            &_about {
                .name {
                    font-size: 40px;
                    font-weight: 900;
                }
                .quantity {
                    font-size: 22px;
                    span {
                        background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                    }
                }
            }

            .logo {
                width: 96px;
                height: 96px;
                margin-right: 17px;
            }
        }
        &_numbers {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            gap: 5px;
            &_item {
                background: rgba(0, 0, 0, 0.23);
                backdrop-filter: blur(34px);
                border-radius: 0px 0px 8px 8px;
                font-size: 26px;
                font-weight: 900;
                padding: 16px 19px;
                flex-grow: 1;
                &:last-child {
                    border-radius: 8px 8px 0px 0px;
                }

                span {
                    background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
            }
        }
        &_position {
            align-self: stretch;
            margin-left: auto;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(51px);
            padding: 33px 25px;

            &_number {
                font-size: 26px;
                margin-bottom: 4px;

                img {
                    margin-left: 40px;
                    color: #6D7390;
                }
            }
            &_online {
                font-size: 22px;
                color: #EA00D5;
            }
            &_arrow {
                cursor: pointer;
                position: relative;

            }
        }
    }
}

@media (max-width: 2000px) {
    .community {
        height: calc(100vh - 70px - 60px);
        &_feed {

            .name {
                font-size: 20px;
                line-height: 27px;
            }
        }
        &_channels {
            &_logo {
                width: 100px;
                height: 100px;
                &_wrap {
                    &::after {
                        height: 67px;

                    }
                }
            }
        }
        &_content {
            &_body {
                height: calc(100vh - 70px - 60px - 132px - 109px)
            }
        }

        .channel {
            padding-left: 28px;

            &_info {
                margin-right: 50px;

                &_about {
                    .name {
                        font-size: 32px;
                        font-weight: 900;
                    }
                    .quantity {
                        font-size: 18px;
                        font-weight: bold;
                    }
                }

                .logo {
                    width: 73px;
                    height: 73px;
                    margin-right: 12px;
                }
            }
            &_numbers {

                &_item {
                    font-size: 20px;
                    padding: 12px 16px;
                    flex-grow: 1;

                }
            }
            &_position {
                padding: 24px 18px;

                &_number {
                    font-size: 20px;
                    margin-bottom: 4px;

                    img {
                        margin-left: 40px;
                        color: #6D7390;
                    }
                }
                &_online {
                    font-size: 16px;
                    color: #EA00D5;
                }
            }
        }
    }
}
@media (max-width: 1600px) {
    .community {
        height: calc(100vh - 60px - 60px);


        &_content {
            &_body {
                height: calc(100vh - 60px - 60px - 132px - 109px)
            }
        }
    }
}
</style>