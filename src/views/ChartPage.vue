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
        <!-- <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/> -->
        <!-- <apexchart type="candlestick" height="350" :options="chartOptions" :series="series"></apexchart> -->
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
                <div class="activity_table body">
                    <div class="event">
                        <img style="margin-right: 10px;" src="@/assets/chart/sales-icon.svg" alt="">
                        <div class="event_text">Sales</div>
                    </div>
                    <div class="price">0.051 ETH</div>
                    <div class="from">@Bankless</div>
                    <div class="to">@3141</div>
                    <div class="date">1 hour ago</div>
                </div>
            </div>
        </div> 

    </div>
</template>

<script>
import Chart from "chart.js/auto";
import ApexCharts from 'apexcharts'
import CanvasJSChart from '@/chart/CanvasJSVueComponent.vue';
import ChartList from "@/components/chart/ChartList.vue"
import ChartHistory from "@/components/chart/ChartHistory.vue"
export default {
    name: "ChartPage",
    components: {
        ApexCharts,
        ChartList,
        ChartHistory,
        CanvasJSChart
    },
    data() {
        return {
            tabs: 1,
            buttonActive: 1,
            chart: null,
            options: {
                // exportEnabled: true,
                // title:{
                //     text:"Technical Indicators: SMA",
                //     fontFamily: "Arial, sans-serif"
                // },
                // subtitles: [{
                //     text:"Simple Moving Average",
                //     fontFamily: "Arial, sans-serif"
                // }],
                // axisY: {
                //     title: "Price in USD",
                //     prefix: "$"
                // },
                // axisX: {
                //     valueFormatString: "MMM D",
                // },
                toolTip: {
                    shared: false
                },
                // legend: {
                //     cursor: "pointer",
                //     dockInsidePlotArea: "inside",
                //     itemclick: this.toggleDataSeries
                // },
                data: [{
                    type: "candlestick",
                    showInLegend: true,
                    name: "Stock Price",
                    // yValueFormatString: "$#,###.00",
                    // xValueType: "dateTime",
                    dataPoints: [
                    { x: new Date(2022, 0, 1), y: [511.91037, 527.352722, 511.903534, 527.352722] },
                    { x: new Date(2022, 0, 2), y: [527.291626, 533.371033, 518.75354, 531.396667] },
                    { x: new Date(2022, 0, 3), y: [531.388855, 532.095581, 510.652161, 512.135986] },
                    { x: new Date(2022, 0, 4), y: [512.13031, 519.70166, 503.215363, 507.506104] },
                    { x: new Date(2022, 0, 5), y: [507.597809, 515.239197, 462.057556, 475.056946] },
                    { x: new Date(2022, 0, 6), y: [475.079071, 481.062836, 460.248505, 473.275604] },
                    { x: new Date(2022, 0, 7), y: [473.000061, 474.296204, 439.26001, 447.788483] },
                    { x: new Date(2022, 0, 8), y: [447.856812, 458.483795, 419.195465, 430.246155] },
                    { x: new Date(2022, 0, 9), y: [430.253113, 444.493256, 428.239502, 438.80307] },
                    { x: new Date(2022, 0, 10), y: [438.785645, 445.036163, 408.698792, 424.933777] },
                    { x: new Date(2022, 0, 11), y: [424.891205, 467.281067, 422.000916, 463.518311] },
                    { x: new Date(2022, 0, 12), y: [463.562744, 489.327301, 457.116119, 487.007416] },
                    { x: new Date(2022, 0, 13), y: [487.042572, 488.211243, 467.87561, 475.029114] },
                    { x: new Date(2022, 0, 14), y: [475.127197, 491.660645, 468.939606, 489.867432] },
                    { x: new Date(2022, 0, 15), y: [489.917999, 501.311127, 486.305908, 494.988068] },
                    { x: new Date(2022, 0, 16), y: [494.924103, 505.300964, 489.502136, 498.427917] },
                    { x: new Date(2022, 0, 17), y: [498.506165, 498.943909, 468.576508, 475.709869] },
                    { x: new Date(2022, 0, 18), y: [475.73642, 479.662109, 458.152466, 472.005066] },
                    { x: new Date(2022, 0, 19), y: [471.917206, 472.774292, 454.758606, 462.822083] },
                    { x: new Date(2022, 0, 20), y: [462.856964, 478.353943, 439.978058, 440.005432] },
                    { x: new Date(2022, 0, 21), y: [440.067139, 444.180237, 376.770172, 383.073914] },
                    { x: new Date(2022, 0, 22), y: [383.474548, 388.911987, 340.05481, 358.096161] },
                    { x: new Date(2022, 0, 23), y: [358.326599, 388.593903, 357.170654, 383.93396] },
                    { x: new Date(2022, 0, 24), y: [384.040619, 384.040619, 337.853943, 371.368958] },
                    { x: new Date(2022, 0, 25), y: [371.386841, 387.176849, 358.083557, 384.619354] },
                    { x: new Date(2022, 0, 26), y: [384.586243, 400.152069, 367.575104, 375.755463] },
                    { x: new Date(2022, 0, 27), y: [375.542175, 391.804382, 360.331696, 390.088287] },
                    { x: new Date(2022, 0, 28), y: [390.000671, 393.37558, 376.752167, 386.084381] },
                    { x: new Date(2022, 0, 29), y: [386.065735, 396.772278, 381.683777, 389.132782] },
                    { x: new Date(2022, 0, 30), y: [389.202209, 389.247192, 373.036285, 377.612915] },
                    { x: new Date(2022, 0, 31), y: [377.648987, 384.977386, 366.11203, 375.277313] }
                    ]
                }]
            },
            styleOptions: {
                width: "100%",
                height: "360px"
            },

            //--
            series: [{
            name: 'candle',
            data: [
              {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
              },
              {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
              },
              {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
              },
              {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
              },
              {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
              },
              {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
              },
              {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
              },
              {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
              },
              {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
              },
              {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
              },
              {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
              },
              {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
              },
              {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
              },
              {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
              },
              {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
              },
              {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
              },
              {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
              },
              {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
              },
              {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
              },
              {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
              },
              {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
              },
              {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
              },
              {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
              },
              {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
              },
              {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
              },
              {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
              },
              {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
              },
              {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
              },
              {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
              },
              {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
              },
              {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
              },
              {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
              },
              {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
              },
              {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
              },
              {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
              },
              {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
              },
              {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
              },
              {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
              },
              {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
              },
              {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
              },
              {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
              },
              {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
              },
              {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
              },
              {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
              },
              {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
              },
              {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
              },
              {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
              },
              {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
              },
              {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
              },
            ]
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'candlestick',
                },
                title: {
                    text: 'CandleStick Chart - Category X-axis',
                    align: 'left'
                },
                annotations: {
                    xaxis: [
                        {
                        x: 'Oct 06 14:00',
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                            },
                            orientation: 'horizontal',
                            offsetY: 7,
                            text: 'Annotation Test'
                        }
                        }
                    ]
                },
                tooltip: {
                    enabled: true,
                },
                xaxis: {
                type: 'category',
                    labels: {
                        formatter: function(val) {
                            return dayjs(val).format('MMM DD HH:mm')
                        }
                    }
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            },
            //---

            one: null,
            two: null
        }
    },
    watch: {
        one: function(val) {
            console.log(val)
        }
    },
    mounted() {
        console.log('mounted')
        this.init2()
    },
    methods: {
        toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        },
        toggleBtn(val) {
            this.buttonActive = val
            console.log(this.buttonActive)
        },
        toggleTabs(val) {
            this.tabs = val
            console.log(this.tabs)
        },
        calculateSMA(dps, period){
            let avg = function(dps) {
                let sum = 0, period = 0, val;
                for (let i = 0; i < dps.length; i++) {
                val = dps[i].y[3]; sum += val; period++;
                }
                return sum / period;
            };
            let result = [], val;
            period = period || 5;
            for (let i=0; i < period; i++)
                result.push({ x: dps[i].x , y: null});
            for (let i=period - 1, len=dps.length; i < len; i++) {
                val = avg(dps.slice(i - period + 1, i));
                if (isNaN(val))
                    result.push({ x: dps[i].x, y: null});
                else
                    result.push({ x: dps[i].x, y: val});
            }
            return result;
        },
        chartInstance(chart) {
            this.chart = chart;
            let sma = this.calculateSMA(this.options.data[0].dataPoints, 7);
            this.chart.addTo("data", {
                type: "line",
                // showInLegend: true, 
                // markerSize: 0,
                // yValueFormatString: "$#,###.00", 
                // name: "Simple Moving Average",
                dataPoints: sma
            })
        },
        init() {
            const ctx = document.getElementById('one')
            this.one = new Chart(ctx.getContext("2d"), {
                type: 'line',
                data: {
                    labels: [1,2],
                    datasets: [
                        {
                            label: 'helllo',
                            data: [1,2],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }
                    ]
                }
            })
            
            console.log(ctx, this.one)
            this.one.update()
            this.init2()
            console.log('end')
        },
        init2() {

            console.log('begin')
            const ctx = document.getElementById('two')
            console.log(ctx)
            this.one = new Chart(ctx.getContext("2d"), {
                type: 'line',
                data: {
                    labels: [1,2],
                    datasets: [
                        {
                            label: 'helllo',
                            data: [1,2],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }
                    ]
                }
            })
            this.one.update()
        }
    },
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
                    width: 700px;
                    object-fit: cover;
                }
            }
            .header_titles {
                .header_title {
                    font-size: 45px;
                    line-height: 70px;
                    margin-bottom: 10px;
                }
                .header_username {
                    font-size: 35px;
                    line-height: 56px;
                    margin-bottom: 15px;
                }
                .header_text {
                    width: 90%;
                    font-size: 25px;
                    line-height: 42px;
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
                        padding: 20px 30px;
                        text-align: center;
                        background: rgba(255, 255, 255, 0.05);
                        box-shadow: inset 3.5875px 3.5875px 24.2156px
                            rgba(255, 255, 255, 0.04);
                        backdrop-filter: blur(46.5146px);
                        &_title {
                            font-size: 24px;
                            line-height: 36px;
                        }
                        &_text {
                            font-size: 20px;
                            line-height: 118%;
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
                    grid-template-columns: 380px 380px;
                    gap: 20px;
                    margin-bottom: 30px;
                    .header_button {
                        transition: all 0.3s ease;
                        cursor: pointer;
                        padding: 20px 40px;
                        text-align: center;
                        font-size: 30px;
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
                    font-size: 25px;
                    line-height: 28px;
                    padding-bottom: 5px;
                    &:after {
                        position: absolute;
                        content: "";
                        width: 130px;
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
                    font-size: 24px;
                    line-height: 34px;
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
                       font-size: 24px;
                        line-height: 34px; 
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
                    font-size: 25px;
                    line-height: 35px;
                    margin-bottom: 20px;
                }
                .body {
                    height: 58px;
                    font-size: 30px;
                    line-height: 42px;
                }
            }
        }
        & > *:not(:last-child) {
            margin-bottom: 50px;
        }
    }
}
@media (max-width: 1900px) {
    .chart_page {
        .header_content {
            .header_img {
                .header_svg {
                    width: 600px;
                }
            }
            .header_titles {
                .header_title {
                    font-size: 40px;
                }
                .header_username {
                    font-size: 40px;
                }
                .header_text {
                    font-size: 22px;
                }
                .header_buttons {
                    display: grid;
                    grid-template-columns: 330px 330px;
                    gap: 15px;
                    .header_button {
                        padding: 15px 30px;
                        font-size: 22px;
                    }
                }
                .header_self {
                    font-size: 20px;
                    &:after {
                        width: 110px;
                    }
                }
            }
        }
        .activity_content {
            .activity_headers {
                .activity_header {
                    font-size: 20px;
                }
                .activity_select {
                    &_text {
                        font-size: 20px;
                    }
                }
            }
            .activity_tables {
                .activity_table {

                }
                .header {
                    height: 38px;
                    font-size: 20px;
                }
                .body {
                    height: 48px;
                    font-size: 25px;
                }
            }
        }
    }
}
@media (max-width: 1600px) {
    .chart_page {
        .header_content {
            .header_img {
                .header_svg {
                    width: 500px;
                }
            }
            .header_titles {
                .header_title {
                    font-size: 35px;
                    line-height: 35px;
                }
                .header_username {
                    font-size: 31px;
                    line-height: 30px;
                }
                .header_text {
                    width: 90%;
                    font-size: 20px;
                    line-height: 30px;
                }
                .header_tabs {
                    margin-bottom: 25px;
                    .header_tab {
                        padding: 10px 20px;
                        &_title {
                            line-height: 20px;
                            font-size: 20px;
                        }
                        &_text {
                            font-size: 18px;
                        }
                    }
                }
                .header_buttons {
                    display: grid;
                    grid-template-columns: 200px 200px;
                    gap: 15px;
                    margin-bottom: 20px;
                    .header_button {
                        padding: 10px 20px;
                        font-size: 20px;
                    }
                }
                .header_self {
                    font-size: 16px;
                    &:after {
                        width: 80px;
                    }
                }
            }
        }
        .activity_content {
            padding: 15px 40px;
            .activity_headers {
                .activity_header {
                    font-size: 20px;
                }
                .activity_select {
                    &_text {
                        font-size: 20px;
                    }
                }
            }
            .activity_tables {
                .header {
                    height: 38px;
                    font-size: 18px;
                }
                .body {
                    height: 48px;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>