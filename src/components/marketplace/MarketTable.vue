<template>
    <div class="table_content">
        <div class="select_content">
            <div class="select_item" :class="{active: tableSelect === 1}" @click="tableSelect = 1">
                <img class="select_logo" src="@/assets/marketplace/select/creators.svg" alt="">
                <div class="select_text">Top Creators</div>
            </div>

            <div class="select_item" :class="{active: tableSelect === 2}" @click="tableSelect = 2">
                <img class="select_logo" src="@/assets/marketplace/select/rising.svg" alt="">
                <div class="select_text">Rising Creators</div>
            </div>
            <div class="select_item" :class="{active: tableSelect === 3}" @click="tableSelect = 3">
                <img class="select_logo" src="@/assets/marketplace/select/trending.svg" alt="">
                <div class="select_text">Trending Creators</div>
            </div>
        </div>

        <div class="table_inner">
            <div class="table_content_2">
                <div class="sidebar_sort">
                    <div class="sort_byDate">
                        <div class="date" :class="{'active': sort === 1}" @click="sort = 1">1d</div>
                        <div class="date" :class="{'active': sort === 2}" @click="sort = 2">1w</div>
                        <div class="date" :class="{'active': sort === 3}" @click="sort = 3">1m</div>
                        <div class="date" :class="{'active': sort === 4}" @click="sort = 4">1y</div>
                        <div class="date" :class="{'active': sort === 5}" @click="sort = 5">All</div>
                    </div>
                    <div class="sort_byCategory">
                        <div class="byCategory_text">All Categories</div>
                        <img class="byCategory_icon" src="@/assets/icons/arrow_down.svg" alt="" />
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
</template>

<script>
export default {
    name: 'MarketTable',
    data() {
        return {
            tableSelect: 1,
            sort: 1
        }
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
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
            border: 1px solid transparent;
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
}
@media (max-width: 1800px) {
    .table_content {
        padding: 40px 25px;
    }
    .select_content {
        .select_item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 50px;
            .select_text {
                font-size: 28px;
            }
        }
    }
    .table_inner {
        .table_content_2 {
            .sidebar_sort {
                .sort_byDate {
                    .date {
                        padding: 12px 20px;
                        font-size: 22px;
                    }
                }
                .sort_byCategory {
                    padding: 12px 20px;
                    .byCategory_text {
                        font-size: 22px;
                    }
                    .byCategory_icon {
                        margin-top: 5px;
                    }
                }
            }
        }
        .tables {
            .table {
                .title_content {
                    .rang {
                        font-size: 22px;
                    }
                    .nike {
                        font-size: 25px;
                    }
                    .level {
                        padding: 10px 25px;
                        font-size: 20px;
                    }
                }
                .tag_content {
                    .category {
                        font-size: 22px;
                    }
                    .tags {
                        .tag {
                            font-size: 18px;
                            line-height: 17px;
                        }
                    }
                }
                .nimbl_content {
                    .nimble_item {
                        .nimble_subtitle {
                            font-size: 20px;
                        }
                        .nimble_title {
                            font-size: 26px;
                        }
                    }
                }
                &:hover {
                    background: #14161E;
                    padding: 10px;
                    transform: scale(1);
                }
            }
        }
    }
}
@media (max-width: 1500px) {
    .table_content {
        padding: 40px 25px;
    }
    .select_content {
        .select_item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 30px;
            .select_text {
                font-size: 23px;
            }
        }
    }
    .table_inner {
        .table_content_2 {
            .sidebar_sort {
                .sort_byDate {
                    .date {
                        padding: 12px 20px;
                        font-size: 22px;
                    }
                }
                .sort_byCategory {
                    padding: 12px 20px;
                    .byCategory_text {
                        font-size: 22px;
                    }
                    .byCategory_icon {
                        margin-top: 5px;
                    }
                }
            }
        }
        .tables {
            .table {
                img {
                    margin-right: 10px;
                }
                .title_content {
                    .rang {
                        font-size: 22px;
                    }
                    .nike {
                        font-size: 25px;
                    }
                    .level {
                        padding: 10px 18px;
                        font-size: 18px;
                    }
                }
                .tag_content {
                    .category {
                        font-size: 22px;
                    }
                    .tags {
                        .tag {
                            font-size: 18px;
                            line-height: 17px;
                        }
                    }
                }
                .nimbl_content {
                    .nimble_item {
                        .nimble_subtitle {
                            font-size: 18px;
                        }
                        .nimble_title {
                            font-size: 22px;
                        }
                    }
                }
                &:hover {
                    background: #14161E;
                    padding: 10px;
                    transform: scale(1);
                }
            }
        }
    }
}
</style>