<template>
  <div class="form_container">
    <div class="registration_form_container">
      <div class="registration_form_container_header">
        <p class="registration_form_container_header_heading">
          Registration form
        </p>
        <img
          class="registration_form_container_header_close"
          src="@/assets/images/close.png"
          @click="$emit('closeRegistration')"
        />
      </div>
      <div class="registration_form_container_form">
        <div class="first_name_input_container">
          <p class="first_name_input_text">Team Name</p>
          <input
            type="text"
            class="first_name_input"
            placeholder="Enter the your first name"
            v-model="team_name"      
          />
        </div>
        <div class="last_name_input_container">
          <p class="last_name_input_text">team_alias</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="enter the your last name"
            v-model="team_alias"
          />
        </div>
        <div class="last_name_input_container">
          <p class="last_name_input_text">team_contact_person</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="enter the your last name"
            v-model="team_contact_person"
          />
        </div>
        <div class="last_name_input_container">
          <p class="last_name_input_text">team_contact_mobile</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="enter the your last name"
            v-model="team_contact_mobile"
          />
        </div>
        <div class="last_name_input_container">
          <p class="last_name_input_text">Player1</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="player1_full_name"
            v-model="player1_full_name"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player1_email"
            v-model="player1_email"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player1_phone"
            v-model="player1_phone"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player1_codm_account_id"
            v-model="player1_codm_account_id"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player1_codm_ign"
            v-model="player1_codm_ign"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player1_discord_tag"
            v-model="player1_discord_tag"
          />
        </div>

        <!-- player2 -->
        <div class="last_name_input_container">
          <p class="last_name_input_text">Player2</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="player2_full_name"
            v-model="player2_full_name"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player2_email"
            v-model="player2_email"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player2_phone"
            v-model="player2_phone"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player2_codm_account_id"
            v-model="player2_codm_account_id"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player2_codm_ign"
            v-model="player2_codm_ign"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player2_discord_tag"
            v-model="player2_discord_tag"
          />
        </div>

        <!-- player3 -->
        <div class="last_name_input_container">
          <p class="last_name_input_text">Player3</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="player3_full_name"
            v-model="player3_full_name"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player3_email"
            v-model="player3_email"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player3_phone"
            v-model="player3_phone"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player3_codm_account_id"
            v-model="player3_codm_account_id"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player3_codm_ign"
            v-model="player3_codm_ign"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player3_discord_tag"
            v-model="player3_discord_tag"
          />
        </div>

        <!-- player4 -->
        <div class="last_name_input_container">
          <p class="last_name_input_text">Player4</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="player4_full_name"
            v-model="player4_full_name"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player4_email"
            v-model="player4_email"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player4_phone"
            v-model="player4_phone"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player4_codm_account_id"
            v-model="player4_codm_account_id"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player4_codm_ign"
            v-model="player4_codm_ign"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player4_discord_tag"
            v-model="player4_discord_tag"
          />
        </div>

        <!-- player5  -->
        <div class="last_name_input_container">
          <p class="last_name_input_text">Player5</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="player5_full_name"
            v-model="player5_full_name"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player5_email"
            v-model="player5_email"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player5_phone"
            v-model="player5_phone"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player5_codm_account_id"
            v-model="player5_codm_account_id"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player5_codm_ign"
            v-model="player5_codm_ign"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player5_discord_tag"
            v-model="player5_discord_tag"
          />
        </div>

        <!-- player6 -->
        <div class="last_name_input_container">
          <p class="last_name_input_text">Player6</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="player6_full_name"
            v-model="player6_full_name"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player6_email"
            v-model="player6_email"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player6_phone"
            v-model="player6_phone"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player6_codm_account_id"
            v-model="player6_codm_account_id"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player6_codm_ign"
            v-model="player6_codm_ign"
          />
          <input
            type="text"
            class="last_name_input"
            placeholder="player6_discord_tag"
            v-model="player6_discord_tag"
          />
        </div>

      </div>
      <div class="registration_form_container_buttons">
        <a class="back_buton"
          @click="$emit('closeRegistration')"
        >back</a>
        <a class="next_buton" @click="registrationFormSubmit">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import axios from 'axios';

