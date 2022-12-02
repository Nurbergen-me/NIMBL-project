<template>
    <div class="gainer_content">
        <div class="gainer_title">
            <div style="margin-right: 70px;">Top Gainers</div>
            <div>Top Losers</div>
        </div>
        
        <div class="gainer_tables">
            <div class="gainer_table header">
                <div class="table_id">#</div>
                <div class="table_name">Name</div>
                <div class="table_price">Price</div>
                <div class="table_avg">24h</div>
                <div class="table_volume">Volume(24h)</div>
            </div>
            <div class="gainer_table body">
                <div class="table_id">1</div>
                <div class="table_name">
                    <img class="table_name_logo" src="@/assets/marketplace/gainer/logo_vide_chanel.svg" alt="">
                    <div class="table_name_title">Bankless</div>
                </div>
                <div class="table_price">158 NMBL</div>
                <div class="table_avg">
                    <div class=table_avg_title>AVG</div>
                    <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line_2-remove.png" alt="">
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
                    <div class=table_avg_title>AVG</div>
                    <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line-222.png" alt="">
                </div>
                <div class="table_volume">$6 215 1632</div>
            </div>
            <div class="gainer_table body">
                <div class="table_id">2</div>
                <div class="table_name">
                    <img class="table_name_logo" src="@/assets/marketplace/gainer/johnny-logo.svg" alt="">
                    <div class="table_name_title">Impudent Jok</div>
                </div>
                <div class="table_price">146 NMBL</div>
                <div class="table_avg">
                    <div class=table_avg_title>AVG</div>
                    <img class="table_avg_line" src="@/assets/marketplace/lines-chart/line-33.png" alt="">
                </div>
                <div class="table_volume">$4 009 376</div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
    .gainer_content {
        .gainer_title {
            white-space: nowrap;
            font-weight: 400;
            font-size: 60px;
            line-height: 90px;
            display: flex;
            align-items: center;
            // display: grid;
            // grid-template-columns: 0.5fr 1.5fr;
            margin-bottom: 50px;
        }
        .gainer_tables {
            border-radius: 12px;
            .gainer_table {
                cursor: pointer;
                align-items: center;
                background: #000000;
                display: grid;
                grid-template-columns: 0.3fr 2.5fr 2fr 3fr 2fr;
                gap: 15px;
                transition: all 0.5s ease;
                .table_name {
                    align-items: center;
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                }
                .table_avg {
                    display: grid;
                    grid-template-columns: 0.6fr 2fr;
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
                padding: 20px 50px;
                margin-bottom: 30px;
                color: #A9A9B7;
                font-weight: 400;
                font-size: 20px;
                line-height: 21px;
            }
            .body {
                border-radius: 12px;
                // height: 160px;
                padding: 30px 40px;
                font-weight: 400;
                font-size: 38px;
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