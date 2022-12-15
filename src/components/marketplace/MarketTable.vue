<template>
    <div class="table_content">
        <div class="table_inner">
            <div class="table_content_inner">
                <div class="sidebar_sort">
                    <div class="sort_byCategory">
                        <img class="byCategory_svg" style="margin-right: 20px;" src="@/assets/icons/top-creator-icon.svg" alt="">
                        <div class="byCategory_text">Top Creators</div>
                        <img class="byCategory_icon" src="@/assets/icons/arrow_down.svg" alt="" />
                    </div>
                    <div class="sort_byDate">
                        <div class="date" :class="{'active': sort === 1}" @click="changeSort(1)">1d</div>
                        <div class="date" :class="{'active': sort === 2}" @click="changeSort(2)">1w</div>
                        <div class="date" :class="{'active': sort === 3}" @click="changeSort(3)">1m</div>
                        <div class="date" :class="{'active': sort === 4}" @click="changeSort(4)">1y</div>
                        <div class="date" :class="{'active': sort === 5}" @click="changeSort(5)">All</div>
                    </div>
                    <div class="sort_byCategory">
                        <div class="byCategory_text">All Categories</div>
                        <img class="byCategory_icon" src="@/assets/icons/arrow_down.svg" alt="" />
                    </div>
                    <div class="header_tabs">
                        <div class="header_tab" :class="{'active': view === 1}" @click="view = 1">View as List</div>
                        <div class="header_tab" :class="{'active': view === 2}" @click="view = 2">View as Grid</div>
                    </div>
                </div>
            </div>

            <div class="tables" v-if="view === 1">
                <div class="table header">
                    <div class="table_img"></div>
                    <div class="title_content">Ranking</div>
                    <div class="tag_content">Level</div>
                    <div class="level_content">Categories</div>
                    <div class="listing_content">The # of Listings</div>
                    <div class="price_content">Floor Price:</div>
                    <div class="community_content">Community Size</div>
                    <div class="total_content">Total Volume</div>
                </div>
                <div class="table table_body" v-for="(item, index) in tables" :key="index" @click="$router.push({name: 'card-buying'})">
                    <img class="table_img" src="@/assets/marketplace/chanel_logo.svg" alt="">
                    <div class="title_content">
                        <div class="rang">{{item.rank}}</div>
                        <div class="nike">@{{item.name}}</div>
                    </div>
                    <div class="level_content">{{item.level}} creator</div>
                    <div class="tag_content">
                        <div class="tag" v-for="(tag, indexTag) in item.tags" :key="indexTag">{{tag}}</div>
                    </div>
                    <div class="listing_content">{{item.list}}</div>
                    <div class="price_content">{{item.price}}</div>
                    <div class="listing_content">{{item.size}}</div>
                    <div class="price_content">1{{item.volume}}</div>
                </div>
            </div>

            <div class="ranking_boxs" v-if="view === 2">
                <div class="simple" v-for="item in 5" :key="item">
                    <div class="second">
                        <div class="box_header">
                            <img class="video_box_img" src="@/assets/icons/video-path-clip.svg" alt="">
                            <!-- <img class="video_box_img" src="@/assets/marketplace/denziel-icon.svg" alt=""> -->
                            <div class="video_pause">
                                <img class="video_box_pause" src="@/assets/marketplace/pause_2.svg" alt="">
                            </div>
                        </div>
                        <div class="box_body">
                            <div class="box_title">@BlueWard2</div>
                            <div class="box_buttons">
                                <div class="box_button">
                                    <div class="count">500K</div>
                                    <div class="box_button_footer">members</div>
                                </div>
                                <div class="box_button">
                                    <div class="box_button_title">134 NMBL</div>
                                    <div class="box_button_footer">floor price</div>
                                </div>
                            </div>
                            <div class="tag_content">
                                <div class="tag">#ETH-NFT</div>
                                <div class="tag">#NFT-Trading</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarketTable',
    data() {
        return {
            tableSelect: 1,
            sort: 1,
            view: 1,
            tables: [
                {name: 'Tim.Cooks', logo: 'chanel_logo.svg', level: 14, rank: 'Rank 2', tags: ['#ETH-NFT', '#NFT-Trading', '#NFT-New'], list: '480/4022', price: '40 NMBL', size: '6000', volume: '144k NMBL'},
                {name: 'Andrew.Tabs', logo: 'chanel_logo.svg', level: 17, rank: 'Rank 4', tags: ['#ETH-NFT', '#NFT-King', '#NFT-Price'], list: '522/4030', price: '47 NMBL', size: '6750', volume: '147k NMBL'},
                {name: 'Jhoo.Silvas', logo: 'chanel_logo.svg', level: 20, rank: 'Rank 5', tags: ['#ETH-NFT', '#NFT-Green', '#NFT-Color'], list: '530/4035', price: '48 NMBL', size: '6820', volume: '153k NMBL'},
                {name: 'Maga.Simple', logo: 'chanel_logo.svg', level: 23, rank: 'Rank 7', tags: ['#ETH-NFT', '#NFT-Kong', '#NFT-Kang'], list: '544/4073', price: '52 NMBL', size: '6944', volume: '158k NMBL'},
                {name: 'Samaro.Tens', logo: 'chanel_logo.svg', level: 25, rank: 'Rank 10', tags: ['#ETH-NFT', '#NFT-Yoo', '#NFT-Size'], list: '558/4105', price: '55 NMBL', size: '7028', volume: '162k NMBL'},
                {name: 'Sim.Colo', logo: 'chanel_logo.svg', level: 29, rank: 'Rank 12', tags: ['#ETH-NFT', '#NFT-Simple', '#NFT-Width'], list: '670/4220', price: '58 NMBL', size: '7103', volume: '168k NMBL'},

            ]
        }
    },
    methods: {
        changeSort(value) {
            this.sort = value
            console.log(this.sort)
        }
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 5000px) {
    .table_content {
        position: relative;
        margin-bottom: 100px;
    }

    .table_inner {
        .table_content_inner {
            .sidebar_sort {
                display: flex;
                align-items: center;
                height: 63px;
                margin-bottom: 30px;
                cursor: pointer;
                    
                .sort_byDate {
                    background: #141C25;
                    margin-right: 30px;
                    width: 400px;
                    display: flex;
                    align-items: center;
                    border: 1px solid rgba(234, 0, 213, 0.5);
                    .date {    
                        padding: 10px 20px;
                        width: 60%;
                        font-size: 16px;
                        text-align: center;
                        &.active {
                            background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                            backdrop-filter: blur(10.5966px);
                        }
                        &:hover {
                            background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                            backdrop-filter: blur(10.5966px);
                        }
                    }
                }

                .sort_byCategory {
                    margin-right: 30px;
                    background: #141C25;
                    display: flex;
                    align-items: center;
                    padding: 10px 20px;
                    border: 1px solid rgba(234, 0, 213, 0.5);
                    .byCategory_text {
                        font-weight: 400;
                        font-size: 16px;
                        text-align: center;
                        margin-right: 15px;
                    }
                    .byCategory_svg {
                        margin-right: 30px;
                    }
                }
                .header_tabs {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    .header_tab {
                        padding: 9px 20px;
                        background: rgba(85, 85, 85, 0.14);
                        backdrop-filter: blur(14.511px);
                        border-radius: 6px;
                        font-size: 16px;
                        &:first-child {
                            margin-right: 20px;
                        }
                        &.active {
                            background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.2) -54.44%, rgba(234, 0, 213, 0.2) 110.67%);
                        }
                    }
                }
            }
        }

        .tables {
            .table {
                cursor: pointer;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                justify-items: flex-start;
                gap: 10px;
                align-items: center;
                transition: 0.3s ease;
                &.header {
                    font-size: 16px;
                    color: #979797;
                    margin-bottom: 10px;
                    .table_img {
                        width: 250px;
                        object-fit: cover;
                    }
                }
                
                &_body {
                    gap: 10px;
                    .table_img {
                        width: 250px;
                        // width: 100%;
                        height: 120px;
                        object-fit: cover;
                    }
                    .title_content {
                        display: grid;
                        grid-gap: 15px;
                        .rang {
                            font-weight: 400;
                            font-size: 16px;
                            font-family: "Octosquares-Bold";
                            color: #00EAF2;
                        }
                        .nike {
                            font-weight: 400;
                            font-size: 16px;
                        }
                    }
                    .level_content {
                        white-space: nowrap;
                        border: 1px solid #6BB8FF;
                        background: linear-gradient(273.52deg, rgba(0, 234, 242, 0.1) -54.44%, rgba(234, 0, 213, 0.1) 110.67%);
                        backdrop-filter: blur(6.01991px);
                        border-radius: 3px;
                        padding: 10px 20px;
                        font-size: 16px;
                        opacity: 0.7;
                    }
                    .tag_content {
                        display: flex;
                        flex-wrap: wrap;
                        .tag {
                            padding: 3px 7px;
                            background: #131217;
                            font-size: 16px;
                            color: #6BB8FF;
                            &:not(:last-child) {
                                margin-bottom: 5px;
                                margin-right: 5px;
                            }
                        }
                    }
                    .listing_content {
                        font-family: Octosquares-Bold;
                        font-size: 16px;
                    }
                    .price_content {
                        font-family: Octosquares-Bold;
                        font-size: 16px;
                        background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    .nimbl_content {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        gap: 20px 40px;
                        .nimble_item {
                            .nimble_subtitle {
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 35px;

                                color: #FFFFFF;
                            }
                            .nimble_title {
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 34px;

                                background: linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            }
                        }
                    }
                    & > *:not(:last-child) {
                        margin-bottom: 10px;
                    }
                    &:hover {
                        background: #14161E;
                        padding: 10px;
                        // transform: scale(1.01);
                    }
                }
            }
        }

        .ranking_boxs {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px;
            .simple {
                cursor: pointer;
                clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                position: relative;
                width: 350px;
                height: 430px;
                background: #00EAF2;
                transition: all 0.3s ease;
                .second {
                    clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                    position: absolute;
                    z-index: 10;
                    top: 2px;
                    left: 2px;
                    width: 346px;
                    height: 426px;
                    background: #141C25;
                    .box_header {
                        clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                        position: relative;
                        z-index: 1;
                        .video_box_img {
                            // width: 240px;
                            width: 100%;
                            height: 150px;
                            object-fit: cover;
                        }
                        .video_pause {
                            border-radius: 50%;
                            background: #000000;
                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                            backdrop-filter: blur(7px);
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            
                            padding: 35px;
                            .video_box_pause {
                                width: 20px;
                                height: 40px;
                                object-fit: cover;
                                position: absolute;
                                top: 50%;
                                left: 55%;
                                transform: translate(-55%, -50%);
                            }
                        }
                    }
                    .box_body {
                        position: relative;
                        .box_title {
                            text-align: center;
                            font-size: 16px;
                            margin-bottom: 10px;
                        }
                        .box_buttons {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 10px;
                            margin-bottom: 5px;
                            .box_button {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                padding: 5px;
                                background: rgba(0, 0, 0, 0.23);
                                backdrop-filter: blur(34.247px);
                                &_header {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    .count {
                                        font-family: "Octosquares-Bold";
                                        font-weight: 400;
                                        font-size: 16px;
                                    }
                                    .member_icon {
                                        width: 30px;
                                        height: 30px;
                                        margin-right: 10px;
                                    }
                                }
                                &_title {
                                    font-family: "Octosquares-Bold";
                                    font-weight: 400;
                                    font-size: 16px;
                                    background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    background-clip: text;
                                }
                                &_footer {
                                    font-weight: 400;
                                    font-size: 16px;
                                }
                            }
                        }
                        .tag_content {
                            display: inline-flex;
                            flex-wrap: wrap;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            // padding-bottom: 10px;
                            .tag {
                                padding: 3px 7px;
                                // background: #131217;
                                font-weight: 400;
                                font-size: 16px;
                                color: #6BB8FF;
                                &:not(:last-child) {
                                    margin-bottom: 5px;
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                }
                &:hover {
                    clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                    background: linear-gradient(95deg, rgba(1, 167, 255, 0.8) 0.4%, rgba(255, 0, 245, 0.8) 103.58%);
                }
            }
        }

    }
}
@media (max-width: 1850px) {
    .table_inner {
        .table_content_inner {
            .sidebar_sort {
                .sort_byCategory {
                    padding: 10px 20px;
                    .byCategory_text {
                        font-size: 16px;
                    }
                }
                .sort_byDate {
                    .date {
                        padding: 10px 20px;
                        font-size: 16px;
                    }
                }
                .sort_byCategory {
                    padding: 10px 20px;
                    .byCategory_text {
                        font-size: 16px;
                    }
                    .byCategory_icon {
                        margin-top: 5px;
                    }
                }
            }
        }
        .tables {
            .table {
                .title_content {
                    .rang {
                        font-size: 16px;
                    }
                    .nike {
                        font-size: 16px;
                    }
                    
                }
                .level_content {
                    padding: 8px 20px;
                    font-size: 16px;
                }
                .tag_content {
                    .tag {
                        font-size: 16px;
                        line-height: 17px;
                    }
                }
                .listing_content {
                        font-size: 16px;
                }
                .price_content {
                        font-size: 16px;
                }
                &:hover {
                    background: #14161E;
                    padding: 10px;
                    transform: scale(1);
                }
            }
        }

        .ranking_boxs {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px;
            .simple {
                cursor: pointer;
                clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                position: relative;
                width: 300px;
                height: 430px;
                background: #00EAF2;
                transition: all 0.3s ease;
                .second {
                    clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                    position: absolute;
                    z-index: 10;
                    top: 2px;
                    left: 2px;
                    width: 296px;
                    height: 426px;
                    background: #141C25;
                }
            }
        }
    }
}
@media (max-width: 1600px) {
    .table_inner {
        .table_content_inner {
            .sidebar_sort {
                .sort_byDate {
                    .date {
                        padding: 8px 12px;
                        font-size: 16px;
                    }
                }
                .sort_byCategory {
                    padding: 8px 12px;
                    .byCategory_text {
                        font-size: 16px;
                    }
                    .byCategory_icon {
                        width: 15px;
                        height: 15px;
                    }
                    .byCategory_svg {
                        width: 18px;
                        height: 18px;
                        margin-right: 15px;
                    }
                }
                .header_tabs {
                    .header_tab {
                        font-size: 16px;
                    }
                }
            }
        }

        .tables {
            .table {
                .table_img {
                    margin-right: 10px;
                }
                .title_content {
                    .rang {
                        font-size: 16px;
                    }
                    .nike {
                        font-size: 16px;
                    }
                }
                .level_content {    
                    padding: 8px 10px;
                        font-size: 16px;
                }
                .tag_content {
                    display: flex;
                    flex-wrap: wrap;
                    .tag {
                        font-size: 16px;
                        line-height: 17px;
                    }
                }
                .listing_content {
                    font-size: 15px;
                }
                .price_content {
                    font-size: 16px;
                }
                &:hover {
                    background: #14161E;
                    padding: 10px;
                    transform: scale(1);
                }
            }
        }

        .ranking_boxs {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px;
            .simple {
                cursor: pointer;
                clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                position: relative;
                width: 270px;
                height: 370px;
                background: #00EAF2;
                transition: all 0.3s ease;
                .second {
                    clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                    position: absolute;
                    z-index: 10;
                    top: 2px;
                    left: 2px;
                    width: 266px;
                    height: 366px;
                    background: #141C25;
                    .box_header {
                        .video_pause {
                            padding: 25px;
                            .video_box_pause {
                                height: 30px;
                            }
                        }
                    }
                    .box_body {
                        .box_buttons {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 1485px) {
    .table_inner {
        .tables {
            .table {
                .table_img {
                    margin-right: 10px;
                }
                .title_content {
                    .rang {
                        font-size: 16px;
                    }
                    .nike {
                        font-size: 16px;
                    }
                }
                .level_content {    
                    padding: 8px 10px;
                    font-size: 16px;
                }
                .tag_content {
                    display: flex;
                    flex-wrap: wrap;
                    .tag {
                        font-size: 16px;
                        line-height: 17px;
                    }
                }
                .listing_content {
                    font-size: 16px;
                }
                .price_content {
                    font-size: 16px;
                }
                &:hover {
                    background: #14161E;
                    padding: 10px;
                    transform: scale(1);
                }
            }
        }

        .ranking_boxs {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px;
            .simple {
                cursor: pointer;
                clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                position: relative;
                width: 240px;
                height: 370px;
                background: #00EAF2;
                transition: all 0.3s ease;
                .second {
                    clip-path: polygon(50% 7%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
                    position: absolute;
                    z-index: 10;
                    top: 2px;
                    left: 2px;
                    width: 236px;
                    height: 366px;
                    background: #141C25;
                    .box_header {
                        .video_pause {
                            padding: 25px;
                            .video_box_pause {
                                height: 30px;
                            }
                        }
                    }
                    .box_body {
                        .box_buttons {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>