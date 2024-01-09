<template>
  <div class="stepper-box">
    <div class="top">
      <div
        class="divider-line"
        :style="{ width: `${(100 / steps.length) * (steps.length - 1) - 10}%` }"
      ></div>
      <div class="steps-wrapper">
        <template v-if="topButtons">
          <div
            v-if="currentStep.index > 0"
            class="stepper-button-top previous"
            @click="backStep()"
          >
            <i class="material-icons">keyboard_arrow_left</i>
          </div>
        </template>
        <template v-for="(step, index) in steps" :key="index">
          <div
            :class="['step', isStepActive(index, step)]"
            :style="{ width: `${100 / steps.length}%` }"
          >
            <div class="circle">
              <i class="material-icons md-18">
                {{ step.completed ? "done" : step.icon }}
              </i>
            </div>
            <div class="step-title">
              <h4>{{ step.title }}</h4>
              <h5 class="step-subtitle">{{ step.subtitle }}</h5>
            </div>
          </div>
        </template>
        <div
          v-if="topButtons"
          :class="[
            'stepper-button-top next',
            // !canContinue ? 'deactivated' : '',
          ]"
          @click="nextStep()"
        >
          <i class="material-icons">keyboard_arrow_right</i>
        </div>
      </div>
    </div>
    <div class="content">
      <transition
        :enter-active-class="enterAnimation"
        :leave-active-class="leaveAnimation"
        mode="out-in"
      >
        <!--If keep alive-->
        <keep-alive v-if="keepAliveData">
          <component
            :is="steps[currentStep.index].component"
            :clickedNext="nextButton[currentStep.name]"
            @can-continue="proceed"
            @change-next="changeNextBtnValue"
            :current-step="currentStep"
          ></component>
        </keep-alive>
        <!--If not show component and destroy it in each step change-->
        <component
          v-else
          :is="steps[currentStep.index].component"
          :clickedNext="nextButton[currentStep.name]"
          @can-continue="proceed"
          @change-next="changeNextBtnValue"
          :current-step="currentStep"
        ></component>
      </transition>
    </div>
    <div :class="['bottom', currentStep.index > 0 ? '' : 'only-next']">
      <div
        v-if="currentStep.index > 0"
        class="stepper-button previous"
        @click="backStep()"
      >
        <i class="material-icons">keyboard_arrow_left</i>
        <!-- <span>{{ "back" | translate(locale) }}</span> -->
        Back
      </div>
      <div
        :class="['stepper-button next', !canContinue ? 'deactivated' : '']"
        @click="nextStep()"
      >
        Next
        <!-- <span>{{ finalStep  ? "finish" : "next" | translate(locale) }}</span> -->
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  </div>
</template>

<script>
import translations from "./Translations.js";

export default {
  filters: {
    translate: function (value, locale) {
      return translations[locale][value];
    },
  },

  props: {
    locale: {
      type: String,
      default: "en",
    },
    topButtons: {
      type: Boolean,
      default: false,
    },
    steps: {
      type: Array,
      default: function () {
        return [
          {
            icon: "done",
            name: "first",
            title: "Sample title 1",
            subtitle: "Subtitle sample",
          },
          {
            icon: "done",
            name: "second",
            title: "Sample title 2",
            subtitle: "Subtitle sample",
          },
        ];
      },
    },
    keepAlive: {
      type: Boolean,
      default: true,
    },
    reset: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      currentStep: {},
      previousStep: {},
      nextButton: {},
      canContinue: false,
      finalStep: false,
      keepAliveData: this.keepAlive,
    };
  },

  computed: {
    enterAnimation() {
      if (this.currentStep.index < this.previousStep.index) {
        return "animated quick fadeInLeft";
      } else {
        return "animated quick fadeInRight";
      }
    },
    leaveAnimation() {
      if (this.currentStep.index > this.previousStep.index) {
        return "animated quick fadeOutLeft";
      } else {
        return "animated quick fadeOutRight";
      }
    },
  },

  methods: {
    isStepActive(index, step) {
      if (this.currentStep.index === index) {
        return "activated";
      } else {
        return "deactivated";
      }
    },

    activateStep(index, back = false) {
      if (this.steps[index]) {
        this.previousStep = this.currentStep;
        this.currentStep = {
          name: this.steps[index].name,
          index: index,
        };

        if (index + 1 === this.steps.length) {
          this.finalStep = true;
        } else {
          this.finalStep = false;
        }

        if (!back) {
          this.$emit("completed-step", this.previousStep);
        }
      }
      this.$emit("active-step", this.currentStep);
    },

    nextStepAction() {
      this.nextButton[this.currentStep.name] = true;
      if (this.canContinue) {
        if (this.finalStep) {
          this.$emit("stepper-finished", this.currentStep);
        }
        let currentIndex = this.currentStep.index + 1;

        this.activateStep(currentIndex);
      }
      this.canContinue = false;
      this.$forceUpdate();
    },

    nextStep() {
      if (!this.$listeners || !this.$listeners["before-next-step"]) {
        this.nextStepAction();
      }

      this.canContinue = false;

      this.$emit(
        "before-next-step",
        { currentStep: this.currentStep },
        (next = true) => {
          this.canContinue = true;
          if (next) {
            this.nextStepAction();
          }
        }
      );
    },
    backStep() {
      this.$emit("clicking-back");
      let currentIndex = this.currentStep.index - 1;
      if (currentIndex >= 0) {
        this.activateStep(currentIndex, true);
      }
    },

    proceed(payload) {
      this.canContinue = payload.value;
    },

    changeNextBtnValue(payload) {
      this.nextButton[this.currentStep.name] = payload.nextBtnValue;
      this.$forceUpdate();
    },

    init() {
      // Initiate stepper
      this.activateStep(0);
      this.steps.forEach(step => {
        this.nextButton[step.name] = false;
      });
    },
  },

  watch: {
    reset(val) {
      if (!val) {
        return;
      }

      this.keepAliveData = false;

      this.init();
      this.previousStep = {};

      this.$nextTick(() => {
        this.keepAliveData = this.keepAlive;
        this.$emit("reset", true);
      });
    },
  },

  created() {
    this.init();
  },
};
</script>

