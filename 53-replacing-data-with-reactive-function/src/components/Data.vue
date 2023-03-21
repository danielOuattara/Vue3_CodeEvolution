<template>
  <h2>Options API - {{ o_firstName }} {{ o_lastName }} is {{ o_heroName }}</h2>
  <h2>Composition API - {{ greetings }}</h2>
  <h2>Composition API - {{ heroPerson }}</h2>
  <h2>Composition API - {{ sameHeroPerson }}</h2>
  <h2>Composition API - {{ colorsList }}</h2>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Data",
  setup() {
    //---------------------------------------------------
    const c_middleName = ref("Daniel");
    console.log("c_middleName = ", c_middleName);

    c_middleName.value = "Julie";
    const greetings = `Hello ${c_middleName.value}`;

    //----------------------------------------------------
    const c_firstName = ref("Bruce");
    const c_lastName = ref("Wayne");
    const c_heroName = ref("batman");
    const heroPerson = `${c_firstName.value} ${c_lastName.value} ${c_heroName.value}`;

    //----------------------------------------------------
    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
      heroName: "Batman",
    });
    const sameHeroPerson = `${state.firstName} ${state.lastName} ${state.heroName}`;
    console.log("sameHeroPerson = ", sameHeroPerson);

    console.log("state = ", state);
    console.log("state.firstName = ", state.firstName);

    const colors = reactive(["red", "blue", "green"]);
    const colorsList = `${colors[0]}, ${colors[1]}, ${colors[2]}`;
    //----------------------------------------------------

    return { c_middleName, greetings, heroPerson, sameHeroPerson, colorsList };
  },
  data() {
    return {
      o_firstName: "Bruce",
      o_lastName: "Wayne",
      o_heroName: "Batman",
    };
  },
};
</script>
