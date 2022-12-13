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
            <div class="community_channels_logo_wrap" v-for="channel, index in 13" :key="'channel-'+ index">
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

    &_feed {
        width: 40%;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(51.863px);

        &_comments {
            height: calc(100vh - 235px);
        }

        .name {
            background: linear-gradient(273deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
            backdrop-filter: blur(9px);
            text-align: center;
            padding: 10px 0;
            font-size: 24px;
        }
    }
    &_content {
        width: 60%;

        &_body {
            height: calc(100vh - 490px);
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

                &:after {
                    content: '';
                    background: linear-gradient(0deg, rgba(1, 234, 242, 0.8) 0.21%, rgba(59, 101, 255, 0.8) 57.08%, rgba(215, 11, 218, 0.8) 102.91%);
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
                }
                .quantity {
                    font-size: 22px;
                }
            }

            .logo {
                width: 96px;
                height: 96px;
                margin-right: 17px;
            }
        }
        &_numbers {
            &_item {
                background: rgba(0, 0, 0, 0.23);
                backdrop-filter: blur(34px);
                border-radius: 0px 0px 8px 8px;
                font-size: 26px;
                padding: 16px 19px;
                
                &:last-child {
                    border-radius: 8px 8px 0px 0px;
                    margin-top: 5px;
                }
            }
        }
        &_position {
            margin-left: auto;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(51px);
            height: 100%;
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
        }
    }
}
</style>