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
          <p class="first_name_input_text">first name</p>
          <input
            type="text"
            class="first_name_input"
            placeholder="enter the your first name"
          />
        </div>
        <div class="last_name_input_container">
          <p class="last_name_input_text">last name</p>
          <input
            type="text"
            class="last_name_input"
            placeholder="enter the your last name"
          />
        </div>
        <div class="select_country_input_container">
          <p class="select_country_input_text">country</p>
          <select class="select_country_input" name="country" id="country">
            <option value="India">select your country</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="America">America</option>
          </select>
        </div>
        <div class="select_games_input_container">
          <p class="select_games_input_text">Select games</p>
          <input
            type="text"
            class="select_games_input"
            placeholder="enter the your city"
          />
        </div>
        <div class="mobile_number_input_container">
          <p class="mobile_number_input_text">country</p>
          <div class="mobile_number_inputs">
            <select class="code_input" name="country" id="country">
              <option value="India">+91</option>
              <option value="India">+91</option>
              <option value="India">+91</option>
            </select>
            <input type="text" class="mobile_number_input" />
          </div>
        </div>
      </div>
      <div class="registration_form_container_buttons">
        <a class="back_buton"
          @click="$emit('closeRegistration')"
        >back</a>
        <a class="next_buton">next</a>
      </div>
    </div>
  </div>
</template>

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