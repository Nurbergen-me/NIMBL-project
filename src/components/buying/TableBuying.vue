<template>
    <div class="activity_content">
        <div class="activity_headers">
            <div class="activity_header">Activity</div>
            <div class="activity_select">
                <div class="activity_select_text">All Categories</div>
                <img class="activity_select_icon" src="@/assets/icons/arrow_down.svg" alt="">
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
                    <div class="event_text">{{ item.event }}</div>
                </div>
                <div class="price">{{ item.price }}</div>
                <div class="from">@{{ item.from }}</div>
                <div class="to">@{{ item.to }}</div>
                <div class="date">{{ item.date }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableBuying',
    data() {
        return {
            tables: [
                {event: 'sales', logo: 'sales-icon', price: '0.051 ETH', from: 'Bankless', to: '3141', date: '1 hours ago'},
                {event: 'mints', logo: 'minst-icon', price: '0.068 ETH', from: 'Eforise', to: 'Alwon', date: '4 hours ago'},
                {event: 'listing', logo: 'list-icon', price: '0.48 ETH', from: 'Jor88', to: 'MarryKS', date: '5 hours ago'},
                {event: 'listing', logo: 'list-icon', price: '0.66 ETH', from: 'FrezzyDo', to: 'MathGeny', date: '11 hours ago'},
                {event: 'mints', logo: 'mints-icon', price: '0.88 ETH', from: 'Danatello', to: 'MikesKing', date: '1 days ago'},
                {event: 'sales', logo: 'sales-icon', price: '1.7 ETH', from: 'Hirogo Doalino', to: 'Kingsman7', date: '1 days ago'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.activity_content {
    height: 100%;
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
            &_icon {
                margin-left: 15px;
                width: 20px;
                transform: translateY(10%)
            }
        }
    }
    .activity_tables {
        height: 100%;
        overflow-y: scroll;
        padding-bottom: 100px;
        .activity_table {
            height: 80px;
            cursor: pointer;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 15px;
            transition: all 0.5s ease;
            .event {
                display: flex;
                align-items: center;
            }


        }
        .header {
            // height: 48px;
            font-size: 18px;
            border-bottom: 1px solid #2E3656;
            align-items: start;
        }
        .body {
            // height: 58px;
            font-size: 18px;
            align-items: center;
            
        }
    }
}
@media (max-width: 2000px) {
    .activity_content {
        padding: 12px 20px;
        background: #171C2D;
        .activity_headers {
            margin-bottom: 18px;
            .activity_header {
                font-size: 14px;
                margin-right: 30px;
            }
            .activity_select {
                &_text {
                    font-size: 14px;
                }
                &_icon {
                    margin-left: 10px;
                    width: 15px;
                }
            }
        }
        .activity_tables {
            .activity_table {
                height: 80px;
                cursor: pointer;
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
                height: 40px;
                font-size: 18px;

            }
            .body {
                // height: 58px;
                font-size: 18px;
            }
        }
    }
}
</style>