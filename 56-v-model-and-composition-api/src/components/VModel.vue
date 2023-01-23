<template>
  <!-- Options API -->
  <input type="text" placeholder="First name" v-model="fName" />
  <input type="text" placeholder="Last name" v-model="lName" />

  <hr />
  <br />
  <!-- Composition API -->
  <input type="text" placeholder="Hero name" v-model="heroName" />
  <input type="text" placeholder="First name" v-model="firstName" />
  <input type="text" placeholder="Last name" v-model="lastName" />
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "VModel",
  setup() {
    const heroName = ref("");
    const state = reactive({ firstName: "", lastName: "" });
    return { heroName, ...toRefs(state) };
  },

  data() {
    return {
      fName: "",
      lName: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
