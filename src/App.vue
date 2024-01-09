<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
const route = useRoute();
const layout = computed(() => route.meta.layout || DefaultLayout);
</script>

<style>
body {
  background: radial-gradient(#f5f5f5 ,#f5f5f5 );
  /* background: radial-gradient(#18242c, #0f131b); */
  margin: 0;
  /* font-family: 'Agency FB'; */
  font-family: "Exo 2";
  background-attachment: fixed;
  letter-spacing: 0.02rem;
  /* font-family: 'Poppins', sans-serif; */
  font-family: 'Agency FB', sans-serif;
}

img {
  width: 100%;
  display: block;
}
a {
  text-decoration: none;
  color: unset;
}

::-webkit-scrollbar {
  width: 5px;
  background: #0f171e;
}

::-webkit-scrollbar-thumb {
  background: #ffffff50;
  border-radius: 4px;
}
.hidescroll::-webkit-scrollbar {
  width: 5px;
  height: 5px; /* remove scrollbar space */
  background: #ffffff00;
  border-radius: 4px;
}
.hidescroll::-webkit-scrollbar-thumb {
  background: #ffffff1a;
  border-radius: 4px;
}
</style>