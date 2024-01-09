<template>
    <div class="failure_popup_wrapper" v-if="close">
        <div class="failure_popup_inner_wrapper">
            <div class="close_button" @click="closepopup">
                <img src="@/assets/popup/close.png" >
            </div>
            <div class="failure_top_part">
                <div class="failure_icon">
                    <img src="@/assets/popup/error.svg" >
                </div>
            </div>
            <div class="failure_bottom_part">
                <div class="failure_title">
                    error title
                </div>
                <div class="failure_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div class="retry_button">
                    <button class="retry">retry</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   data(){
    return{
        close:true,
    }
   },
   methods:{
    closepopup(){
        this.close=!this.close;
    }
   }
}
</script>
<style scoped>
.failure_popup_wrapper{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(19, 19, 19, 0.5);
    z-index: 6;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.failure_popup_inner_wrapper{
    height: 353px;
    overflow: hidden;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #F0F0F0;
    box-shadow: 0px 10px 160px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(300px);
    border-radius: 33px;
    height: 725px;
    max-width: 715px;
    left: 11544px;
    top: 367px;
    border-radius: 33px;
}
.failure_top_part{
    height: 353px;
    left: 11544px;
    top: 367px;
    background: linear-gradient(0deg, #FF1662, #FF1662), #F0F0F0;
    border-radius: 33px 33px 0px 0px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.close_button{
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
}
.failure_icon img{
    transition: all 0.8s;
}
.failure_bottom_part{
    background: #FFFFFF;
    padding: 20px;
}
.failure_title{
    font-size: 35px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: 0em;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 40px;
}
.failure_content{
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: #C4C4C4;
    text-transform: capitalize;
}
.retry_button{
    text-align: center;
    margin: 75px 0px;
}
.retry{
    height: 61px;
    width: 182px;
    border-radius: 15px;
    background: #FF1662;
    outline: none;
    border: none;
    font-size: 25px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    text-transform: capitalize;
    cursor: pointer;
}
@media (min-width: 320px) and (max-width: 767px){
.failure_icon img{
    width: 150px;
    transition: all 0.8s;
    }
}
</style>