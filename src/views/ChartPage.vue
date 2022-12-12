<template>
    <div class="chart_page">
        <div class="header_content">
            <div class="header_img">
                <img
                    class="header_svg"
                    src="@/assets/chart/chart_header.svg"
                    alt=""
                />
            </div>
            <div class="header_titles">
                <div class="header_title">HUGO x IO #347</div>
                <div class="header_username">@Bankless</div>
                <div class="header_text">
                    Brief description of the channel - dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard. We need to independently investigate
                    the information about the creator, legitimacy or
                    authenticity. Make a purchase only if you agree with the
                    risks involved.
                </div>
                <div class="header_tabs">
                    <div class="header_tab" :class="{'active': tabs === 1}" @click="toggleTabs(1)">
                        <div class="header_tab_title">41 NMBL</div>
                        <div class="header_tab_text">Floor Price</div>
                    </div>
                    <div class="header_tab" :class="{'active': tabs === 2}" @click="toggleTabs(2)">
                        <div class="header_tab_title">500k</div>
                        <div class="header_tab_text">Members</div>
                    </div>
                    <div class="header_tab" :class="{'active': tabs === 3}" @click="toggleTabs(3)">
                        <div class="header_tab_title">8%</div>
                        <div class="header_tab_text">Listings</div>
                    </div>
                </div>
                <div class="header_buttons">
                    <div class="header_button" :class="{'active': buttonActive === 1}" @click="toggleBtn(1)">BUY NOW</div>
                    <div class="header_button" :class="{'active': buttonActive === 2}" @click="toggleBtn(2)">MAKE OFFER
                </div>
                <div class="header_self" @click="initFunc()">sell nft</div>
            </div>
        </div>
        </div>

        <ChartList></ChartList>
        <ChartHistory></ChartHistory>

        <div class="activity_content">
            <div class="activity_headers">
                <div class="activity_header">Activity</div>
                <div class="activity_select">
                    <div class="activity_select_text">All Categories</div>
                    <img style="margin-left: 10px; margin-top: 5px;" src="@/assets/icons/arrow_down.svg" alt="">
                </div>
            </div>
            <div class="activity_tables">
                <div class="activity_table header">
                    <div class="event">Event</div>
                    <div class="price">Price</div>
                    <div class="from">From</div>
                    <div class="to">To</div>
                    <div class="date">Date</div>
                </div>
                <div class="activity_table body" v-for="(item, index) in tables" :key="index">
                    <div class="event">
                        <img style="margin-right: 10px;" src="@/assets/chart/sales-icon.svg" alt="">
                        <div class="event_text">{{item.event}}</div>
                    </div>
                    <div class="price">{{item.price}}</div>
                    <div class="from">@{{item.from}}</div>
                    <div class="to">@{{item.to}}</div>
                    <div class="date">{{item.date}}</div>
                </div>
            </div>
        </div> 

    </div>
</template>

