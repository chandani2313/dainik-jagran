<template>
  <div class="support_container">
    <div class="support_heading"> support</div>


    <div class="support_column">

      <div class="accordion">
        <div class="accordion-item" @click="i.visible = !i.visible" v-for="i in dynamicList" :key="i">
          <div class="title">
            {{ i.name }}
            <div class="icon"><i class="fas fa-angle-right"></i></div>
          </div>
          <div class="panel" v-show="i.visible">
            <p>{{i.content}}</p>
            <div v-if="i.img"><img src="@/assets/images/faq-image.png" /></div>
          </div>
        </div>
      </div>

    </div>
           <div class="contactus_wrap">
            <div class="contact_inner">
            <div class="contactus_title_wrap">
              <div class="contactus_title_wrap_text">contact us</div>
            </div>
                      
              <div class="contact_us_bottom_card_icon_wrap"> 
                <div class="social_icon">                                  
                <a href="https://discord.gg/aznakY3Sw8" target="_blank" class="contact_social_wrap_card">              
                    <div class="contact_social_icon contact_dicord">
                      <i class="fab fa-discord"></i>
                    </div>              
                  <div class="contact_social_txt">DISCORD</div>
                </a>
                <a href="https://instagram.com/jagranplay" target="_blank" class="contact_social_wrap_card">              
                    <div class="contact_social_icon contact_insta">
                      <i class="fab fa-instagram"></i>
                    </div>              
                  <div class="contact_social_txt">INSTAGRAM</div>
                </a>
                </div> 
                 <div class="social_icon"> 
                <a href="https://facebook.com/jagranplay" target="_blank" class="contact_social_wrap_card">              
                    <div class="contact_social_icon contact_facebook">
                        <i class="fab fa-facebook-square"></i>
                    </div>              
                  <div class="contact_social_txt">FACEBOOK</div>
                </a> 
                <a href="https://www.jagranplay.com/helpdesk" target="_blank" class="contact_social_wrap_card">              
                    <div class="contact_social_icon contact_gmail">
                      <i class="fas fa-envelope"></i>
                    </div>              
                  <div class="contact_social_txt">QUERY FORM</div>
                </a> 
 
                  </div>                  
              </div>
                 
          </div>
          </div>
      <TheCrossPromotion />
  </div>
</template>
<script>
import TheCrossPromotion from "../default/TheCrossPromotion.vue";

export default {
  components: {
    TheCrossPromotion
  }, 
  data() {
    return {
        dynamicList: [],
    };
  },
  methods: {
    prepareDynamicList(){
      let list = [
        {name: "1. Will the tournament have any offline/lan events?", content: "No, the entire tournament will be hosted online. There will be no offline matches/events"},
        {name: "2. Will I be provided with accounts to play in the tournament?",   content: "No, you will have to create/use your own codm game account to play in the tournament"},
        {name: "3. What timezone will my matches be played in?",   content: "All the timings mentioned in the schedules will be in GMT +5:30, IST."},
        {name: "4. What will happen if I am late to my game?",   content: "You have a maximum of 5 mins grace period to show up from the match start time, if you do not show up in the said time, your match will be counted as a loss."},
        {name: "5. Do I need to do anything after completing the match?",   content: "It is compulsory to take a screenshot of the end match results including the scoreboard of the match, and submit it as a proof to officials in discord"},
        {name: "6. What is CODM IN Game Name and CODM UID  and where can I find it?",   content: "Please refer to the screenshot below", img:"image"},
        {name: "7. How will I know my match date and time?",   content: "Once the registration is completed the bracket and schedule will be updated in the Bracket and Schedule section in the website"},
        {name: "8. How can I play my match?",   content: "Players are expected to join the discord server and check-in in #check-in channel and your respective admin will guide you through on how to play the match."},
        {name: "9. How to claim my prize?",   content: "As soon as the tournament is completed the winners will receive an email with a form where players have to fill it and reply back. The prize distribution process will take 60-90 working days."},
      ];
      list.forEach(element => {
       this.dynamicList.push({...element, visible: false});
      });
    },
  },
  async created(){
    await this.prepareDynamicList();
  }
};
</script>

<style scoped>
.support_container {
    padding: 30px 0 94px 290px;

}
.support_innercontainer {
    margin: 20px;
    height: 100px;
    background: #aaa;
}
.support_heading{
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    color: #E53935;
    text-transform: uppercase;
    text-align: center;
}
.support_column{
  padding: 30px;
}
.accordion{
  column-count: 2;
  column-gap: 20px;
  column-fill: balance;
}
.accordion-item{
  background: #EAEAEA;
  border-radius: 10px;
  padding: 31px;
  margin-bottom: 10px;
  break-inside: avoid;
}
.accordion-item .title{
  display: flex;
  justify-content: space-between;
  align-content: center;
}

@media (min-width: 320px) and (max-width: 767px){
    .support_container{
      padding: 0px;
    }
    .accordion{
      display: flex;
      flex-direction: column;
    }
}
.icon{
    color: #E53935;

}
.contactus_wrap{
  padding: 1rem 0;
}
.contactus_title_wrap{
    padding-bottom: 14px;
    margin-bottom: 10px;
    text-align: center;
}
.contactus_title_wrap_text{
   position: relative;
    text-transform: uppercase;
    color: white;
    display: inline-block;
    padding: 0 10px;
    font-weight: 600;
    color: #E53935;
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 0em;

}
.contactus_content_wrap{
  color: #9b9b9b;
  font-size: 15px;
  margin-bottom: 30px;
}
.contact_us_bottom_card_icon_wrap{
    display: flex;
    justify-content: center;
    gap: 80px;
}
.contact_social_wrap_card{
    display: flex;
    align-items: center;
    /* height: 50px; */
    box-shadow: 6px 6px 6px 0px rgb(125 127 129 / 80%);
    border-radius: 20px 8px 8px 20px;
    /* width: max-content; */
    margin: auto;
    width: fit-content;
    margin-bottom: 30px;
}
.contact_social_wrap_card:hover{
    -webkit-box-shadow: 6px 5px 2px 0px #00000073;
    box-shadow: 6px 5px 2px 0px #00000073;
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
}
.contact_social_icon{
    padding: 0 25px;
    border-radius: 20px 0px 0 20px;
    clip-path: polygon(0 0, 82% 0%, 100% 100%, 0% 100%);
    height: 40px;
    align-items: center;
    display: flex;
    font-size: 24px;
    color: #fff;
}
.contact_dicord{
    background: #7289DA;
}
.contact_facebook{
    background: #037DC1;
}
.contact_gmail{
    background: #DB4437;
}
.contact_insta{
    background: linear-gradient(197.32deg, #0078FF 15.3%, #E1306C 51.74%, #FCAF45 94.18%);
}
.contact_youtube{
    background: #FF0000;
}
.contact_social_txt{
    border-radius: 0 8px 8px 0;
    padding: 0px 13px;
    height: 40px;
    align-items: center;
    display: flex;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 9% 100%);
    margin-left: -8px;    
    justify-content: center;
    min-width: 113px;
    background: linear-gradient(180deg, #E53935 0%, #FFA5A3 100%);
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 900;
    line-height: 21px;
    letter-spacing: 0em;
}
@media (min-width: 320px) and (max-width: 767px) {
  .contact_social_icon{
    font-size: 18px;
    height: 30px;
    padding: 0 18px;
  }
  .contact_social_txt{
    font-size: 14px;
    height: 30px;
    min-width: 80px;
  }
.contact_us_bottom_card_icon_wrap{
        flex-direction: column;
        gap:0;
}

}

</style>
