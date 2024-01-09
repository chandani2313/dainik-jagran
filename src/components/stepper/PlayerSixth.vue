<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <div class="field">
      <label class="label">Player Name</label>
      <div class="control">
        <input :class="['input', '']" type="text" placeholder="Player Name" />
      </div>
    </div>
    <div class="field">
      <label class="label">Player Email</label>
      <div class="control">
        <input :class="['input', '']" type="email" placeholder="Player Email" />
      </div>
    </div>
    <div class="field">
      <label class="label">Player Number</label>
      <div class="control">
        <input :class="['input', '']" type="tel" placeholder="Player Number" />
      </div>
    </div>
    <div class="field">
      <label class="label">Player CODM Account ID</label>
      <div class="control">
        <input :class="['input', '']" type="text" placeholder="Player CODM Account ID" />
      </div>
    </div>
    <div class="field">
      <label class="label">Player CODM IGN</label>
      <div class="control">
        <input :class="['input', '']" type="text" placeholder="Player CODM IGN" />
      </div>
    </div>
    <div class="field">
      <label class="label">Discord TAG</label>
      <div class="control">
        <input :class="['input', '']" type="text" placeholder="Discord TAG" />
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
      form: {
        username: "",
      },
    };
  },

  mounted() {
    this.$emit("can-continue", { value: false });
  },
};
</script>
<style scoped>
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