export default {
  name: "NewStepper",
  data(){
    return {
      team_name: '',
      team_alias: '',
      team_contact_person: '',
      team_contact_mobile: '',

      player1_full_name: '',
      player1_email:'',
      player1_phone: '',
      player1_codm_account_id: '',
      player1_codm_ign: '',
      player1_discord_tag: '',

      player2_full_name: '',
      player2_email:'',
      player2_phone: '',
      player2_codm_account_id: '',
      player2_codm_ign: '',
      player2_discord_tag: '',

      player3_full_name: '',
      player3_email:'',
      player3_phone: '',
      player3_codm_account_id: '',
      player3_codm_ign: '',
      player3_discord_tag: '',

      player4_full_name: '',
      player4_email:'',
      player4_phone: '',
      player4_codm_account_id: '',
      player4_codm_ign: '',
      player4_discord_tag: '',

      player5_full_name: '',
      player5_email:'',
      player5_phone: '',
      player5_codm_account_id: '',
      player5_codm_ign: '',
      player5_discord_tag: '',

      player6_full_name: '',
      player6_email:'',
      player6_phone: '',
      player6_codm_account_id: '',
      player6_codm_ign: '',
      player6_discord_tag: '',

    }
    
  },
  components: {

  },
  methods: {
    registrationFormSubmit() {
            let data = {
                team_name: this.team_name,
                team_alias: this.team_alias,
                team_contact_person: this.team_contact_person,
                team_contact_mobile: this.team_contact_mobile,
                players:[
                  {
                    full_name: this.player1_full_name,
                    email: this.player1_email,
                    phone: this.player1_phone,
                    codm_account_id: this.player1_codm_account_id,
                    codm_ign: this.player1_codm_ign,
                    discord_tag: this.player1_discord_tag
                  },
                  {
                    full_name: this.player2_full_name,
                    email: this.player2_email,
                    phone: this.player2_phone,
                    codm_account_id: this.player2_codm_account_id,
                    codm_ign: this.player2_codm_ign,
                    discord_tag: this.player2_discord_tag
                  },
                  {
                    full_name: this.player3_full_name,
                    email: this.player3_email,
                    phone: this.player3_phone,
                    codm_account_id: this.player3_codm_account_id,
                    codm_ign: this.player3_codm_ign,
                    discord_tag: this.player3_discord_tag
                  },
                  {
                    full_name: this.player4_full_name,
                    email: this.player4_email,
                    phone: this.player4_phone,
                    codm_account_id: this.player4_codm_account_id,
                    codm_ign: this.player4_codm_ign,
                    discord_tag: this.player4_discord_tag
                  },
                  {
                    full_name: this.player5_full_name,
                    email: this.player5_email,
                    phone: this.player5_phone,
                    codm_account_id: this.player5_codm_account_id,
                    codm_ign: this.player5_codm_ign,
                    discord_tag: this.player5_discord_tag
                  },
                  {
                    full_name: this.player6_full_name,
                    email: this.player6_email,
                    phone: this.player6_phone,
                    codm_account_id: this.player6_codm_account_id,
                    codm_ign: this.player6_codm_ign,
                    discord_tag: this.player6_discord_tag
                  }

                ],

            }


            console.log("final data", {data: data, signature: this.computeSignature()});
            axios.post("/esports/sports-registration", {data: data, signature: this.computeSignature()})
                .then((response) => {
                    console.log("registeration form data", response.data);
                })
                .catch((e) => {
                    console.log("Error", e);
                });
    },

    computeSignature() {
      // console.log("data", data);
      let formData = {team_name: this.team_name,
              team_alias: this.team_alias,
              team_contact_person: this.team_contact_person,
              team_contact_mobile: this.team_contact_mobile,
              players:[
                {
                  full_name: this.player1_full_name,
                  email: this.player1_email,
                  phone: this.player1_phone,
                  codm_account_id: this.player1_codm_account_id,
                  codm_ign: this.player1_codm_ign,
                  discord_tag: this.player1_discord_tag
                },
                {
                  full_name: this.player2_full_name,
                  email: this.player2_email,
                  phone: this.player2_phone,
                  codm_account_id: this.player2_codm_account_id,
                  codm_ign: this.player2_codm_ign,
                  discord_tag: this.player2_discord_tag
                },
                {
                  full_name: this.player3_full_name,
                  email: this.player3_email,
                  phone: this.player3_phone,
                  codm_account_id: this.player3_codm_account_id,
                  codm_ign: this.player3_codm_ign,
                  discord_tag: this.player3_discord_tag
                },
                {
                  full_name: this.player4_full_name,
                  email: this.player4_email,
                  phone: this.player4_phone,
                  codm_account_id: this.player4_codm_account_id,
                  codm_ign: this.player4_codm_ign,
                  discord_tag: this.player4_discord_tag
                },
                {
                  full_name: this.player5_full_name,
                  email: this.player5_email,
                  phone: this.player5_phone,
                  codm_account_id: this.player5_codm_account_id,
                  codm_ign: this.player5_codm_ign,
                  discord_tag: this.player5_discord_tag
                },
                {
                  full_name: this.player6_full_name,
                  email: this.player6_email,
                  phone: this.player6_phone,
                  codm_account_id: this.player6_codm_account_id,
                  codm_ign: this.player6_codm_ign,
                  discord_tag: this.player6_discord_tag
                }

              ]}
      let jsonData = JSON.stringify(formData);
      let secret_key = "CnFQpjNs6qUa/KqSlFeB8VAgU9KDebMbdx8tLLbM2h8=";
      let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secret_key);
      hmac.update(jsonData);
      let hash = hmac.finalize();
      console.log("hash value", btoa(hash))
      return btoa(hash);
    }
  },
  mounted(){
    console.log("mounted compute", this.computeSignature());
  }
}
</script>


