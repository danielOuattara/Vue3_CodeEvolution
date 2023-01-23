<template>
  <!-- demo reacativity here -->
  <h2>
    {{ `${userThree.firstName} ${userThree.lastName} ${userThree.heroName}` }}
  </h2>
  <h2>
    {{ `${firstName} ${lastName} ${heroName}` }}
  </h2>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Demo-2",
  setup() {
    //-------------------------
    const userThree = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
      heroName: "Batman",
    });
    setTimeout(() => {
      userThree.firstName = "Mathias";
      userThree.lastName = "Bauers";
    }, 2000);

    const userFour = reactive({
      firstName: "John",
      lastName: "Clark",
      hero: "SuperMan",
    });

    return toRefs({
      userThree,
      lastName: userFour.lastName,
      firstName: userFour.firstName,
      heroName: userFour.hero,
    });
  },
};
</script>

<style scoped></style>
