<template>
  <main>
    <Home />
  </main>
</template>

<script setup>
import Home from "../components/tournament/Home.vue";
import { ref, onMounted } from "vue";
import CryptoJS from "crypto-js";

onMounted(() => {
  console.log("data mount", myObj.value);
  let signature = computeSignature(myObj.value);
});

const myObj = ref({
  userid: "1234567890 from piano",
  email: "test@test.comfrompiano",
  firstname: "Test User from piano",
  lastname: "Last Name from piano",
  family_name: "family name from piano",
  given_name: "Given Name frompiano",
  sub: "sub from piano",
  login_timestamp: "time stamp from piano",
});
// const myObj = ref({})
// let signature = computeSignature(myObj)

function computeSignature(data) {
  // console.log("data", data);
  let jsonData = JSON.stringify(data);
  let secret_key = "CnFQpjNs6qUa/KqSlFeB8VAgU9KDebMbdx8tLLbM2h8=";
  let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secret_key);
  hmac.update(jsonData);
  let hash = hmac.finalize();
  // console.log("hash value", btoa(hash))
  return btoa(hash);
}
</script>
