<template>
    <div class="crosspromotion_container">
        <div class="heading">explore more</div>
        <div class="crosspromotion_cards">
            <div class="crosspromotion_cards_wrap" @click="openGameUrl(promotion.gameurl)" v-for="promotion in promotionList" :key="promotion">
                <img :src="`https://img.jagranplay.com/games/images/${promotion.hpimage}`" />
                <div class="crosspromotion_cards_wrap_heading">{{promotion.gtitle}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'crosspromotion',
    data() {
        return {
            promotionList:[],
        }
    },
    components: {},
    methods: {
        getCrossPromotion() {
            axios.get("/esports/cross-promotion-games")
                .then((response) => {
                    this.promotionList = response.data.data.games;
                    // console.log("cross promotion get data", response.data.data.games);
                })
                .catch((e) => {
                    console.log("Error", e);
                });
        },
        openGameUrl(gameUrl) {
            window.open(gameUrl, '_self')
        }
    },
    mounted() {
        this.getCrossPromotion();
    },
}

</script>

<style scoped>
.crosspromotion_cards::-webkit-scrollbar {
    width: 50px;
    height: 3px;
    border-radius: 10px;
}
.crosspromotion_cards::-webkit-scrollbar-track {
    background-color: whitesmoke;
}
.crosspromotion_cards::-webkit-scrollbar-thumb{
    background-color: #E53935;
    width: 50px !important;
}
.crosspromotion_cards::-moz-scrollbar-thumb{
    background-color: #E53935;
}
.crosspromotion_container {
    /* position: fixed;
    bottom: 75px; */
    transition: all 0.8s;
    /* padding: 30px 0 0px 271px; */
    margin: 20px 70px;
    /* width: 83%; */
    display: flex;
    flex-direction: column;
    align-content: center;
    /* max-width: 1441px; */
    /* width: -moz-available; */
}
.heading{
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
    color: #E53935;
    margin-bottom: 20px;
    align-self: start;
    padding-left: 0px;
}
.crosspromotion_container_wrap {
    max-width: 1441px;
    width: -moz-available;
    margin: 0 auto;
}
.crosspromotion_cards {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 21px;
    overflow: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    width: 100%;
    padding-bottom: 10px;
}
.crosspromotion_cards_wrap img {
    width: 188px;
    height: 187px;
    background: #5e5c5c;
    border-radius: 10px;
    margin: 10px 0px;
}
.crosspromotion_cards_wrap_heading {
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    color: #000000;
    text-align: center;
}
@media screen and (max-width: 900px) {
.footer_container{
    flex-direction: column;
}    
}
@media (min-width: 320px) and (max-width: 1812px) {
.heading{
    padding-left: 0;
}
}
@media (min-width: 320px) and (max-width: 767px) {
.crosspromotion_container {
    padding: 30px 10px 0px 10px;
    margin: 0px;
}
.heading{
    padding-left: 0;
}
}
@media (min-width: 767px) and (max-width: 1750px) {
    .crosspromotion_container {
        padding: 30px 0px 0px 0px;
        margin: 0;
    }
}

</style>