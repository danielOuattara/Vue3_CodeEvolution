<template>
  <!-- demo reacativity here -->
  <h2>{{ userOne }}</h2>
  <h2>{{ userTwo }}</h2>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Demo-1",
  setup() {
    //-------------------------
    let userOne = "Daniel";
    console.log(userOne);
    setTimeout(() => {
      userOne = "Ouattara";
      console.log(userOne);
    }, 1000);

    //-------------------------
    let userTwo = ref("Julie");
    console.log(userTwo.value);
    setTimeout(() => {
      userTwo.value = "Lena";
      console.log(userTwo.value);
    }, 2000);

    return { userOne, userTwo };
  },
};
</script>

<style scoped></style>
