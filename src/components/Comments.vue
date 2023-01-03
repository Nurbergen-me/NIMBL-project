<template>
    <div class="comments" @click="currentCommentIndex = -1">
        <div ref="commentsElem" class="comments_body" :style="{ 'height': !canComment && '100%' }">
            <div class="comments_comment comment" v-for="(comment, index) in comments" :key="comment.id"
                :class="{ 'active': index === currentCommentIndex, 'line': !canComment }">
                <img :src="comment.avatar" alt="comment" :class="canComment ? 'comment_img' : 'comment_img-small'">
                <div class="comment_info">
                    <div class="comment_info_header">
                        <div class="comment_name">
                            {{ comment.user }}
                        </div>
                        <span class="comment_date">
                            4 days ago
                        </span>
                        <div class="comment_controls">
                            <img src="../assets/icons/emoji_icon.svg" alt="emoji" class="controls_icon" @click.stop="toggleEmojiPicker(index)">
                            <img src="../assets/icons/controls_icon.svg" alt="controls" class="controls_icon" @click.stop="toggleControls(index)">
                            <div id="picker" class="picker" @click.stop="" v-if="index === currentCommentIndex && emojiPicker">
                            </div>
                            <div class="menu" v-if="index === currentCommentIndex && controls">
                                <div class="menu_item">
                                    <img src="../assets/icons/reply_icon.svg" alt="reply" class="menu_item_icon">
                                    <div class="menu_item_text">
                                        Reply
                                    </div>
                                </div>
                                <div class="menu_item">
                                    <img src="../assets/icons/copy_icon.svg" alt="copy" class="menu_item_icon">
                                    <div class="menu_item_text">
                                        Copy text
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="comment.attachImg && canComment" class="attach">
                        <img :src="comment.attachImg" alt="">
                    </div>
                    <div class="comment_text">
                        {{ comment.text }}
                    </div>
                    <div v-if="!canComment" class="comment_info_footer">

                        <div class="reactions">
                            <div class="reaction">
                                <img src="@/assets/community/like.svg" alt=""> <span>{{ comment.likeCount }}</span>
                            </div>
                            <div class="reaction">
                                <img src="@/assets/community/dislike.svg" alt="">
                            </div>
                        </div>

                        <div v-if="comment.attachImg" class="attach">
                            <img :src="comment.attachImg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="comments_create" v-if="canComment">
            <img class="emojies" src="../assets/icons/emoji_create_icon.svg" alt="reply" @click.stop="toggleEmojiPicker(1000)">
            <input v-model="message" type="text" class="comments_input" placeholder="Enter text" @keydown.enter="submitNewComment">
            <button class="comments_button" @click="submitNewComment">
                <img src="../assets/icons/arrow_send_icon.svg" alt="send">
            </button>
            <div id="picker" class="picker" @click.stop="" v-if="currentCommentIndex === 1000 && emojiPicker">
            </div>
        </div>
    </div>
</template>

<script>
import {createPicker} from 'picmo';
export default {
    name: 'Comments',
    props: {
        canComment: {
            type: Boolean,
            default: true
        },
        comments: Array,
        newComment: String,

    },
    emits: ['update:newComment', 'submit-comment'],
    data() {
        return {
            currentCommentIndex: -1,
            controls: false,
            emojiPicker: false,
            message: ''
        }
    },
    mounted() {

    },
    methods: {
        toggleEmojiPicker(index) {
            this.emojiPicker = this.currentCommentIndex !== index ? true : !this.emojiPicker
            this.currentCommentIndex = index
            this.controls = false

            setTimeout(() => {
                const rootElement = document.querySelector('#picker')
                if (rootElement) {
                    const picker = createPicker({
                        rootElement,
                    });
                    picker.addEventListener('emoji:select', event => {
                        console.log('Emoji selected:', event.emoji);
                        if (this.currentCommentIndex === 1000) {
                            this.message += event.emoji
                        }
                    });
                }
            }, 100)
        },
        toggleControls(index) {
            this.controls = this.currentCommentIndex !== index ? true : !this.controls
            this.currentCommentIndex = index
            this.emojiPicker = false
        },
        submitNewComment() {
            this.$emit('submit-comment', this.message)
            this.message = ''
            setTimeout(() => {
                this.$refs.commentsElem.scrollTo({
                    top: this.$refs.commentsElem.scrollHeight,
                    behavior: "smooth"
                })
            }, 0)

        }
    }
}
</script>

