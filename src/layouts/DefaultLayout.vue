<template>
    <TheSidebar />
    <main style="height: 100%">
      <slot />
      <TheFooter />
    </main>
    <!-- <TheCrossPromotion />  -->
</template>

<script setup>
// import { defineComponent } from '@vue/composition-api'
import TheFooter from "../components/default/TheFooter.vue";
import TheSidebar from "../components/default/TheSidebar.vue";
// import TheCrossPromotion from "../components/default/TheCrossPromotion.vue";

// export default defineComponent({
//     setup() {
        
//     },
// })
</script>

<!-- <template>
    <the-navbar />
    <the-sidebar />
    <main style="height: 100%">
      <slot />
    </main>
    <the-crosspromotion />
  </template>
  <script setup>
  import TheSidebar from "../components/default/TheSidebar.vue";
  import TheCrossPromotion from "../components/default/TheCrossPromotion.vue";
  import TheNavbar from "../components/default/TheNavbar.vue";
  import { defineComponent } from "vue";
  
  </script> -->
  
