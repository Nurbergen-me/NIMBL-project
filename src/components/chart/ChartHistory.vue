<template>
    <div class="chart_historing">
        <div class="chart_history_header">
            <div class="header_title">Price history</div>
            <div class="header_btns">
                <div class="header_btn active">All</div>
                <div class="header_btn">1y</div>
                <div class="header_btn">1m</div>
                <div class="header_btn">1w</div>
                <div class="header_btn">1d</div>
            </div>
            <div class="header_select">
                <div class="header_select_text">ETH</div>
                <img src="@/assets/icons/arrow_down.svg" alt="">
            </div> 
        </div>
        <div class="chart_history_body">
            <canvas id="chart_history" class="chart_history"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
    name: 'ChartHistory',
    data() {
        return {
            chartHistory: null
        }
    },
    methods: {
        initChartHistory() {
            console.log('history')
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
                    own2: "rgba(234, 0, 213, 0.1)"
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
        },
    }
}
</script>

<style lang="scss" scoped>
.chart_historing {
    width: 100%;
    padding: 20px;
    background: rgba(33, 35, 52, 0.45);
    box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(51.863px);
    border-radius: 6px;
    .chart_history_header {
        display: grid;
        align-items: center;
        grid-template-columns: 200px 400px 120px;
        gap: 20px;
        .header_title {
            font-size: 16px;
        }
        .header_btns {
            cursor: pointer;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            background: #141C25;
            border: 1px solid #141C25;
            .header_btn {
                text-align: center;
                font-size: 16px;
                padding: 10px;
                &.active {
                    background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                    backdrop-filter: blur(10px);
                }
            }
        }
        .header_select {
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #141C25;
            border: 1px solid #141C25;
            &_text {
                font-size: 16px;
            }
        }
    }
    .chart_history_body {
        // width: 100%;
        height: 500px;
        canvas {
            width: 0
        }
    }
}
// @media (max-width: 1900px) {
//     .chart_historing {
//         .chart_history_header {
//             .header_title {
//                 font-size: 16px;
//             }
//             .header_btns {
//                 .header_btn {
//                     font-size: 16px;
//                     padding: 8px;
//                 }
//             }
//             .header_select {
//                 &_text {
//                     font-size: 16px;
//                 }
//             }
//         }
//         .chart_list_footer {
//             display: inline-grid;
//             grid-template-columns: 280px 280px 280px 280px;
//             gap: 15px;
//             .footer_tab {
//                 &_title {
//                     font-size: 16px;
//                 }
//                 &_text {
//                     font-size: 16px;
//                 }
//             }
//         }
//     }
// }
</style>