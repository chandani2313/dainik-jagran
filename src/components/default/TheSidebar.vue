<template>
  <div class="sidebar_wwrapper">
    <div class="sidebar">
      <div class="logo_wrap">
        <a href="https://www.jagranplay.com/?utm_source=esports&utm_medium=homebutton&utm_campaign=crosspromotion" target="_blank"><img src="@/assets/images/jagran-play-icon.svg" width="50" height="100" /></a>
      </div>
      <nav class="top-nav">
        <div class="hamburger-menu">
          <div class="top_left"></div>
          <div class="bottom_left"></div>
          <div class="wrapper-menu">
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>
        </div>
      </nav>
      <div class="sidebar_inner">
        <!-- <a href="/">
          <div class="logo_wrap">
            <img src="../../assets/images/playtonia_logo.webp" />
          </div>
        </a> -->
        <nav class="side_navigation">
          <ul>
            <!-- <li
              v-for="nav in navs"
              :key="nav.title"
              :to="{ name: 'Prize'}"
            >
              <a href="" @click.prevent
                ><span>{{ nav.title }}</span></a
              >
            </li> -->
            <!-- <router-link :to="{ name: 'home'}"  active-class="active" exact> -->
              <!-- <ul><li @click="homeRedirection" style="cursor: pointer;"><img src="@/assets/images/home-logo.svg" />  home  </li></ul> -->
            <!-- </router-link> -->
            <router-link :to="{ name: 'overview'}"  active-class="active" exact>
              <ul><li><img class="sidebar_icon" src="@/assets/images/home-logo.svg" />  home  </li></ul>
            </router-link>
            <router-link :to="{ name: 'prize'}"  active-class="active" exact>
              <ul><li><img class="sidebar_icon" src="@/assets/images/prize-logo.svg" /> prize </li></ul>
            </router-link>
            <router-link :to="{ name: 'rules'}"  active-class="active" exact>
              <ul><li><img class="sidebar_icon" src="@/assets/images/rules-logo.svg" /> Rules & Regulations </li></ul>
            </router-link>
            <router-link :to="{ name: 'bracket'}"  active-class="active" exact>
              <ul><li><img class="sidebar_icon" src="@/assets/images/bracket-logo.svg" /> Bracket </li></ul>
            </router-link>
            <router-link :to="{ name: 'schedule'}"  active-class="active" exact>
              <ul><li><img class="sidebar_icon" src="@/assets/images/schedule.svg" /> Schedule </li></ul>
            </router-link>
            <router-link :to="{ name: 'support'}"  active-class="active" exact>
              <ul><li><img class="sidebar_icon" src="@/assets/images/support-Logo.svg" /> Support </li></ul>
            </router-link>
              <ul v-if="user !== null"><li style="cursor:pointer;" @click="logoutJagran"><img class="sidebar_icon" src="@/assets/images/support-Logo.svg" /> Logout</li></ul>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  </template>
  
  <!-- <script setup> -->
  <!-- import { useRouter } from "vue-router";
  import { ref, onMounted, watchEffect } from "vue";
  const router = useRouter();
  let tp = window.tp || [];

  onMounted(() => {
    sideNavigation();
    tp.push(['setUsePianoIdUserProvider', true]);
        tp.push(["init", function() {
        if (tp.user.isUserValid()) { 
                $('.logoutbutton').show();
                $('.loginbutton').hide();
        }
    }]);
  });
  function homeRedirection() {
    window.open('https://www.jagranplay.com/?utm_source=esports&utm_medium=homebutton&utm_campaign=crosspromotion','_blank');
  }
  function logout() {
      console.log("logout")
          tp.pianoId.show({
              // loggedIn: function(data) {
              //     localStorage.setItem("pianoUser", JSON.stringify(data.user));
              //     // this.openForm = !this.openForm;
              // },              
              loggedOut: function() {
                      console.log("logout function");
                      $('.logoutbutton').hide();
                      $('.loginbutton').show();
                      window.localStorage.removeItem('pianoUser');
              }
      });
  }

  const navs = [
    { title: "overview", id: "overview" },
    { title: "prize", id: "prize" },
    { title: "Rules & Regulations", id: "Rules" },
    { title: "Bracket", id: "Bracket" },
    { title: "Schedule", id: "Schedule" },
    { title: "Support", id: "Support" },
    // { title: "contact us", id: "contact us" },
  ];
const sideNavigation = () => {
  const wrapperMenu = document.querySelector(".wrapper-menu");
  const sidebar = document.querySelector(".sidebar");
  wrapperMenu.addEventListener("click", function () {
    wrapperMenu.classList.toggle("open");
    sidebar.classList.toggle("sidebar_open");
  });
}; -->
<!-- </script> -->

