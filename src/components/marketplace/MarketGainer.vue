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
                <div class="gainer_table body" v-for="(item, index) in gainerTop" :key="index">
                    <div class="table_id">{{index + 1}}</div>
                    <div class="table_name">
                        <img class="table_name_logo" v-if="index === 0" src="@/assets/community/com1-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 1" src="@/assets/community/com2-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 2" src="@/assets/community/com3-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 3" src="@/assets/community/com4-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 4" src="@/assets/community/com5-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 5" src="@/assets/community/com13-logo.svg" alt="" />
                        <!-- <img class="table_name_logo" :src="`@/assets/marketplace/gainer/${item.logo}.svg`" alt=""> -->
                        <div class="table_name_title">{{item.name}}</div>
                    </div>
                    <div class="table_price active">{{item.price}}</div>
                    <div class="table_avg">{{item.hours}}</div>
                    <div class="table_volume">{{item.volume}}</div>
                </div>
            </div>

            <div v-else>
                <div class="gainer_table body"  v-for="(item, index) in gainerBottom" :key="index">
                    <div class="table_id">{{index + 1}}</div>
                    <div class="table_name">
                        <img class="table_name_logo" v-if="index === 0" src="@/assets/community/com6-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 1" src="@/assets/community/com7-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 2" src="@/assets/community/com8-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 3" src="@/assets/community/com9-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 4" src="@/assets/community/com10-logo.svg" alt="" />
                        <img class="table_name_logo" v-if="index === 5" src="@/assets/community/com11-logo.svg" alt="" />
                        <!-- <img class="table_name_logo" :src="`@/assets/marketplace/gainer/${item.logo}.svg`" alt=""> -->
                        <div class="table_name_title">{{item.name}}</div>
                    </div>
                    <div class="table_price active">{{item.price}}</div>
                    <div class="table_avg loser">{{item.hours}}</div>
                    <div class="table_volume">{{item.volume}}</div>
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
            gainer: true,
            gainerTop: [
                {name: 'Bankless', logo: 'logo_vide_chanel', price: '204 NMBL', hours: '+21.6%', volume: '$7 123 422'},
                {name: 'Johnny Vnice', logo: 'mary-logo', price: '177 NMBL', hours: '+19.9%', volume: '$6 215 163'},
                {name: 'Thunder Mary', logo: 'johnny-logo', price: '150 NMBL', hours: '+17.2%', volume: '$5 817 010'},
                {name: 'Impudent Jok', logo: 'jok-logo', price: '146 NMBL', hours: '+16.8%', volume: '$4 009 376'},
                {name: 'Mr Hawk', logo: 'hawk-logo', price: '142 NMBL', hours: '+15.1%', volume: '$3 109 426'},
                {name: 'Liam Evans', logo: 'evans-logo', price: '139 NMBL', hours: '+14.0%', volume: '$2 995 313'}
            ],
            gainerBottom: [
                {name: 'Bankless', logo: '@/assets/marketplace/gainer/logo_vide_chanel.svg', price: '18 NMBL', hours: '-22%', volume: '$23 422'},
                {name: 'Johnny Vnice', logo: 'mary-logo', price: '20 NMBL', hours: '-19.9%', volume: '$25 163'},
                {name: 'Thunder Mary', logo: '@/assets/marketplace/gainer/johnny-logo.svg', price: '26 NMBL', hours: '-17.2%', volume: '$37 010'},
                {name: 'Impudent Jok', logo: '@/assets/marketplace/gainer/jok-logo.svg', price: '27 NMBL', hours: '-16.8%', volume: '$38 376'},
                {name: 'Mr Hawk', logo: '@/assets/marketplace/gainer/hawk-logo.svg', price: '30 NMBL', hours: '-14.1%', volume: '$40 006'},
                {name: 'Liam Evans', logo: '@/assets/marketplace/gainer/evans-logo.svg', price: '33 NMBL', hours: '-11.5%', volume: '$43 313'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
    .gainer_content {
        margin-bottom: 100px;
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
                padding: 9px 20px;
                cursor: pointer;
                &.active {
                    background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                    backdrop-filter: blur(11.0754px);
                }
                &:first-child {
                    margin-right: 20px;
                }
                .gainer_icon {
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                    &.last {
                        transform: rotate(90deg);
                    }
                }
            }
            .gainer_title {
                font-size: 16px;
            }
        }
        .gainer_tables {
            border-radius: 12px;
            .gainer_table {
                font-size: 16px;
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
                    grid-template-columns: 1fr 4.5fr;
                    &_logo {
                        width: 40px;
                        height: 40px;
                        object-fit: cover;
                        border-radius: 50%;
                    }
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
                font-size: 16px;
                line-height: 21px;
            }
            .body {
                border-radius: 12px;
                font-weight: 400;
                font-size: 16px;
                line-height: 63px;
                
                // &:hover {
                //     transform: scale(1.02);
                // }
            }
        }
    }
}

@media (max-width: 1800px) {
    .gainer_content {
        .gainer_title {
            font-size: 16px;
        }
        .gainer_tables {
            .body {
                font-size: 16px;
            }
        }
    }
}
</style>