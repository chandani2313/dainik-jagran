import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/",
      name: "overview",
      component: () => import("../components/tournament/Overview.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/prize",
      name: "prize",
      component: () => import("../components/tournament/Prize.vue"),
    },
    {
      path: "/rules",
      name: "rules",
      component: () =>
        import(
          /* webpackChunkName: "Rules&Regulation" */ "../components/tournament/Rules&Regulation.vue"
        ),
      redirect: { name: "Format" },
      children: [
        {
          path: "format",
          name: "Format",
          component: () =>
            import(
              /* webpackChunkName: "Format" */ "../components/rules/Format.vue"
            ),
        },
        {
          path: "game-settings",
          name: "GameSettings",
          component: () =>
            import(
              /* webpackChunkName: "GameSettings" */ "../components/rules/GameSettings.vue"
            ),
        },
        {
          path: "player-eligibility",
          name: "PlayerEligibility",
          component: () =>
            import(
              /* webpackChunkName: "PlayerEligibility" */ "../components/rules/PlayerEligibility.vue"
            ),
        },
      ],
    },
    {
      path: "/bracket",
      name: "bracket",
      component: () => import("../components/tournament/Bracket.vue"),
    },
    {
      path: "/schedule",
      name: "schedule",
      component: () => import("../components/tournament/Schedule.vue"),
    },
    {
      path: "/support",
      name: "support",
      component: () => import("../components/tournament/Support.vue"),
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("../components/popup/Form.vue"),
    },
    // {
    //   path: "/stepper",
    //   name: "Stepper",
    //   component: () => import("../components/stepper/Stepper.vue"),
    // },
    {
      path: "/register",
      name: "NewStepper",
      component: () => import("../components/tournament/Home.vue"),
    },
    {
      path: "/success",
      name: "Success",
      component: () => import("../components/popup/Success.vue"),
    },
    {
      path: "/retry",
      name: "Retry",
      component: () => import("../components/popup/Retry.vue"),
    },
  ],
});

export default router;