<script>
    export default {
        name: 'TheSidebar',
        data() {
            return {
                tp : window.tp || [],
                user:''
            }
        },
        components: {},
        methods: {
          sideNavigation() {
            const wrapperMenu = document.querySelector(".wrapper-menu");
            const sidebar = document.querySelector(".sidebar");
            wrapperMenu.addEventListener("click", function () {
              wrapperMenu.classList.toggle("open");
              sidebar.classList.toggle("sidebar_open");
            });
          },

          homeRedirection() {
            window.open('https://www.jagranplay.com/?utm_source=esports&utm_medium=homebutton&utm_campaign=crosspromotion','_target');
          },
          logoutJagran() {
            window.localStorage.removeItem('pianoUser');
            this.deleteCookies("__utp")
            this.$router.go();
            },
            deleteCookies(name){
              document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            },
            // cookiesClear() {
            //     let cookies = document.cookie.split(";")

            //     for (var i = 0; i < cookies.length; i++) {
            //         var cookie = cookies[i];
            //         var eqPos = cookie.indexOf("=");
            //         var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            //         console.log("name", name);
            //         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            //     }
            
            // },
        },
        mounted() {
          this.sideNavigation();
          this.user = window.localStorage.getItem('pianoUser');
          console.log("piano user", this.user);
        }
    }
</script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: calc(100% - 0px);
    width: 271px;
    background: #FFFFFF;
    box-shadow: 4px 4px 100px rgba(150, 150, 150, 0.2);
    z-index: 2;
    transition: all 0.8s;
  }
  .sidebar::-webkit-scrollbar {
  width: 0px;
  background: #ffffff;
  height: 80px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: orange;
  border-radius: 4px;
  height: 80px;
}
  .top-nav {
    position: absolute;
    right: -45px;
    transition: all 0.8s;
  
    right: -50px;
    top: calc(50% - 50px);
    /*clip-path: polygon(100% 50%, 0 0, 0 100%);*/
  }
  
  /* hamburger css */
  .hamburger-menu {
    background: #ffffff;
    display: none;
  }
  .top_left {
    width: 47px;
    height: 107px;
    overflow: hidden;
    position: absolute;
    top: -98px;
  }
  .top_left:before,
  .bottom_left:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
  }
  .top_left:before {
    bottom: 0;
    left: 0;
    box-shadow: -50px 50px 0 0 #ffffff;
  }
  .bottom_left {
    width: 47px;
    height: 107px;
    overflow: hidden;
    position: absolute;
    bottom: -98px;
  }
  .bottom_left:before {
    top: 0;
    left: 0;
    box-shadow: -50px -50px 0 0 #ffffff;
  }
  .wrapper-menu {
    width: 25px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 330ms ease-out;
    /*margin: 21px;*/
    float: left;
    /*padding: 20px 22px;*/
    position: relative;
    left: 6px;
  }
  
  .wrapper-menu.open {
    transform: rotate(-45deg);
  }
  
  .line-menu {
    /*background-color: #e3e4e6;*/
    /* background-image: linear-gradient(
      to right,
      rgb(79, 172, 254) 0%,
      rgb(0, 242, 254) 100%
    ); */
    background-image: linear-gradient( to right, rgb(229 57 53) 0%, rgb(229 57 53) 100% );
    border-radius: 5px;
    width: 100%;
    height: 2.4px;
  }
  
  .line-menu.half {
    width: 50%;
  }
  
  .line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }
  
  .open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
  }
  
  .line-menu.end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }
  
  .open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
  }
  
  /* end of hamburger css */
  
  .sidebar_inner {
    height: 100%;
    /* justify-content: center; */
    display: flex;
    flex-direction: column;
    /* overflow: auto; */
  }
  /* .logo_wrap {
    width: 50px;
    margin: 40px auto;
  } */
  .logo_wrap {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 41px 0 0 41px;
}
.logo_wrap img {
    width: 50%;
}
.profile_name {
    font-size: 18px;
    font-weight: 600;
    color: #FF8002;
    text-transform: uppercase;
}
.side_navigation {
  padding-bottom: 200px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-color: transparent transparent;
}
.side_navigation::-webkit-scrollbar {
  background: transparent;
}