<style lang="scss" scoped>
.comments {
    font-weight: 400;
    font-size: 24px;
    height: 100%;

    #picker {
        position: absolute;
        top: 30px;
        right: 0;
        z-index: 2;
    }
    &_body {
        height: calc(100% - 85px);
        overflow-y: scroll;
        padding-bottom: 86px;
    }

    .comment {
        display: flex;
        align-items: flex-start;
        padding: 28px 20px;
        position: relative;

        &.line:not(:last-child)::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 2%;
            width: 60%;
            height: 1px;
            background-color: rgba(45, 53, 74, 1);
        }

        &.active,
        &:hover {
            background: linear-gradient(90.26deg, rgba(3, 230, 243, 0.17) 2.73%, rgba(48, 127, 253, 0.23) 53.67%, rgba(194, 24, 223, 0.44) 96.23%);
            ;

            .comment_controls {
                display: flex;
            }
        }

        &_img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-right: 28px;
        }
        &_img-small {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            margin-right: 16px;
        }
        &_info {
            width: -webkit-fill-available;
            flex-grow: 1;
            &_header {
                display: flex;
                align-items: center;
                margin-bottom: 12px;

                .comment_controls {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    margin-left: auto;
                    position: relative;
                    display: none;

                    .controls_icon {
                        width: 24px;
                        height: 24px;
                        margin-left: 10px;
                        cursor: pointer;
                    }

                    .menu {
                        position: absolute;
                        top: 30px;
                        right: 0;
                        width: 300px;
                        // display: none;

                        &_item {
                            background: #161616;
                            display: flex;
                            align-items: center;
                            padding: 20px 22px;
                            cursor: pointer;

                            &:hover {
                                background: #1E1E20;
                            }

                            &_icon {
                                width: 24px;
                                margin-right: 16px;
                            }
                        }
                    }
                }
            }
            .attach {
                margin-bottom: 26px;
                img {
                    max-height: 190px;
                }
            }
            &_footer {
                .reactions {
                    margin-top: 24px;
                    display: flex;
                    font-family: 'TT Octosquares', 'Inter', sans-serif;

                    .reaction {
                        font-size: 18px;
                        line-height: 26px;
                        padding: 8px 14px;
                        border-radius: 50px;
                        cursor: pointer;
                        transition: 0.3s ease;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        color: #8E8E8E;
                        &:hover {
                            background: rgba(85, 85, 85, 0.34);
                        }
                        img {
                            width: 20px;
                        }
                    }
                }

                .attach {
                    margin-top: 28px;
                    img {
                        max-height: 190px;
                    }
                }
            }
        }
        &_text {
            font-weight: 400;
            font-size: 23px;
            line-height: 32px;
        }
        &_name {
            background: transparent;
            color: #01EAF2;
            font-size: 23px;
            line-height: 32px;
            margin-right: 18px;
        }
        &_date {
            color: #82868D;
            font-size: 16px;
        }

    }

    &_comment {
        display: flex;
    }

    &_create {
        background: #141C25;
        padding: 21px 32px;
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        .emojies {
            width: 36px;
            cursor: pointer;
        }

        #picker {
            top: auto;
            bottom: 86px;
            left: 0;
        }
    }
    &_input {
        border-left: 1px solid #F9FCFD;
        padding-left: 12px;
        margin-left: 26px;
        outline: none;
        width: 82%;
        cursor: text
    }
    &_button {
        background: linear-gradient(106.95deg, rgba(1, 167, 255, 0.8) 0.4%, rgba(255, 0, 245, 0.8) 103.58%);
        box-shadow: inset 11px 16px 33px rgba(255, 255, 255, 0.11);
        backdrop-filter: blur(93px);
        border-radius: 5px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
    }
}



@media (max-width: 2000px) {
    .comments {
        font-size: 20px;
        line-height: 24px;

        &_body {
            height: calc(100% - 65px);
            padding-bottom: 60px;
        }

        .comment {
            padding: 21px 15px;

            &_img {
                width: 60px;
                height: 60px;
                margin-right: 25px;
            }
            &_img-small {
                width: 52px;
                height: 52px;
                margin-right: 12px;
            }
            &_info {
                &_header {
                    margin-bottom: 10px;

                    .comment_controls {

                        .controls_icon {
                            width: 20px;
                            height: 20px;
                            margin-left: 7px
                        }

                        .menu {
                            width: 250px;
                            // display: none;

                            &_item {
                                padding: 10px 15px;

                                &_icon {
                                    width: 20px;
                                    margin-right: 10px;
                                }

                                &_text {
                                    font-size: 18px;
                                    line-height: 20px;
                                }
                            }
                        }
                    }
                }
                .attach {
                    margin-bottom: 17px;
                    img {
                        max-height: 135px
                    }
                }
                &_footer {
                    .reactions {
                        margin-top: 16px;

                        .reaction {
                            font-size: 14px;
                            line-height: 18px;
                            padding: 4px 8px;
                            border-radius: 20px;
                            gap: 6px;

                            img {
                                width: 18px;
                            }
                        }
                    }
                    .attach {
                        margin-top: 20px;
                        img {
                            max-height: 130px
                        }
                    }
                }
            }
            &_text {
                font-size: 18px;
                line-height: 24px;
            }
            &_name {
                font-size: 17px;
                line-height: 24px;
                margin-right: 10px;
            }
            &_date {
                font-size: 12px;
                line-height: 17px;

            }

        }

        &_create {
            padding: 15px 14px;

            .emojies {
                width: 30px;
                cursor: pointer;
            }

            #picker {
                top: auto;
                bottom: 86px;
                left: 0;
            }
        }
        &_input {
            padding-left: 8px;
            margin-left: 18px;
            font-size: 16px;
        }
        &_button {

            border-radius: 5px;
            width: 33px;
            height: 33px;
        }
    }
}



@media (max-width: 1600px) {
    .comments {
        &_body {
            height: calc(100% - 65px);
        }
        .comment {
            padding: 12px 24px;

            &_img {
                width: 50px;
                height: 50px;
                margin-right: 14px;
            }
            &_name {
                font-size: 16px;
            }
            &_text {
                font-size: 14px;
            }
            &_info_header {
                .comment_controls {
                    .controls_icon {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            &_info_footer {}

        }

        &_create {
            padding: 10px 20px;

            .emojies {
                width: 28px;
            }

            #picker {
                bottom: 55px;
            }
        }
        &_input {
            font-size: 18px;
        }
        &_button {
            width: 36px;
            height: 36px;
        }
    }
}
</style>