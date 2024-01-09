<template>
    <div class="rules_container">
        <div class="rules_innercontainer">
            <div class="rules_heading"> rules and regulation</div>
            <div class="rules_inner_wrapper">
                <router-link tag="div" active-class="active" :to="{ name: 'Format' }" exact class="tab">Format</router-link>
                <router-link tag="div" active-class="active" :to="{ name: 'GameSettings' }" exact class="tab">Game Settings</router-link>
                <router-link tag="div" active-class="active" :to="{ name: 'PlayerEligibility' }" exact class="tab">Player Eligibility</router-link>
            </div>
            <div class="content">
                <router-view />
            </div>
        </div>
        <TheCrossPromotion />
    </div>
</template>
<script setup>
import TheCrossPromotion from "../default/TheCrossPromotion.vue";
</script>

<style scoped>
.rules_container {
    padding: 30px 0 0px 290px;
}
.rules_innercontainer {
    padding: 0rem 4rem;
}
.rules_heading{
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    color: #E53935;
    text-transform: uppercase;
    text-align: center;
}
.tab{
    min-width: 244px;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
    background: #E2E2E2;
    padding: 5px 0px;
    color: grey;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
}
.tabs_outer_wrapper{
    justify-content: space-between;
    border-radius: 8px;
}
.rules_inner_wrapper{
    display: flex;
    padding: 0 10px;
    color: #FFFFFF;
    /* flex-wrap: wrap; */
    margin-top: 21px;
    justify-content: center;
}
.content{
    padding: 3rem;
    height: 350px;
    overflow: scroll;
    background: #E2E2E2;
    overflow-x: hidden;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-transform: uppercase;
}
.active {
    background: #C4C4C4;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    color: #000000;
    border: none;
    text-align: center;
}
/* width */
::-webkit-scrollbar {
    width: 3px;
}
/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: #E53935;
    height:200px;
}
@media (min-width: 320px) and (max-width: 767px){
    .rules_container{
        padding: 0px;
    }
    .rules_innercontainer{
        padding: 1rem;
    }
    .content{
       height: 220px;
    }
    .tab{
        min-width: 100px;
        font-size: 11px;    
        margin: 0;
        transition-duration: .3s;
    }
    .rules_inner_wrapper{
        margin-bottom: 10px;
    }
    .content{
        padding: 1rem;
        font-size: 15px;
    }
}
@media(min-width: 767px) and (max-width:1200px){
    .tab{
        min-width: 132px;
        transition-duration: .3s;
        font-size: 15px;
    }
    .content{  
        font-size: 15px;
    }
    .rules_innercontainer{
        padding: 1rem;
    }
}
</style>