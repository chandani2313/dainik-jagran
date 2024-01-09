<template>
  <div class="overview_container">
    <div>
      <div class="overview_container_top">
        <img src="@/assets/images/esports-tournament-logo.png" />
        <div class="overview_container_top_wrap">
          <div class="top_wrap_heading">JAGRAN PLAY ESPORTS TOURNAMENT</div>
          <div class="top_wrap_paragraph">COD MOBILE</div>
          <!-- <button class="join_btn" @click="toggleStepper">
            join button
          </button> -->
          <button class="join_btn">Coming Soon</button>
        </div>
        <div class="overview_container_top_status">
          <span class="green_dot"></span>
          <!-- <div class="status_text">upcoming</div> -->
          <div class="status_text">coming soon</div>
        </div>
      </div>
      <div class="media_content">media</div>
    </div>
    <div class="bottom_heading">media</div>
    <div class="overview_container_bottom">
      <!-- <div class="overview_container_bottom_left" v-for="embed in youtubeLink" :key="embed"> -->
      <div class="overview_container_bottom_left">
        <!-- <img src="@/assets/images/media-image.png" /> -->
        <!-- <iframe width="496" height="260" :src="`https://www.youtube.com/embed/${currentVideo}`"></iframe> -->
        <iframe
          width="496"
          height="267"
          :src="`https://www.youtube.com/embed/${currentVideo}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="overview_container_bottom_right">
        <div class="right_heading">Watch Now!</div>
        <div class="right_paragraph">
          Never miss an update regarding the tournament, <br/> press next or previous button to swtich between videos
        </div>
        <!-- <img src="@/assets/images/star-group.svg" /> -->
        <div class="right_btns">
          <button v-if="prevEnabled" class="preview_btn" @click="prevVideo()">
            preview
          </button>
          <button v-if="nextEnabled" class="next_btn" @click="nextVideo()">
            next
          </button>
        </div>
      </div>
    </div>
    <TheCrossPromotion />
    <!-- <Stepper
      v-if="openForm"
      @closeRegistration="toggleStepper"
    /> -->
    <NewStepper
      v-if="openForm"
      @closeRegistration="toggleStepper"
    />
  </div>
</template>

<script>
    import axios from 'axios';
    // import Stepper from '../stepper/Stepper.vue';
    import TheCrossPromotion from '../default/TheCrossPromotion.vue';
    import NewStepper from '../popup/NewStepper.vue'
    
    export default {
        name: 'Home',
        data() {
            return {
                openForm: false,
                currentVideo : "",
                videoCount : 0,
                currentVideoIndex : 0,
                prevEnabled : false,
                nextEnabled : true,

                tp : window.tp || [],
            }
        },
        components: {
            // Stepper,
            TheCrossPromotion,
            NewStepper
        },
        methods: {
            toggleStepper() {
                let user = window.localStorage.getItem("pianoUser");
                if(user) {
                    // this.openForm = !this.openForm;
                  this.$router.push('/register');
                } else {
                    this.loginJagran()
                }
                // this.openForm = !this.openForm;
            },
            getYoutubeEmbedLink() {
                axios.get("/esports/youtube-embed-code")
                .then((response) => {
                    this.videoCount = response.data.data.embed_codes.length
                    console.log(this.currentVideoIndex)
                    if(this.videoCount > 0){
                    console.log("youtube get data", response.data.data.embed_codes[this.currentVideoIndex]['embed_code']);
                    this.currentVideo = response.data.data.embed_codes[this.currentVideoIndex]['embed_code']
                    console.log(this.currentVideo)
                    }
                })
                .catch((e) => {
                    console.log("Error", e);
                });
            },
            nextVideo(){
                if(this.currentVideoIndex + 1 < this.videoCount){
                this.currentVideoIndex++;
                this.getYoutubeEmbedLink();
                this.prevEnabled = true
                } else{
                        this.nextEnabled = false
                        
                }
            },
            prevVideo(){
                if(this.currentVideoIndex > 0){
                this.currentVideoIndex--;
                this.getYoutubeEmbedLink();
                this.nextEnabled = true
                } else{
                    this.prevEnabled = false
                }
            },

            loginJagran() {
              this.tp.pianoId.show({
                loggedIn: function(data) {
                    localStorage.setItem("pianoUser", JSON.stringify(data.user));
                },              
                loggedOut: function() {
                        $('.logoutbutton').hide();
                        $('.loginbutton').show();
                        window.localStorage.removeItem('pianoUser');
                }
              });
            }           
        },
        mounted() {
            this.getYoutubeEmbedLink();
            this.tp.push(['setUsePianoIdUserProvider', true]);
            //     this.tp.push(["init", function() {
            //     if (this.tp.user.isUserValid()) { 
            //             $('.logoutbutton').show();
            //             $('.loginbutton').hide();
            //     }
            // }]);
        },
    }
