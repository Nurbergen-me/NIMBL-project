<template>
    <div>
        <ChartList></ChartList>
        <ChartHistory></ChartHistory>
    </div>
</template>

<script>
import Chart from "chart.js/auto"
import ChartList from "@/components/chart/ChartList.vue"
import ChartHistory from "@/components/chart/ChartHistory.vue"
export default {
    name: 'ChartBuying',
    components: {
        ChartList,
        ChartHistory,
    },
    mounted() {
        this.initChartHistory()
                this.initChartList()
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
                
                gradient.addColorStop(1, colors.purple.half);
                gradient.addColorStop(0.5, colors.purple.own1);
                gradient.addColorStop(0, colors.purple.own2);
            }

            return gradient;
        }
    }
}
</script>

<style>

</style>