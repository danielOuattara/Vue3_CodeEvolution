<template>
  <input type="text" placeholder="First name" v-model="fName" />
  <input type="text" placeholder="Last name" v-model="lName" />
  <h2>Options API : fullname is {{ fullName }}</h2>

  <hr />
  <br />

  <input type="text" placeholder="First name" v-model="ref_firstName" />
  <input type="text" placeholder="Last name" v-model="ref_lastName" />
  <h2>Composition API ref : fullname is {{ ref_fullName }}</h2>

  <hr />
  <br />

  <input type="text" placeholder="First name" v-model="reactive_firstName" />
  <input type="text" placeholder="Last name" v-model="reactive_lastName" />
  <h2>Composition API reactive : fullname is {{ reactive_fullName }}</h2>
</template>

<script>
import { reactive, ref, toRefs, computed } from "vue";

export default {
  setup() {
    //--------------------------
    /* ref */
    const ref_firstName = ref("");
    const ref_lastName = ref("");

    const ref_fullName = computed(function() {
      return `${ref_firstName.value} ${ref_lastName.value}`;
    });
    console.log("ref_fullName = ", ref_fullName);

    //---------------------------
    /* reactive */
    const state = reactive({ reactive_firstName: "", reactive_lastName: "" });
    const reactive_fullName = computed(function() {
      return `${state.reactive_firstName} ${state.reactive_lastName}`;
    });

    //---------------------------
    return {
      ref_firstName,
      ref_lastName,
      ref_fullName,
      ...toRefs(state),
      reactive_fullName,
    };
  },

  //----------------------------------
  data() {
    return {
      fName: "",
      lName: "",
    };
  },

  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
