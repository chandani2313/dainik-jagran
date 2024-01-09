<template>
  <div class="prize_container">
    <div class="prize_container_header">Total Prize Pool - ₹20,00,000</div>
    <div class="prize_container_cardtop">
      <div class="prize_container_cardtop3">
        <div class="prize_container_cardtop3_wrap">
          <p class="prize_container_cardtop3_rupees">₹2,00,000</p>
          <span class="prize_container_cardtop3_position">3</span>
          <img
            class="prize_container_cardtop3_img"
            src="@/assets/images/trophy.png"
          />
          <div class="prize_container_cardtop3_bottomline"></div>
        </div>
      </div>
      <div class="prize_container_cardtop1">
        <div class="prize_container_cardtop1_wrap">
          <p class="prize_container_cardtop1_rupees">₹10,00,000</p>
          <span class="prize_container_cardtop1_position">1</span>
          <img
            class="prize_container_cardtop1_img"
            src="@/assets/images/trophy1.png"
          />
          <div class="prize_container_cardtop1_bottomline"></div>
        </div>
      </div>
      <div class="prize_container_cardtop2">
        <div class="prize_container_cardtop2_wrap">
          <p class="prize_container_cardtop2_rupees">₹4,00,000</p>
          <span class="prize_container_cardtop2_position">2</span>
          <img
            class="prize_container_cardtop2_img"
            src="@/assets/images/trophy.png"
          />
          <div class="prize_container_cardtop2_bottomline"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="prize_container_cardbottom">
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹1,00,000</p>
            <span class="prize_container_cardtop4_position">4 </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹50,000</p>
            <span class="prize_container_cardtop4_position">5 </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹50,000</p>
            <span class="prize_container_cardtop4_position">6 </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹30,000</p>
            <span class="prize_container_cardtop4_position">7 </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹30,000</p>
            <span class="prize_container_cardtop4_position">8 </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹20,000</p>
            <span class="prize_container_cardtop4_position">MVP </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹1,00,000</p>
            <span class="prize_container_cardtop4_position">FFT </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
        <div class="prize_container_cardtop4">
          <div class="prize_container_cardtop4_wrap">
            <p class="prize_container_cardtop4_rupees">₹20,000</p>
            <span class="prize_container_cardtop4_position">FFP </span>
            <img
              class="prize_container_cardtop4_img"
              src="@/assets/images/trophy.png"
            />
            <div class="prize_container_cardtop4_bottomline"></div>
          </div>
          
        </div>
      </div>
    </div>
    <TheCrossPromotion />
  </div>
</template>

<script setup>
import TheCrossPromotion from "../default/TheCrossPromotion.vue";
</script>

<style scoped>
.prize_container {
  padding: 30px 0 94px 290px;
}
.prize_innercontainer {
  margin: 20px;
  height: 100px;
  background: #aaa;
}
.heading {
  text-align: center;
}
.prize_container_cardtop {
  display: flex;
  /* gap: 120px; */
  justify-content: space-evenly;
}
.prize_container_header {
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #e53935;
  justify-content: center;
  padding-bottom: 15px;
}
.prize_container_cardtop3,
.prize_container_cardtop2 {
  width: 235px;
  padding-top: 74px;
}
.prize_container_cardtop3_wrap,
.prize_container_cardtop2_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, #f3f3f3, #f3f3f3), #f0f0f0;
  box-shadow: 10px 0px 20px rgb(0 0 0 / 10%);
  border-radius: 6.54708px;
  padding: 20px 30px 0px 30px;
}
.prize_container_cardtop3_rupees,
.prize_container_cardtop2_rupees {
  font-weight: 600;
  font-size: 32.5429px;
  line-height: 49px;
  text-transform: capitalize;
  color: #000000;
  opacity: 0.5;
  margin: 0;
}
.prize_container_cardtop3_position,
.prize_container_cardtop2_position {
  font-weight: 600;
  font-size: 72.375px;
  line-height: 109px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #e53935;
}
.prize_container_cardtop3_img,
.prize_container_cardtop2_img {
  width: 73px;
}
.prize_container_cardtop3_content,
.prize_container_cardtop2_content {
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
  margin-top: 10px;
}
.prize_container_cardtop3_bottomline,
.prize_container_cardtop2_bottomline {
  background: #e53935;
  backdrop-filter: blur(196.412px);
  border-radius: 6.54708px;
  height: 4px;
  width: 234px;
  margin-top: 17px;
}
.prize_container_cardtop1 {
  width: 308px;
}
.prize_container_cardtop1_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, #f3f3f3, #f3f3f3), #f0f0f0;
  box-shadow: 10px 0px 20px rgb(0 0 0 / 10%);
  border-radius: 6.54708px;
  padding: 20px 40px 0px 40px;
}
.prize_container_cardtop1_rupees {
  font-weight: 600;
  font-size: 42.7707px;
  line-height: 64px;
  text-transform: capitalize;
  color: #000000;
  opacity: 0.5;
  margin: 0;
}
.prize_container_cardtop1_position {
  font-weight: 600;
  font-size: 95.1217px;
  line-height: 143px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #e53935;
}
.prize_container_cardtop1_img {
  width: 96px;
}
.prize_container_cardtop1_content {
  font-weight: 500;
  font-size: 15.5036px;
  line-height: 23px;
  color: #000000;
  margin-top: 13px;
}
.prize_container_cardtop1_bottomline {
  background: #e53935;
  backdrop-filter: blur(258.143px);
  border-radius: 8.60476px;
  width: 308px;
  height: 6px;
  margin-top: 30px;
}
/*  */
.prize_container_cardbottom {
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  padding: 100px 232px 0px 232px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin: 50px 0 50px 0;
}
.prize_container_cardtop4 {
  width: 137px;
}
.prize_container_cardtop4_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(243, 243, 243, 0.2) 0%,
      rgba(191, 120, 118, 0.1) 100%
    ),
    #f0f0f0;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3.81935px;
  padding: 20px 40px 0px 40px;
}
.prize_container_cardtop4_rupees {
  font-weight: 600;
  font-size: 18.9844px;
  line-height: 28px;
  text-transform: capitalize;
  color: #000000;
  margin: 0;
}
.prize_container_cardtop4_position {
  font-weight: 600;
  font-size: 42.2211px;
  line-height: 63px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #e53935;
}
.prize_container_cardtop4_img {
  width: 43px;
}
.prize_container_cardtop4_content {
  font-weight: 500;
  font-size: 6.8815px;
  line-height: 10px;
  color: #000000;
  margin-top: 13px;
}
.prize_container_cardtop4_bottomline {
  background: #e53935;
  backdrop-filter: blur(114.58px);
  border-radius: 3.81935px;
  width: 137px;
  height: 3px;
  margin-top: 16px;
}

@media (min-width: 320px) and (max-width: 1068px) {
  .prize_container_cardtop {
    flex-wrap: wrap;
  }

  .prize_container_cardtop :nth-child(1) {
    order: 3;
  }
  .prize_container_cardtop :nth-child(2) {
    order: 1;
  }
  .prize_container_cardtop :nth-child(3) {
    order: 2;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .prize_container {
    padding: 30px 10px 0px 10px;
  }
}
</style>