<style scoped>
.stepper-box {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  min-height: 200px;
  border-radius: 33px;
}
.stepper-box .top {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.stepper-box .top .stepper-button-top {
  z-index: 20;
  padding: 0.4rem;
  border-radius: 100rem;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stepper-box .top .stepper-button-top.next {
  border: 2px solid #3383c8;
  color: #3383c8;
  right: 1%;
}
.stepper-box .top .stepper-button-top.next.deactivated {
  border: 2px solid #ccc !important;
  color: #ccc;
  cursor: not-allowed !important;
}
.stepper-box .top .stepper-button-top.previous {
  color: #333;
  left: 1%;
}
.stepper-box .top .divider-line {
  border-bottom: 1px solid #ccc;
  height: 2px;
  position: absolute;
}
@media (max-width: 767px) {
  .stepper-box .top .divider-line {
    width: 90%;
  }
}
.stepper-box .top .steps-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 95%;
  left: 0;
  padding: 2% 4%;
}
@media (max-width: 767px) {
  .stepper-box .top .steps-wrapper {
    width: 90%;
    justify-content: center;
  }
}
.stepper-box .top .steps-wrapper .step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
@media (max-width: 767px) {
  .stepper-box .top .steps-wrapper .step {
    width: 100% !important;
  }
}
@media (max-width: 767px) {
  .stepper-box .top .steps-wrapper .step.deactivated {
    display: none;
  }
}
.stepper-box .top .steps-wrapper .step.deactivated .circle i {
  background-color: #bbb !important;
}
.stepper-box .top .steps-wrapper .step.deactivated .step-title {
  opacity: 0.35;
}
.stepper-box .top .steps-wrapper .step .circle {
  margin-bottom: 1rem;
  padding: 0 1rem;
  background-color: white;
}
.stepper-box .top .steps-wrapper .step .circle i {
  background-color: #3383c8;
  color: #fff;
  border-radius: 100rem;
  padding: 1rem;
}
.stepper-box .top .steps-wrapper .step .step-title {
  position: absolute;
  top: 90%;
  width: 100%;
}
.stepper-box .top .steps-wrapper .step .step-title h1,
.stepper-box .top .steps-wrapper .step .step-title h2,
.stepper-box .top .steps-wrapper .step .step-title h3,
.stepper-box .top .steps-wrapper .step .step-title h4,
.stepper-box .top .steps-wrapper .step .step-title h5 {
  margin: 0 0 0.2rem 0;
  color: #333;
  font-weight: bold;
}
.stepper-box .top .steps-wrapper .step .step-title .step-subtitle {
  font-weight: lighter;
  margin: 0;
  color: #555;
}
.stepper-box .content {
  overflow: hidden;
  margin: 1.5rem 0;
}
.stepper-box .bottom {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-top: 1px solid #ccc;
}
.stepper-box .bottom.only-next {
  justify-content: flex-end;
}
.stepper-box .bottom .stepper-button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stepper-box .bottom .stepper-button.next {
  background-color: #3383c8;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.stepper-box .bottom .stepper-button.next.deactivated {
  background-color: #ccc !important;
  cursor: not-allowed !important;
}
.stepper-box .bottom .stepper-button.previous {
  color: #333;
}

/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
      format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  /* -webkit-font-feature-settings: "liga"; */
  -webkit-font-smoothing: antialiased;
}
.stepper-box .bottom .stepper-button {
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
}
.stepper-box .bottom .stepper-button.next {
  border: 1px solid #e53935;
  border-radius: 15px;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  cursor: pointer;
  background: #e53935;
}
</style>