<template>
    <div class="success_popup_wrapper" v-if="close">
        <div class="success_popup_inner_wrapper">
            <div class="close_button"  @click="closepopup">
                <img src="@/assets/popup/close.png" >
            </div>
            <div class="success_top_part">
                <div class="success_icon">
                    <img src="@/assets/popup/success.svg" >
                </div>
            </div>
            <div class="success_bottom_part">
                <div class="success_title">
                    success title
                </div>
                <div class="success_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div class="okay_button">
                    <button class="okay">okay</button>
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
.success_popup_wrapper{
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
.success_popup_inner_wrapper{
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
.success_top_part{
    height: 353px;
    left: 11544px;
    top: 367px;
    border-radius: [object Object]px;
    background: linear-gradient(0deg, #00E384, #00E384),
    linear-gradient(0deg, #F0F0F0, #F0F0F0);
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
.success_icon img{
    transition: all 0.8s;
}
.success_bottom_part{
    background: #FFFFFF;
    padding: 20px;
}
.success_title{
    font-size: 35px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: 0em;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 40px;
}
.success_content{
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: #C4C4C4;
    text-transform: capitalize;
}
.okay_button{
    text-align: center;
    margin: 75px 0px;
}
.okay{
    height: 61px;
    width: 182px;
    border-radius: 15px;
    background: #00E384;
    outline: none;
    border: none;
    font-size: 25px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}
@media (min-width: 320px) and (max-width: 767px){
.success_icon img{
    width: 150px;
    transition: all 0.8s;
    }
}
</style>