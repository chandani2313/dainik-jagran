<template>
    <div class="footer_container">
        <div class="footer_container_left">
            <a href="https://www.jagranplay.com/terms&condition?utm_source=esports&utm_medium=crosspromotion&utm_campaign=jplay">terms & conditions</a>
            <a href="https://www.jagranplay.com/privacy-policy?utm_source=esports&utm_medium=crosspromotion&utm_campaign=jplay">Privacy & policy</a>
        </div>
        <div class="footer_container_middle">
            <a href="https://facebook.com/jagranplay" target="_blank"><img src="@/assets/images/facebook.svg" /></a>
            <a href="https://instagram.com/jagranplay" target="_blank"><img src="@/assets/images/instagram.svg" /></a>
            <a href="https://twitter.com/jagranplay" target="_blank"><img src="@/assets/images/twitter.svg" /></a>
            <a href="https://www.youtube.com/channel/UCffMFhtxo7pN02gyF0IjWog" target="_blank"><img src="@/assets/images/youtube.svg" /></a>
        </div>
        <div class="footer_container_right">
            Copyright © 2022 Jagran Prakashan Limited.
        </div>
    </div>
</template>

<style scoped>
.footer_container {
    position: relative;
    bottom: 0px;
    /* height: calc(100% - 0px); */
    width: auto;
    height: 74px;
    margin-left: 271px;
    background: #F0F0F0;
    z-index: 3;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.footer_container_left a {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #000000;
    padding-left: 30px;
    text-transform: capitalize;
    cursor: pointer;
}
.footer_container_middle {
    display: flex;
    gap: 27px;
}
.footer_container_middle a img {
    object-fit: contain;
    width: 22px;
    cursor: pointer;
}
.footer_container_right {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #000000;
    text-transform: capitalize;
    cursor: pointer;
}
@media screen and (max-width: 900px) {
.footer_container{
    flex-direction: column;
}    
}
@media (min-width: 320px) and (max-width: 767px) {
    .footer_container {
    margin-left: 0;
    }
    .footer_container_left a {
    font-size: 12px;
    }
    .footer_container_middle a img {
        width: 18px;
    }
    .footer_container_right {
    font-size: 9px;
    }
}
</style>