<script>
import Chart from "chart.js/auto"
import ChartList from "@/components/chart/ChartList.vue"
import ChartHistory from "@/components/chart/ChartHistory.vue"
export default {
    name: "ChartPage",
    components: {
        ChartList,
        ChartHistory,
    },
    data() {
        return {
            tabs: 1,
            buttonActive: 1,
            chartList: null,
            tables: [
                {event: 'sales', logo: 'sales-icon', price: '0.051 ETH', from: 'Bankless', to: '3141', date: '1 hours ago'},
                {event: 'mints', logo: 'minst-icon', price: '0.068 ETH', from: 'Eforise', to: 'Alwon', date: '4 hours ago'},
                {event: 'listing', logo: 'list-icon', price: '0.48 ETH', from: 'Jor88', to: 'MarryKS', date: '5 hours ago'},
                {event: 'listing', logo: 'list-icon', price: '0.66 ETH', from: 'FrezzyDo', to: 'MathGeny', date: '11 hours ago'},
                {event: 'mints', logo: 'mints-icon', price: '0.88 ETH', from: 'Danatello', to: 'MikesKing', date: '1 days ago'},
                {event: 'sales', logo: 'sales-icon', price: '1.7 ETH', from: 'Hirogo Doalino', to: 'Kingsman7', date: '1 days ago'},
            ]
        }
    },
    mounted() {
        this.initChartHistory()
        this.initChartList()
    },
    methods: {
        initChartHistory() {
            const graph = [30,31,35,40,50,35,34,20,25,22,40,42,46,49,48,20,25,30,25,30,35,44,35]
            Chart.defaults.font.size = 25
            const ctx = document.getElementById("chart_history");
            this.chartHistory = new Chart(ctx.getContext("2d"), {
                type: "line",
                data: {
                    labels: [2020,2021,2023,2021,2023,2021,2023,2021,2023,2021,2023],
                    datasets: [
                        {
                            data: graph,
                            fill: true,
                            tension: 0.1,
                            borderColor: (context) => {
                                const chart = context.chart
                                const { ctx, chartArea } = chart

                                if (!chartArea) {
                                    return
                                }
                                return this.getGradient(ctx, chartArea)
                            },
                            backgroundColor: (context) => {
                                const chart = context.chart
                                const { ctx, chartArea } = chart

                                if (!chartArea) {
                                    return
                                }
                                return this.getGradientBg(ctx, chartArea)
                            }
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            beginAtZero: true,
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                callback: function(val, index) {
                                    return index % 5 === 0 ? this.getLabelForValue(val) : '';
                                },
                                color: '#8F8F8F',
                                padding: 30
                            },
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            ticks: {
                                callback: function(val, index) {
                                    return index % 2 === 0 ? this.getLabelForValue(val) : '';
                                },
                                color: '#8F8F8F',
                                padding: 30
                            },
                            grid: {
                                color: (context) => {
                                    return "#2E3656";
                                },
                            }
                        }
                    }
                }
            })
            this.chartHistory.update();
        },
        initChartList() {
            const graph = [20, 55, 20, 45, 50, 20, 58, 60, 40,50, 20, 68, 60, 40, 20, 25, 30, 20, 50, 51]
            Chart.defaults.font.size = 25
            const ctx = document.getElementById("chart_list");
            this.chartList = new Chart(ctx.getContext("2d"), {
                type: "line",
                data: {
                    labels: graph,
                    datasets: [
                        {
                            data: graph,
                            fill: true,
                            borderColor: (context) => {
                                const chart = context.chart
                                const { ctx, chartArea } = chart

                                if (!chartArea) {
                                    return
                                }
                                return this.getGradient(ctx, chartArea)
                            },
                            backgroundColor: (context) => {
                                const chart = context.chart
                                const { ctx, chartArea } = chart

                                if (!chartArea) {
                                    return
                                }
                                return this.getGradientBg(ctx, chartArea)
                            }
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            beginAtZero: true,
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                display: false,
                            }
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            ticks: {
                                callback: function(val, index) {
                                    return index % 2 === 0 ? this.getLabelForValue(val) : '';
                                },
                                color: '#8F8F8F',
                                padding: 30
                            },
                            grid: {
                                color: (context) => {
                                    return "#2E3656";
                                }
                            }
                        }
                    }
                }
            })
            this.chartList.update();
        },
        getGradient(ctx, chartArea) {
            let width, height, gradient;
            const chartWidth = chartArea.right - chartArea.left;
            const chartHeight = chartArea.bottom - chartArea.top;
            if ( !gradient || width !== chartWidth || height !== chartHeight) {
                width = chartWidth
                height = chartHeight
                gradient = ctx.createLinearGradient( 0, chartArea.bottom, 0, chartArea.top )
                gradient.addColorStop(0, "#00EAF2")
                gradient.addColorStop(0.5, "#00EAF2")
                gradient.addColorStop(1, "#EA00D5")
            }

            return gradient;
        },
        getGradientBg(ctx, chartArea) {
            const colors = {
                purple: {
                    default: "rgba(149, 76, 233, 1)",
                    half: "rgba(149, 76, 233, 0.5)",
                    quarter: "rgba(149, 76, 233, 0.25)",
                    zero: "rgba(149, 76, 233, 0)",
                    own1: "rgba(234, 0, 213, 0.2)",
                    own2: "rgba(234, 0, 213, 0.1)",
                    own3: "blur(22.5px)"
                },
                indigo: {
                    default: "rgba(80, 102, 120, 1)",
                    quarter: "rgba(80, 102, 120, 0.25)"
                }
            };

            let width, height, gradient;
            const chartWidth = chartArea.right - chartArea.left;
            const chartHeight = chartArea.bottom - chartArea.top;
            if ( !gradient || width !== chartWidth || height !== chartHeight) {
                width = chartWidth
                height = chartHeight
                gradient = ctx.createLinearGradient( 0, chartArea.bottom, 0, chartArea.top )
                
                gradient.addColorStop(1, colors.purple.half);
                gradient.addColorStop(0.5, colors.purple.own1);
                gradient.addColorStop(0, colors.purple.own2);
            }

            return gradient;
        }
    }
};
</script>


