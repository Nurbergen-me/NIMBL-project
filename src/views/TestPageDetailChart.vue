<template>
    <div class="detail_chart">
        <div class="header_content">
            <div class="filter_search">
                <input
                    placeholder="Search items"
                    class="search"
                    type="text"
                />
            </div>

            <div class="content_header">
                <div class="header_items">
                    <div class="header_item active">
                        <img
                            class="header_item_icon"
                            src="@/assets/marketplace/detail/detail-item.svg"
                            alt=""
                        />
                        <div class="header_item_text">Items</div>
                    </div>
                    <div class="header_item">
                        <img
                            class="header_item_icon"
                            src="@/assets/marketplace/detail/detail-stat.svg"
                            alt=""
                        />
                        <div class="header_item_text">Stats</div>
                    </div>
                </div>
                <div class="header_reverse">
                    <img
                        class="header_reverse_icon"
                        src="@/assets/marketplace/detail/detail-reverse.svg"
                        alt=""
                    />
                    <div class="header_reserve_text">
                        Refreshed a while ago
                    </div>
                </div>
            </div>
        </div>
        <div class="main_content">
            <ChartList></ChartList>
        </div>
    </div>
</template>

<script>
import ChartList from "@/components/chart/ChartList.vue"
export default {
    name: 'TestPageDetailChart',
    props: ['items'],
    components: {
        ChartList
    }
}
</script>

<style lang="scss" scoped>
.detail_chart {
    width: 100%;
    .header_content {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        .filter_search {
            background: #1a1b1c;
            position: relative;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            margin-right: 30px;
            &::before {
                content: url("@/assets/icons/search.svg");
                margin-top: 9px;
                margin-left: 8px;
                margin-right: 8px;
            }
            .search {
                width: 100%;
                padding-left: 15px;
                font-weight: 400;
                font-size: 23.3206px;
            }
        }
        .content_header {
            display: flex;
            align-items: center;
            .header_items {
                display: flex;
                align-items: center;
                margin-right: 50px;
                .header_item {
                    cursor: pointer;
                    padding: 10px 40px;
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: inset 3.08919px 3.08919px 20.852px
                        rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(40.0537px);
                    &_text {
                        font-size: 24px;
                        line-height: 34px;
                    }
                    &_icon {
                        object-fit: cover;
                        width: 28px;
                        height: 28px;
                        margin-right: 10px;
                    }
                    &.active {
                        background: linear-gradient(
                            273.52deg,
                            rgba(0, 234, 242, 0.2) -54.44%,
                            rgba(234, 0, 213, 0.2) 110.67%
                        );
                        backdrop-filter: blur(7.72298px);
                    }
                }
            }
            .header_reverse {
                cursor: pointer;
                display: flex;
                align-items: center;
                &_icon {
                    margin-right: 5px;
                    object-fit: cover;
                    padding: 5px;
                    width: 30px;
                    height: 30px;
                    border: 1px solid #444444;
                }
                &_text {
                    white-space: nowrap;
                    font-size: 19.0089px;
                    line-height: 27px;
                    color: #acacac;
                    opacity: 0.6;
                }
            }
        }
    }
    .main_content {
        width: 100%;
        padding: 0 10px;
    }
}
</style>