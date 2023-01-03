<template>
    <div class="community">
        <div :style="style" ref="videoEl" class="video"><video-player :poster="poster"></video-player></div>
        <div class="community_feed">
            <div class="name">
                Community Feed
            </div>
            <div class="community_feed_comments">
                <Comments :canComment="false" :comments="comments" />
            </div>
        </div>
        <div class="community_content">
            <div class="community_channels">
                <div class="community_channels_logo_wrap" v-for="channel, index in channels" :key="channels.id">
                    <img :src="channel.avatar" :alt="channel.name" class="community_channels_logo">
                    <span class="community_channels_name">{{ channel.name }}</span>
                </div>
            </div>
            <div class="community_channel channel">
                <div class="channel_info">
                    <img src="../assets/community/com19-logo.svg" alt="channel" class="logo">
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
                <Comments @submit-comment="submitMsg" :comments="chat" />
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useDraggable} from '@vueuse/core'
import Comments from '@/components/Comments.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
    name: "Community",
    components: {
        Comments, VideoPlayer
    },
    data() {
        return {
            poster: new URL('../assets/video-1.jpg', import.meta.url).href,
            comments: [{
                id: 1,
                user: "VinGaming",
                avatar: new URL('../assets/community/com1-logo.svg', import.meta.url).href,
                text: "It’s buyin time!",
                attachImg: new URL('../assets/icons/video-path-clip.svg', import.meta.url).href,
                likeCount: "2k"
            },
            {
                id: 2,
                user: "@BlueWard2",
                avatar: new URL('../assets/community/com14-logo.svg', import.meta.url).href,
                text: "Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.",
                likeCount: "5k"
            },
            {
                id: 3,
                user: "VinGaming",
                avatar: new URL('../assets/community/com2-logo.svg', import.meta.url).href,
                text: "Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.",
                likeCount: "12k"
            },
            {
                id: 4,
                user: "VinGaming",
                avatar: new URL('../assets/community/com2-logo.svg', import.meta.url).href,
                text: "Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.",
                likeCount: "12k"
            }],
            chat: [
                {
                    id: 1,
                    user: "Akie",
                    avatar: new URL('../assets/community/com15-logo.svg', import.meta.url).href,
                    text: "Hahaha. Don’t worry mate he’s figuringit out. He’s getting confused too",
                },
                {
                    id: 2,
                    user: "Den",
                    avatar: new URL('../assets/community/com16-logo.svg', import.meta.url).href,
                    text: "reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.",
                },
                {
                    id: 3,
                    user: "Ezekiel",
                    avatar: new URL('../assets/community/com17-logo.svg', import.meta.url).href,
                    text: "very soon #Iguverse whitelist, don't miss it, there is simply no better NFT, a new era where the very creativity of users is important.  artificial intelligence.",
                },
                {
                    id: 4,
                    user: "Mikey",
                    avatar: new URL('../assets/community/com18-logo.svg', import.meta.url).href,
                    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to",
                    attachImg: new URL('../assets/icons/video-path-clip.svg', import.meta.url).href,
                }
            ],
            channels: [{
                id: 1,
                name: "TupacTV",
                avatar: new URL('../assets/community/com20-logo.svg', import.meta.url).href,
            }, {
                id: 2,
                name: "Alkimax",
                avatar: new URL('../assets/community/com7-logo.svg', import.meta.url).href,
            }, {
                id: 3,
                name: "NotCrypto",
                avatar: new URL('../assets/community/com21-logo.svg', import.meta.url).href,
            }, {
                id: 4,
                name: "Ezekiel",
                avatar: new URL('../assets/community/com22-logo.svg', import.meta.url).href,
            }, {
                id: 5,
                name: "Mikey",
                avatar: new URL('../assets/community/com6-logo.svg', import.meta.url).href,
            }, {
                id: 6,
                name: "VinGaming",
                avatar: new URL('../assets/community/com8-logo.svg', import.meta.url).href,
            }, {
                id: 7,
                name: "ChamboTV",
                avatar: new URL('../assets/community/com9-logo.svg', import.meta.url).href,
            }, {
                id: 8,
                name: "Zuko",
                avatar: new URL('../assets/community/com10-logo.svg', import.meta.url).href,
            }, {
                id: 9,
                name: "Miko",
                avatar: new URL('../assets/community/com13-logo.svg', import.meta.url).href,
            }]
        }
    },
    methods: {
        submitMsg(msg) {
            if (msg.trim()) {
                this.chat.push({
                    id: this.chat.length + 1, user: "Chambo", avatar: new URL('../assets/community/com18-logo.svg', import.meta.url).href,
                    text: msg.trim(),
                })
            }

        }
    },
    setup() {
        const videoEl = ref(null)
        const {x, y, style} = useDraggable(videoEl, {
            initialValue: {x: 1200, y: 550},
        })

        return {
            videoEl,
            style
        }
    }


}
</script>

<style lang="scss" scoped>
.community {
    display: flex;
    align-items: flex-start;
    height: calc(100vh - var(--h-header-footer));
    overflow-y: hidden;
    position: relative;

    .video {
        position: fixed;
        cursor: move;
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
        z-index: 999;
        width: 640px;
        border-radius: 50px;
        overflow: hidden;
        border: 10px solid rgba(0, 0, 0, 0);
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(35.106px);
        background-origin: border-box;
        filter: drop-shadow(0px 10px 86px rgba(0, 0, 0, 0.5));
        &:active {
            cursor: grabbing;
            cursor: -moz-grabbing;
            cursor: -webkit-grabbing;
        }
    }

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
            height: calc(100vh - var(--h-header-footer) - 166px - 143px)
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
            display: block;
            position: relative;

            &_wrap {
                position: relative;
                cursor: pointer;

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

                &:hover {
                    .community_channels_logo {
                        filter: brightness(.3);
                    }
                    .community_channels_name {
                        display: block;
                    }
                }
            }
        }
        &_name {
            position: absolute;
            display: none;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
        height: calc(100vh - var(--h-header-footer));
        .video {
            width: 500px;
            border-radius: 40px;
            overflow: hidden;
            border: 8px solid rgba(0, 0, 0, 0);
        }

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
                height: calc(100vh - var(--h-header-footer) - 132px - 109px)
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
        height: calc(100vh - var(--h-header-footer));
        .video {
            width: 440px;
            border-radius: 30px;
            overflow: hidden;
            border: 8px solid rgba(0, 0, 0, 0);
        }

        &_content {
            &_body {
                height: calc(100vh - var(--h-header-footer) - 132px - 109px)
            }
        }
    }
}
</style>