</script>

<style scoped>
.overview_container {
  padding: 30px 20px 94px 291px;
}
.overview_container_top {
  margin: 0 auto;
  max-width: 1462px;
  height: 420px;
  border-radius: 30px;
  background-image: url("@/assets/images/home-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.overview_container_top img {
  width: 301px;
  /* height: 301px; */
  position: absolute;
  left: 65px;
  top: 42px;
}
.overview_container_top_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_wrap_heading {
  font-weight: 600;
  font-size: 46.7169px;
  line-height: 70px;
  text-transform: uppercase;
  color: #ffffff;
}
.top_wrap_paragraph {
  font-weight: 500;
  font-size: 29.7289px;
  line-height: 45px;
  text-transform: capitalize;
  color: #ffffff;
}
.join_btn {
  width: 258px;
  height: 50px;
  background: #e53935;
  border-radius: 5.91695px;
  font-weight: 700;
  font-size: 14.2007px;
  line-height: 21px;
  text-transform: capitalize;
  color: #ffffff;
  margin-top: 20px;
  border: none;
  cursor: pointer;
}
.media_content {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-transform: uppercase;
  color: #e53935;
}
@media screen and (min-width: 1750px) {
  .media_content {
    padding-left: 80px;
  }
}
.overview_container_top_status {
  /* align-self: flex-start;
        padding: 40px 82px; */
  position: absolute;
  right: 82px;
  top: 40px;
}
.status_text {
  font-weight: 500;
  font-size: 25px;
  line-height: 38px;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
}
.status_text::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 10px;
  width: 15px;
  height: 15px;
  background: #0fe200;
  border-radius: 50%;
}
.overview_container_bottom {
  width: 902px;
  height: 267.37px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.bottom_heading {
  /* font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-transform: uppercase;
  color: #e53935;
  padding-left: 80px; */
  display: none;
}
.overview_container_bottom_left img {
  width: 496.56px;
  height: 260.37px;
}
.overview_container_bottom_right {
  padding: 28px 55px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #000;
  width: 386.55px;
}
.right_heading {
  font-weight: 500;
  font-size: 27.6448px;
  line-height: 41px;
  text-transform: capitalize;
  color: #ffffff;
}
.right_paragraph {
  font-weight: 500;
  font-size: 13.9547px;
  line-height: 21px;
  color: #ffffff;
}
.overview_container_bottom_right img {
  width: 95.69px;
  height: 19.14px;
}
.preview_btn,
.next_btn {
  width: 111.59px;
  height: 21.32px;
  background: rgba(244, 131, 31, 0.1);
  font-weight: 600;
  font-size: 9.14653px;
  line-height: 14px;
  text-transform: uppercase;
  color: #f4831f;
  border: none;
  cursor: pointer;
}
.next_btn {
  margin-left: 25px;
}

@media (min-width: 320px) and (max-width: 600px) {
  .top_wrap_heading {
    font-size: 24px;
  }
  .top_wrap_paragraph {
    font-size: 14px;
  }
  .join_btn {
    width: 108px;
    height: 32px;
    margin-top: 10px;
    font-size: 12px;
  }
  .status_text {
    font-size: 16px;
  }
  .status_text::before {
    left: -12px;
    top: 14px;
    width: 9px;
    height: 9px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .overview_container {
    padding: 30px 10px 0px 10px;
  }
}
@media (min-width: 320px) and (max-width: 1220px) {
  .overview_container_bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 0;
    height: auto;
  }
  .overview_container_bottom_left {
    display: flex;
  }
}
@media (min-width: 320px) and (max-width: 520px) {
  iframe {
    width: 320px;
    align-items: center;
  }
  .overview_container_bottom_right {
    width: 210px;
  }
}
@media (min-width: 767px) and (max-width: 1444px) {
  .overview_container_top img {
    width: 251px;
    top: 60px;
  }
  .top_wrap_heading {
    font-size: 30px;
  }
  .top_wrap_paragraph {
    font-size: 19.7289px;
  }
  .join_btn {
    width: 208px;
    height: 42px;
    margin-top: 10px;
  }
  .status_text {
    font-size: 21px;
  }
  .status_text::before {
    left: -15px;
    top: 14px;
    width: 11px;
    height: 11px;
  }
}
@media (min-width: 320px) and (max-width: 1180px) {
  .overview_container_top img {
    display: none;
  }
}
</style>
