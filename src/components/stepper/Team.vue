<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <div class="field">
      <label class="label">Team Name</label>
      <div class="control">
        <input
          :class="['input', '']"
          type="text"
          placeholder="Team Name"
          @keyup="checkValue"
          v-model="team_name"
        />
        <label v-if="error" class="error_mesg">{{ error }}</label>
      </div>
    </div>
    <div class="field">
      <label class="label">Team Alias</label>
      <div class="control">
        <input
          :class="['input', '']"
          type="text"
          placeholder="Team Alias"
          @keyup="checkValue"
          v-model="team_alias"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Team Contact Person</label>
      <div class="control">
        <input
          :class="['input', '']"
          type="text"
          placeholder="Team Contact Person"
          @keyup="checkValue"
          v-model="team_contact_person"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Team Contact Number</label>
      <div class="control">
        <input
          :class="['input', '']"
          type="number"
          placeholder="Team Contact Number"
          @keyup="checkNumber"
          v-model="team_contact_mobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { validationMixin } from "vuelidate";
// import { required, email } from "@vuelidate/validators";
export default {
  props: ["clickedNext", "currentStep"],
  //   mixins: [validationMixin],
  data() {
    return {
      name: '',
      number: '',
      // form: {
        // username: '',
      // },
    };
  },
  watch: {
    name(value){
      // binding this to the data value in the email input
      this.name = value;
      this.validateName(value);
      console.log('fahad', validateName(value));
    },
    number(value){
      // binding this to the data value in the email input
      this.number = value;
      this.validateNumber(value);
      console.log('fahad', validateNumber(value));
    }
  },
  methods:{
    validateName(value) {
      if (/[a-zA-Z]/.test(value)) {
        this.mesg['name'] = "";
      } else {
        this.mesg['name'] = "Enter Team Name";
      }
    },
    validateNumber(value){
      let difference = 10 - value.length;
      if (value.length<8) {
        this.mesg['number'] = 'Enter valid mobile number ' ;
      } else {
         this.mesg['number'] = '';
      }
    },
  },
  mounted() {
    this.$emit("can-continue", { value: true });
  },
};
</script>

<style scoped>
.error_wrap {
  position: absolute;
  height: 20px;
  font-size: 15px;
  color: red;
}
.label {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000000;
}
.input {
  border: 0.869932px solid #e53935;
  border-radius: 8.66453px;
  font-weight: 500;
  font-size: 16.5287px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000000;
  outline: none;
}
</style>