<style lang="scss" scoped>
@media (max-width: 5000px) {
    .chart_page {
        padding: 10px;
        width: 100%;
        height: 100%;
        .header_content {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 50px;
            .header_img {
                // width: 50%;
                margin-right: 20px;
                .header_svg {
                    width: 600px;
                    height: fit-content;
                    object-fit: cover;
                }
            }
            .header_titles {
                .header_title {
                    font-size: 22px;
                    margin-bottom: 10px;
                }
                .header_username {
                    font-size: 20px;
                    margin-bottom: 15px;
                }
                .header_text {
                    width: 90%;
                    font-size: 20px;
                    margin-bottom: 30px;
                }
                .header_tabs {
                    display: inline-grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 15px;
                    margin-bottom: 30px;
                    .header_tab {
                        transition: all 0.3s ease;
                        cursor: pointer;
                        padding: 10px 20px;
                        text-align: center;
                        background: rgba(255, 255, 255, 0.05);
                        box-shadow: inset 3.5875px 3.5875px 24.2156px rgba(255, 255, 255, 0.04);
                        backdrop-filter: blur(46.5146px);
                        &_title {
                            font-size: 20px;
                        }
                        &_text {
                            font-size: 20px;
                            color: #fff;
                        }
                        &.active {
                            background: linear-gradient(
                                89.93deg,
                                #01eaf2 13.97%,
                                #3b65ff 63.27%,
                                #d70bda 103%
                            );
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        &:hover {
                            transform: scale(1.05);
                        }
                    }
                }
                .header_buttons {
                    display: grid;
                    grid-template-columns: 270px 270px;
                    gap: 20px;
                    margin-bottom: 30px;
                    .header_button {
                        transition: all 0.3s ease;
                        cursor: pointer;
                        padding: 20px 40px;
                        text-align: center;
                        font-size: 20px;
                        background: linear-gradient(
                            270deg,
                            rgba(234, 0, 213, 0.4) -75%,
                            rgba(61, 94, 255, 0.4) 48.86%,
                            rgba(0, 234, 242, 0.4) 158.33%
                        );
                        border-radius: 6px;
                        &.active {
                            background: linear-gradient(
                                106.95deg,
                                rgba(1, 167, 255, 0.8) 0.4%,
                                rgba(255, 0, 245, 0.8) 103.58%
                            );
                            box-shadow: inset 3.92079px 5.70296px 11.7624px
                                rgba(255, 255, 255, 0.11);
                            backdrop-filter: blur(33.1485px);
                        }
                        &:hover {
                            transform: scale(1.05);
                        }
                    }
                }
                .header_self {
                    cursor: pointer;
                    text-transform: uppercase;
                    position: relative;
                    width: fit-content;
                    font-size: 20px;
                    padding-bottom: 5px;
                    &:after {
                        position: absolute;
                        content: "";
                        width: 100px;
                        height: 2px;
                        background: #fff;
                        bottom: 0;
                        left: -1%;
                    }
                }
            }
        }
        .chart_price {
            width: 100%;
            height: 800px;
        }
        
        .activity_content {
            width: 100%;
            padding: 20px 50px;
            background: #171C2D;
            .activity_headers {
                display: inline-flex;
                align-items: center;
                margin-bottom: 20px;
                .activity_header {
                    font-size: 18px;
                    margin-right: 50px;
                }
                .activity_select {
                    cursor: pointer;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #141C25;
                    border: 1px solid #00EAF2;
                    &_text {
                       font-size: 18px;
                    }
                }
            }
            .activity_tables {
                .activity_table {
                    // text-align: center;
                    cursor: pointer;
                    align-items: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    gap: 15px;
                    transition: all 0.5s ease;
                    .event {
                        display: flex;
                        align-items: center;
                    }
                }
                .header {
                    height: 48px;
                    font-size: 18px;
                    margin-bottom: 20px;
                }
                .body {
                    height: 58px;
                    font-size: 18px;
                }
            }
        }
        & > *:not(:last-child) {
            margin-bottom: 50px;
        }
    }
}
// @media (max-width: 1900px) {
//     .chart_page {
//         .header_content {
//             .header_img {
//                 .header_svg {
//                     width: 600px;
//                 }
//             }
//             .header_titles {
//                 .header_title {
//                     font-size: 40px;
//                 }
//                 .header_username {
//                     font-size: 40px;
//                 }
//                 .header_text {
//                     font-size: 22px;
//                 }
//                 .header_buttons {
//                     display: grid;
//                     grid-template-columns: 330px 330px;
//                     gap: 15px;
//                     .header_button {
//                         padding: 15px 30px;
//                         font-size: 22px;
//                     }
//                 }
//                 .header_self {
//                     font-size: 20px;
//                     &:after {
//                         width: 110px;
//                     }
//                 }
//             }
//         }
//         .activity_content {
//             .activity_headers {
//                 .activity_header {
//                     font-size: 20px;
//                 }
//                 .activity_select {
//                     &_text {
//                         font-size: 20px;
//                     }
//                 }
//             }
//             .activity_tables {
//                 .activity_table {

//                 }
//                 .header {
//                     height: 38px;
//                     font-size: 20px;
//                 }
//                 .body {
//                     height: 48px;
//                     font-size: 25px;
//                 }
//             }
//         }
//     }
// }
// @media (max-width: 1600px) {
//     .chart_page {
//         .header_content {
//             .header_img {
//                 .header_svg {
//                     width: 500px;
//                 }
//             }
//             .header_titles {
//                 .header_title {
//                     font-size: 35px;
//                 }
//                 .header_username {
//                     font-size: 31px;
//                 }
//                 .header_text {
//                     width: 90%;
//                     font-size: 20px;
//                 }
//                 .header_tabs {
//                     margin-bottom: 25px;
//                     .header_tab {
//                         padding: 10px 20px;
//                         &_title {
//                             font-size: 20px;
//                         }
//                         &_text {
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .header_buttons {
//                     display: grid;
//                     grid-template-columns: 200px 200px;
//                     gap: 15px;
//                     margin-bottom: 20px;
//                     .header_button {
//                         padding: 10px 20px;
//                         font-size: 20px;
//                     }
//                 }
//                 .header_self {
//                     font-size: 16px;
//                     &:after {
//                         width: 80px;
//                     }
//                 }
//             }
//         }
//         .activity_content {
//             padding: 15px 40px;
//             .activity_headers {
//                 .activity_header {
//                     font-size: 20px;
//                 }
//                 .activity_select {
//                     &_text {
//                         font-size: 20px;
//                     }
//                 }
//             }
//             .activity_tables {
//                 .header {
//                     height: 38px;
//                     font-size: 18px;
//                 }
//                 .body {
//                     height: 48px;
//                     font-size: 20px;
//                 }
//             }
//         }
//     }
// }
</style>