.side_navigation::-webkit-scrollbar-thumb {
  background: transparent;
}
  .side_navigation ul {
    padding-left: 21px;
    position: relative;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
  }
  /* .side_navigation ul::after {
    content: "";
    position: absolute;
    width: 1.2px;
    height: calc(100% - 40px);
    left: 63px;
    top: 25px;
    background: #57a84a;
    z-index: -1;
  } */
  .side_navigation ul li {
    padding: 30px 0px;
    display: flex;
    align-items: center;
    gap: 21px;
  }
  .side_navigation ul li {
    text-decoration: none;
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    text-transform: capitalize;
  }
  .side_navigation ul li img {
    object-fit: contain;
    width: 20px;
  }
  /* .side_navigation ul li:before {
    content: "";
    position: absolute;
    background: #93e893;
    width: 12px;
    height: 12px;
    left: -15.3px;
    top: 23px;
    transform: translateY(-50%) rotate(45deg);
    border: 1px solid #57a84a;
    transition: background 250ms;
  } */
  
  /* .side_navigation ul li.active::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 5px;
    right: 0px;
    top: 45%;
    background: #57a84a;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  }
  
  /*small diamond
  .side_navigation ul li.active {
    color: #57a84a;
    box-shadow: inset 0px -10px 15px 1px #000000d4;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
  }
  .side_navigation ul li.active:before {
    background: #57a84a;
    border: 1px solid #57a84a;
  }
  /*small diamond
  .side_navigation ul li a:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    left: -12.5px;
    top: 24px;
    transform: translateY(-50%) rotate(45deg);
  
    transition: all 0.3s;
  }
  .side_navigation ul li.active a:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    left: -12.5px;
    top: 37px;
    transform: translateY(-50%) rotate(45deg);
    background: #57a84a;
    border: 1px solid #57a84a;
    transition: all 0.3s;
  }
  .side_navigation ul li a:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    left: -10.4px;
    top: 24px;
    transform: translateY(-50%) rotate(45deg);
  
    transition: all 0.5s;
  }
  
  .side_navigation ul li.active a:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    left: -10.4px;
    top: 44px;
    transform: translateY(-50%) rotate(45deg);
    background: #57a84a;
    border: 1px solid #57a84a;
    transition: all 0.5s;
  } */
  .side_navigation ul li:hover {
    color: #FF8002;
    font-size: 16px;
    font-weight: 600;
  }
  
  /* .side_navigation ul li:after {
    content: "";
    position: absolute;
    width: 35px;
    height: 5px;
    right: -36px;
    top: 45%;
    background: #FF8002;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
    transition: all 0.3s;
  }
  .side_navigation ul li:hover:after {
    right: 0px;
  } */
  .side_navigation ul li:hover:before {
    background: #FF8002;
  }
  
  .social-icons {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;
    margin: 2.3rem 0;
    justify-content: center;
    align-items: center;
    margin-top: auto;
  }
  .social-icons a {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 30px;
    color: #FF8002;
    transition: all 265ms ease-out;
    font-size: 14px;
  
    border-radius: 50%;
  }
  .social-icons a:before {
    transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* background: linear-gradient(45deg, #00b5f5, #002a8f); */
    transition: all 265ms ease-out;
    z-index: -1;
    box-shadow: 2px 3px 6px rgb(0 0 0 / 50%);
  }
  .social-icons a:hover:before {
    transform: scale(0);
    transition: all 265ms ease-in;
  }
  .social-icons a:hover i {
    transform: scale(1.5);
    color: #00b5f5;
    background: -webkit-linear-gradient(45deg, #00b5f5, #002a8f);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 265ms ease-in;
    font-size: 16px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    filter: drop-shadow(0 0 5px #00b5f5);
  }
  
  .social_media_container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 0.7rem;
    margin: 2.3rem 0;
    justify-content: center;
    align-items: center;
    margin-top: auto;
  }
  .social_media_container a {
    padding: 10px;
    color: #57a84a;
  }
  .social_media_container a:hover {
    transform: scale(1.5);
  
    transition: all 0.2s ease-in;
    text-shadow: 0px 0px 8px #65ff00;
  }
  @media (min-width: 320px) and (max-width: 767px) {
     .sidebar_wwrapper {
        /* box-shadow: 4px 4px 100px rgba(150, 150, 150, 0.2);     */
        background: rgba(19, 19, 19, 0.5);
        z-index: 6;
      }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .sidebar {
      left: -290px;
      overflow: unset;
    }
    .sidebar.sidebar_open {
      left: 0;
    }
    .sidebar.sidebar_open .top-nav {
      right: 0;
  
      right: -45px;
    }
    .hamburger-menu {
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 4px 4px 0;
      /*padding: 10px;*/
  
      padding: 20px 20px 20px 5px;
      height: 50px;
      border-radius: 0 143px 143px 0;
    }
    .sidebar_inner {
      justify-content: normal;
    }
  }
  </style>
  