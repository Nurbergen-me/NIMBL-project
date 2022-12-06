<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
</template>

<script>
  import CanvasJSChart from '@/components/chart/ChartTrending.vue"';
  export default {
    components: {
      CanvasJSChart
    },
    data() {
      return {
        chart: null,
        options: {
          exportEnabled: true,
          title:{
            text:"Technical Indicators: SMA",
            fontFamily: "Arial, sans-serif"
          },
          subtitles: [{
            text:"Simple Moving Average",
            fontFamily: "Arial, sans-serif"
          }],
          axisY: {
            title: "Price in USD",
            prefix: "$"
          },
          axisX: {
            valueFormatString: "MMM D",
          },
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            dockInsidePlotArea: "inside",
            itemclick: this.toggleDataSeries
          },
          data: [{
            type: "candlestick",
            showInLegend: true,
            name: "Stock Price",
            yValueFormatString: "$#,###.00",
            xValueType: "dateTime",
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
        }
      }
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
                showInLegend: true, 
                markerSize: 0,
                yValueFormatString: "$#,###.00", 
                name: "Simple Moving Average",
                dataPoints: sma
            });
        }
    }
  }
</script>
