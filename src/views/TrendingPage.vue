<template>
    <Chart :options="{ theme: 'dark', height: 400}" />
</template>

<script>
import { Chart,CryptoMarket, Snaps, Screener } from 'vue-tradingview-widgets';
export default {
    name: 'TrendingPage',
    components: {
    Chart,
    CryptoMarket,
    Screener,
    Snaps,
  },
}
</script>

<style scoped>

.sma-legend {
	width: 96px;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 14px;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 1000;
	pointer-events: none;
}
</style>