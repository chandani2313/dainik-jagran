<template>
  <div>
    <!--Example dependecies-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css"
    />
    <!-- <a :href="repoUrl"
      ><img
        style="position: absolute; top: 0; right: 0; border: 0"
        src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
    /></a> -->

    <!--Example Elements-->
    <!-- <section class="hero">
      <div class="hero-body" style="padding: 1rem 0">
        <div class="container">
          <div class="columns">
            <div
              class="column is-8 is-offset-3"
              style="display: flex; align-items: center"
            >
              <div class="is-pulled-left">
                <img width="350px" src="@/assets/logo.svg" >
              </div>
              <div class="is-pulled-left" style="text-align: left">
                <h1
                  class="title text-medium-grey"
                  style="margin-bottom: 0.5rem"
                >
                  Stepper
                </h1>
                <hr class="is-marginless" />
                <h2 class="subtitle text-light-grey" style="margin-top: 0.5rem">
                  A Vue Component
                  <span class="is-pulled-right">
                    Place this tag where you want the button to render.
                    <a
                      class="github-button"
                      href="https://github.com/PygmySlowLoris/vue-stepper"
                      data-icon="octicon-star"
                      data-size="large"
                      aria-label="Star PygmySlowLoris/vue-stepper on GitHub"
                      >Star</a
                    >
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="section placement" style="padding-top: 0.5rem">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <horizontal-stepper
              :steps="demoSteps"
              @completed-step="completeStep"
              :top-buttons="true"
              @active-step="isStepActive"
              @stepper-finished="successMesg"
            ></horizontal-stepper>
          </div>
        </div>
        <!-- <div class="successfull_message" v-show="visible">
          <h2>Done</h2>
          <p>Team Created</p>
        </div> -->
      </div>
    </section>
    <!-- 
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Stepper Vue Component</strong> by
            <a :href="teamUrl">Pygmy Team</a>.
          </p>
          <p>
            <small
              >Used dependencies for this demo:
              <a href="http://bulma.io">bulma</a></small
            >
          </p>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script>
import HorizontalStepper from "./HorizontalStepper.vue";

// import FormVue from "./Form.vue";
import StepOne from "./Team.vue";
import StepSecond from "./PlayerFirst.vue";
import StepThird from "./PlayerSecond.vue";
import StepFourth from "./PlayerThird.vue";
import StepFifth from "./PlayerFourth.vue";
import StepSixth from "./PlayerFifth.vue";
import StepSeventh from "./PlayerSixth.vue";
// const teamUrl = "https://github.com/PygmySlowLoris";
// const repoUrl = "https://github.com/PygmySlowLoris/vue-stepper";
export default {
  name: "app",
  components: {
    HorizontalStepper,
  },
  data() {
    return {
      // repoUrl: repoUrl,
      // teamUrl: teamUrl,
      visible: false,
      demoSteps: [
        {
          icon: "person",
          name: "first",
          title: "Team",
          subtitle: "Create team",
          component: StepOne,
          completed: false,
        },
        {
          icon: "person",
          name: "second",
          title: "Player",
          subtitle: "First player",
          component: StepSecond,
          completed: false,
        },
        {
          icon: "person",
          name: "third",
          title: "Player",
          subtitle: "Second player",
          component: StepThird,
          completed: false,
        },
        {
          icon: "person",
          name: "third",
          title: "Player",
          subtitle: "Third player",
          component: StepFourth,
          completed: false,
        },
        {
          icon: "person",
          name: "third",
          title: "Player",
          subtitle: "Fourth player",
          component: StepFifth,
          completed: false,
        },
        {
          icon: "person",
          name: "third",
          title: "Player",
          subtitle: "Fifth player",
          component: StepSixth,
          completed: false,
        },
        {
          icon: "person",
          name: "third",
          title: "Player",
          subtitle: "Sixth player",
          component: StepSeventh,
          completed: false,
        },
      ],
      activeStep: 0,
    };
  },
  computed: {},
  methods: {
    completeStep(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    isStepActive(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    successMesg(payload) {
      // console.log("payload", payload)
      this.visible = true;
    },
  },
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pointer {
  cursor: pointer;
}
h1,
h2 {
  font-weight: normal;
}
hr {
  background-color: transparent;
  border: none;
  display: block;
  height: inherit;
  margin: 1.5rem 0;
  border-top: dashed 1px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0b99b9;
  text-decoration: underline;
}
.placement {
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
}
.text-medium-grey {
  color: #333;
}
.text-light-grey {
  color: #888;
}
.box.formated {
  position: relative;
  padding: 0;
}
.box.formated .heading {
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.8rem 1.5rem;
  background-color: #fafafa;
}
.box.formated .content {
  padding: 1rem 2rem;
}
i.top-left {
  position: absolute;
  left: 1.5rem;
  top: 0.8rem;
}
.vertical-separator {
  display: flex;
  justify-content: space-around;
}
.vertical-separator .line {
  border-right: 1px solid #cccccc;
}
.successfull_message {
  width: 400px;
  height: 300px;
  background: #ffffff;
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