<style scoped>
.form_container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(19, 19, 19, 0.9);
  z-index: 6;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.registration_form_container {
  width: 715px;
  height: 725px;
  background: linear-gradient(0deg, #f0f0f0, #f0f0f0), #f0f0f0;
  /* box-shadow: 0px 10px 160px rgba(0, 0, 0, 0.15); */
  border-radius: 33px;
  overflow: scroll;
}
.registration_form_container_header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 28px 0px 69px 127px;
}
.registration_form_container_header_heading {
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #e53935;
  margin: 0;
}
.registration_form_container_header_close {
  width: 26px;
  height: 28px;
  cursor: pointer;
}
.registration_form_container_form {
  padding: 0px 64px 0px 48px;
}
.first_name_input_container,
.last_name_input_container,
.select_country_input_container,
.select_games_input_container,
.mobile_number_input_container {
  display: flex;
  align-items: center;
  padding-bottom: 41px;
}
.first_name_input_text,
.last_name_input_text,
.select_country_input_text,
.select_games_input_text,
.mobile_number_input_text {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000000;
  margin: 0;
}
::placeholder {
  color: #000000;
}
.first_name_input_text {
  padding-right: 86px;
}
.last_name_input_text {
  padding-right: 91px;
}
.select_country_input_text {
  padding-right: 105px;
}
.select_games_input_text {
  padding-right: 59px;
}
.mobile_number_input_text {
  padding-right: 105px;
}
.first_name_input,
.last_name_input,
.select_games_input {
  width: 381.09px;
  height: 18.5px;
  background: #ffffff;
  border: 0.869932px solid #e53935;
  border-radius: 8.66453px;
  font-weight: 500;
  font-size: 16.5287px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000000;
  outline: none;
  padding: 11px 0px 11px 30px;
}
.select_country_input {
  width: 414px;
  background: #ffffff;
  border: 0.869932px solid #e53935;
  border-radius: 8.66453px;
  font-weight: 500;
  font-size: 16.5287px;
  line-height: 20px;
  text-transform: capitalize;
  outline: none;
  padding: 11px 0px 11px 30px;
  color: #000000;
}
.select_games_input_container {
  padding-bottom: 64px;
}
.code_input {
  background: #ffffff;
  border: 0.869932px solid #e53935;
  border-radius: 8.66453px;
  color: #000000;
  outline: none;
  padding: 11px 0px 11px 30px;
  width: 107px;
  height: 44px;
  margin-right: 6px;
  font-weight: 500;
  font-size: 16.5287px;
  line-height: 20px;
}
.mobile_number_input {
  background: #ffffff;
  border: 0.869932px solid #e53935;
  border-radius: 8.66453px;
  font-weight: 500;
  font-size: 16.5287px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000000;
  outline: none;
  padding: 11px 0px 11px 30px;
  width: 268px;
  height: 19px;
}
.registration_form_container_buttons {
  display: flex;
  align-items: center;
  gap: 238px;
  padding: 10px 64px 53px 48px;
}
.back_buton {
  border: 1px solid #e53935;
  border-radius: 15px;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #e53935;
  cursor: pointer;
  padding: 14px 60px;
}
.next_buton {
  border: 1px solid #e53935;
  border-radius: 15px;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 14px 61px;
  color: #000000;
  background: #e53935;
}
@media (min-width: 320px) and (max-width: 715px) {
  .registration_form_container {
    width: 350px;
    height: 500px;
    background: linear-gradient(0deg, #f0f0f0, #f0f0f0), #f0f0f0;
    box-shadow: 0px 10px 160px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(300px);
    border-radius: 33px;
  }

  .registration_form_container_header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0px 15px 25px;
  }
  .registration_form_container_header_heading {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #e53935;
    margin: 0;
  }
  .registration_form_container_header_close {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  .registration_form_container_form {
    padding: 0px 25px 0px 25px;
  }
  .first_name_input_container,
  .last_name_input_container,
  .select_country_input_container,
  .select_games_input_container {
    display: flex;
    padding-bottom: 10px;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  .mobile_number_input_container {
    display: flex;
    padding-bottom: 10px;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  .first_name_input_text,
  .last_name_input_text,
  .select_country_input_text,
  .select_games_input_text,
  .mobile_number_input_text {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
  }
  ::placeholder {
    color: #000000;
  }
  .first_name_input_text {
    padding-right: 0px;
  }
  .last_name_input_text {
    padding-right: 0px;
  }
  .select_country_input_text {
    padding-right: 0px;
  }
  .select_games_input_text {
    padding-right: 0px;
  }
  .mobile_number_input_text {
    padding-right: 0px;
  }
  .first_name_input,
  .last_name_input,
  .select_games_input {
    width: 270px;
    height: 10px;
    background: #ffffff;
    border: 0.869932px solid #e53935;
    border-radius: 8.66453px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    color: #000000;
    outline: none;
    padding: 10px 0px 10px 20px;
  }
  .select_country_input {
    width: 290px;
    background: #ffffff;
    border: 0.869932px solid #e53935;
    border-radius: 8.66453px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    outline: none;
    padding: 7px 0px 10px 20px;
    color: #000000;
    height: 32px;
  }
  .select_games_input_container {
    padding-bottom: 10px;
  }
  .code_input {
    background: #ffffff;
    border: 0.869932px solid #e53935;
    border-radius: 8.66453px;
    color: #000000;
    outline: none;
    padding: 5px 0px 5px 20px;
    width: 70px;
    height: 32px;
    margin-right: 6px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
  .mobile_number_input {
    background: #ffffff;
    border: 0.869932px solid #e53935;
    border-radius: 8.66453px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    color: #000000;
    outline: none;
    padding: 10px 0px 10px 20px;
    width: 195px;
    height: 10px;
  }
  .mobile_number_inputs {
    display: flex;
  }
  .registration_form_container_buttons {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 25px 0px 0px 30px;
  }
  .back_buton {
    border: 1px solid #e53935;
    border-radius: 10px;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #e53935;
    cursor: pointer;
    padding: 5px 30px;
  }
  .next_buton {
    border: 1px solid #e53935;
    border-radius: 10px;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    padding: 6px 32px;
    color: #000000;
    background: #e53935;
  }
}
</style>