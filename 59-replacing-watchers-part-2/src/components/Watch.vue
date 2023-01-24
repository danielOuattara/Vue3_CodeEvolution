<template>
  <div>
    <!-- options API -->
    <p>
      <input type="text" placeholder="Name" v-model="name" />
    </p>

    <br />
    <hr />

    <!-- composition API ref function-->
    <p>
      <input type="text" placeholder="ref firstName" v-model="firstName" />
      <input type="text" placeholder="ref lastName" v-model="lastName" />
    </p>

    <br />
    <hr />

    <!-- composition API reactive function-->
    <p>
      <input type="text" placeholder="reactive fName" v-model="fName" />
      <input type="text" placeholder="reactive lName" v-model="lName" />
      <input
        type="text"
        placeholder="reactive heroName"
        v-model="options.heroName"
      />
    </p>
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
export default {
  name: "Watch",
  setup() {
    /* reactive
    -------------- */
    const state = reactive({
      fName: "",
      lName: "",
      options: {
        heroName: "",
      },
    });

    // // watcher for all the state properties
    // watch(
    //   () => ({ ...state }),
    //   (newValue, oldValue) => {
    //     console.log(("fName old value :", oldValue.fName));
    //     console.log(("fName new value :", newValue.fName));
    //     console.log("-----");
    //     console.log(("lName old value", oldValue.lName));
    //     console.log(("lName new value", newValue.lName));
    //     console.log("-----");
    //   },
    // );

    // watch for fName property only
    watch(
      () => state.fName,
      (newValue, oldValue) => {
        console.log("fName old value :", oldValue);
        console.log("fName new value :", newValue);
        console.log("---------------------------");
      },
    );

    // // deep watch in object for heroName property only : OK
    // watch(
    //   () => state.options.heroName,
    //   (newValue, oldValue) => {
    //     console.log("fName old value :", oldValue);
    //     console.log("fName new value :", newValue);
    //     console.log("---------------------------");
    //   },
    // );

    // deep watch in object for heroName property only : OK
    watch(
      () => state.options,
      (newValue, oldValue) => {
        console.log("fName old value :", oldValue);
        console.log("fName new value :", newValue);
        console.log("---------------------------");
      },
      { deep: true },
    );

    /*  ref
    ---------------*/
    const firstName = ref("");
    const lastName = ref("Wayne");

    // watch for single parameter
    const stopWatch = watch(firstName, (newValue, oldValue) => {
      console.log(("old value", oldValue));
      console.log(("new value", newValue));
      console.log("-----");
    });

    // watch for multiple paramaters in a array
    const stopWatch3 = watch(
      [firstName, lastName],
      (newValue, oldValue) => {
        console.log(("firstName old value", oldValue));
        console.log(("firstName new value", newValue));
        console.log("-----");
      },
      { immediate: true },
    );

    return {
      firstName,
      lastName,
      stopWatch,
      /* stopWatch2, */ stopWatch3,
      ...toRefs(state),
    };
  },

  //------------------------------------------------------------------------

  data() {
    return { name: "" };
  },
  watch: {
    name(newValue, oldValue) {
      console.log(("old value", oldValue));
      console.log(("new value", newValue));
    },
  },
};
</script>

<style lang="scss" scoped></style>
