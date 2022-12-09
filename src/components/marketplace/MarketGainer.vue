<template>
    <div class="gainer_content">
        <div class="gainer_headers">
            <div class="gainer_box" :class="{'active': gainer}" @click="gainer = true">
                <img class="gainer_icon" src="@/assets/marketplace/gainer-up.svg" alt="">
                <div class="gainer_title">Top Gainers</div>
            </div>
            <div class="gainer_box" :class="{'active': gainer === false}" @click="gainer = false">
                <img class="gainer_icon last" src="@/assets/marketplace/gainer-up.svg" alt="">
                <div class="gainer_title">Top Losers</div>
            </div>
        </div>
        
        <div class="gainer_tables">
            <div class="gainer_table header">
                <div class="table_id">#</div>
                <div class="table_name">Name</div>
                <div class="table_price">Price</div>
                <div class="table_avg" style="color: #A9A9B7;">24h</div>
                <div class="table_volume">Volume(24h)</div>
            </div>

            <div v-if="gainer">
                <div class="gainer_table body">
                    <div class="table_id">1</div>
                    <div class="table_name">
                        <img class="table_name_logo" src="@/assets/marketplace/gainer/logo_vide_chanel.svg" alt="">
                        <div class="table_name_title">Bankless</div>
                    </div>
                    <div class="table_price active">158 NMBL</div>
                    <div class="table_avg">
                        +21.6%
                        <!-- <div class=table_avg_title>AVG</div>
                        <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line_2-remove.png" alt=""> -->
                    </div>
                    <div class="table_volume">$7 123 422</div>
                </div>
                <div class="gainer_table body">
                    <div class="table_id">2</div>
                    <div class="table_name">
                        <img class="table_name_logo" src="@/assets/marketplace/gainer/mary-logo.svg" alt="">
                        <div class="table_name_title">Johnny Vnice</div>
                    </div>
                    <div class="table_price">177 NMBL</div>
                    <div class="table_avg">
                        +19.9%
                        <!-- <div class=table_avg_title>AVG</div>
                        <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line-222.png" alt=""> -->
                    </div>
                    <div class="table_volume">$6 215 1632</div>
                </div>
                <div class="gainer_table body">
                    <div class="table_id">3</div>
                    <div class="table_name">
                        <img class="table_name_logo" src="@/assets/marketplace/gainer/johnny-logo.svg" alt="">
                        <div class="table_name_title">Impudent Jok</div>
                    </div>
                    <div class="table_price">146 NMBL</div>
                    <div class="table_avg">
                        +17.2%
                        <!-- <div class=table_avg_title>AVG</div>
                        <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line-33.png" alt=""> -->
                    </div>
                    <div class="table_volume">$4 009 376</div>
                </div>
            </div>

            <div v-else>
                <div class="gainer_table body">
                    <div class="table_id">1</div>
                    <div class="table_name">
                        <img class="table_name_logo" src="@/assets/marketplace/gainer/logo_vide_chanel.svg" alt="">
                        <div class="table_name_title">Bankless</div>
                    </div>
                    <div class="table_price active">158 NMBL</div>
                    <div class="table_avg loser">
                        -21.6%
                        <!-- <div class=table_avg_title>AVG</div>
                        <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line_2-remove.png" alt=""> -->
                    </div>
                    <div class="table_volume">$7 123 422</div>
                </div>
                <div class="gainer_table body">
                    <div class="table_id">2</div>
                    <div class="table_name">
                        <img class="table_name_logo" src="@/assets/marketplace/gainer/mary-logo.svg" alt="">
                        <div class="table_name_title">Johnny Vnice</div>
                    </div>
                    <div class="table_price">177 NMBL</div>
                    <div class="table_avg  loser">
                        -19.9%
                        <!-- <div class=table_avg_title>AVG</div>
                        <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line-222.png" alt=""> -->
                    </div>
                    <div class="table_volume">$6 215 1632</div>
                </div>
                <div class="gainer_table body">
                    <div class="table_id">3</div>
                    <div class="table_name">
                        <img class="table_name_logo" src="@/assets/marketplace/gainer/johnny-logo.svg" alt="">
                        <div class="table_name_title">Impudent Jok</div>
                    </div>
                    <div class="table_price">146 NMBL</div>
                    <div class="table_avg loser">
                        -17.2%
                        <!-- <div class=table_avg_title>AVG</div>
                        <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line-33.png" alt=""> -->
                    </div>
                    <div class="table_volume">$4 009 376</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarketGainer',
    data() {
        return {
            gainer: true
        }
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
    .gainer_content {
        .gainer_headers {
            white-space: nowrap;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .gainer_box {
                display: flex;
                align-items: center;
                background: rgba(85, 85, 85, 0.14);
                backdrop-filter: blur(11.2278px);
                border-radius: 8px;
                padding: 10px 20px;
                cursor: pointer;
                &.active {
                    background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                    backdrop-filter: blur(11.0754px);
                }
                &:first-child {
                    margin-right: 20px;
                }
                .gainer_icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 5px;
                    &.last {
                        transform: rotate(90deg);
                    }
                }
            }
            .gainer_title {
                font-weight: 400;
                font-size: 25px;
            }
        }
        .gainer_tables {
            border-radius: 12px;
            .gainer_table {
                padding: 10px 40px;
                cursor: pointer;
                align-items: center;
                background: #000000;
                display: grid;
                grid-template-columns: 0.3fr 2.5fr 2fr 3fr 2fr;
                gap: 15px;
                transition: all 0.5s ease;
                &:hover {
                    .table_price {
                        background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    background: #0D1218;
                }
                .table_name {
                    align-items: center;
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                }
                
                .table_avg {
                    color: #15FFAB;
                    display: grid;
                    grid-template-columns: 0.6fr 2fr;
                    &.loser {
                        color: #FF1515;
                    }
                    &_line {
                        justify-content: center;
                        height: 100%;
                        width: 300px;
                        object-fit: contain;
                    }
                }
            }
            .header {
                border-radius: 12px;
                height: 64px;
                margin-bottom: 20px;
                color: #A9A9B7;
                font-weight: 400;
                font-size: 20px;
                line-height: 21px;
            }
            .body {
                border-radius: 12px;
                font-weight: 400;
                font-size: 25px;
                line-height: 63px;
                
                &:hover {
                    transform: scale(1.02);
                }
            }
        }
    }
}

@media (max-width: 1800px) {
    .gainer_content {
        .gainer_title {
            font-size: 50px;
        }
        .gainer_tables {
            .body {
                font-size: 30px;
            }
        }
    }
}
</style>