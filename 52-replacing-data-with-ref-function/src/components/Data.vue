<template>
  <h2>Options API - {{ o_firstName }}</h2>
  <h2>Composition API - {{ c_firstName }}</h2>
  <h2>Composition API - {{ greetings }}</h2>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Data",
  setup() {
    const c_firstName = ref("Daniel");
    console.log("c_firstName = ", c_firstName);

    c_firstName.value = "Julie";
    const greetings = `Hello ${c_firstName.value}`;
    return { c_firstName, greetings };
  },
  data() {
    return {
      o_firstName: "Bruce",
    };
  },
};
</script>
