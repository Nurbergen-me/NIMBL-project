<template>
    <div class="chart_listing">
        <div class="chart_list_header">
            <div class="header_title"># of Listings</div>
            <div class="header_btns">
                <div class="header_btn" :class="{'active': time === 1}" @click="changeTime(1)">All</div>
                <div class="header_btn" :class="{'active': time === 2}" @click="changeTime(2)">1y</div>
                <div class="header_btn" :class="{'active': time === 3}" @click="changeTime(3)">1m</div>
                <div class="header_btn" :class="{'active': time === 4}" @click="changeTime(4)">1w</div>
                <div class="header_btn" :class="{'active': time === 5}" @click="changeTime(5)">1d</div>
            </div>
        </div>
        <div class="chart_list_body">
            <canvas id="chart_list" class="chart_list"></canvas>
        </div> 
        <div class="chart_list_footer">
            <div class="footer_tab">
                <div class="footer_tab_title">Supply</div>
                <div class="footer_tab_text">10 000</div>
            </div>
            <div class="footer_tab">
                <div class="footer_tab_title">Holders</div>
                <div class="footer_tab_text">4 293</div>
            </div>
            <div class="footer_tab">
                <div class="footer_tab_title">Avg owned</div>
                <div class="footer_tab_text">2.4</div>
            </div>
            <div class="footer_tab">
                <div class="footer_tab_title">Unique holders</div>
                <div class="footer_tab_text">43%</div>
            </div>
        </div> 
    </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
    name: 'ChartList',
    data() {
        return {
            chartList: null,
            time: 3
        }
    },
    watch: {
        '$route.params.name': function(val) {
            if (val === 'chart-page') {
                this.initChartList()
            }
        }
    },
    mounted() {
        this.initChartList()
    },
    methods: {
        changeTime(value) {
            this.time = value
            console.log(this.time, 'time')
        },
        initChartList() {
            console.log('list')
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
                
                // gradient.addColorStop(1, "#EA00D520")
                // gradient.addColorStop(0.2, "#7077E5")
                // gradient.addColorStop(0, "#7077E510")

                // gradient = ctx.createLinearGradient(0, 25, 0, 300);
                // gradient.addColorStop(1, colors.purple.half);
                // gradient.addColorStop(0.35, colors.purple.quarter);
                // gradient.addColorStop(0, colors.purple.zero);

                
                gradient.addColorStop(1, colors.purple.half);
                gradient.addColorStop(0.5, colors.purple.own1);
                gradient.addColorStop(0, colors.purple.own2);
            }

            return gradient;
        }
    }
}
</script>

<style lang="scss" scoped>
.chart_listing {
    width: 100%;
    padding: 20px;
    background: rgba(33, 35, 52, 0.45);
    box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(51.863px);
    border-radius: 6px;
    .chart_list_header {
        display: grid;
        align-items: center;
        grid-template-columns: 200px 400px;
        .header_title {
            font-size: 24px;
            line-height: 34px;
        }
        .header_btns {
            cursor: pointer;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            background: #141C25;
            border: 1px solid #141C25;
            .header_btn {
                text-align: center;
                font-size: 24px;
                line-height: 34px;
                padding: 10px;
                &.active {
                    background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                    backdrop-filter: blur(10px);
                }
            }
        }
    }
    .chart_list_body {
        height: 500px;
        .chart_list {
            height: 500px;
            width: 80%;
        }
    }
    .chart_list_footer {
        display: inline-grid;
        grid-template-columns: 350px 350px 350px 350px;
        gap: 20px;
        .footer_tab {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            border: 2px solid #2E3656;
            &_title {
                font-size: 24px;
                line-height: 34px;
                color: #8A8A8A;
            }
            &_text {
                font-size: 24px;
                line-height: 34px;
            }
        }
    }
}
@media (max-width: 1900px) {
    .chart_listing {
        .chart_list_header {
            .header_title {
                font-size: 20px;
            }
            .header_btns {
                .header_btn {
                    font-size: 20px;
                    padding: 8px;
                }
            }
        }
        .chart_list_footer {
            display: inline-grid;
            grid-template-columns: 280px 280px 280px 280px;
            gap: 15px;
            .footer_tab {
                &_title {
                    font-size: 20px;
                }
                &_text {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>