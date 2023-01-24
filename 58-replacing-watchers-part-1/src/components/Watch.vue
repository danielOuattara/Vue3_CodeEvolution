<template>
  <div>
    <!-- options API -->
    <p>
      <input type="text" placeholder="Name" v-model="name" />
    </p>

    <!-- composition API -->
    <p>
      <input type="text" placeholder="firstName" v-model="firstName" />
      <input type="text" placeholder="lastName" v-model="lastName" />
    </p>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Watch",
  setup() {
    const firstName = ref("");
    const lastName = ref("Wayne");

    // watch for single parameter
    const stopWatch = watch(firstName, (newValue, oldValue) => {
      console.log(("old value", oldValue));
      console.log(("new value", newValue));
    });

    // watch for multiple paramaters in a array: OK
    // const stopWatch2 = watch(
    //   [firstName, lastName],
    //   (newValue, oldValue) => {
    //     console.log(("firstName old value", oldValue[0]));
    //     console.log(("firstName new value", newValue[0]));

    //     console.log(("lastName old value", oldValue[1]));
    //     console.log(("lastName new value", newValue[1]));
    //   },
    //   { immediate: true },
    // );

    // watch for multiple paramaters in a array
    const stopWatch3 = watch(
      [firstName, lastName],
      (newValue, oldValue) => {
        console.log(("firstName old value", oldValue));
        console.log(("firstName new value", newValue));
      },
      { immediate: true },
    );

    return { firstName, lastName, stopWatch, /* stopWatch2, */ stopWatch3 };
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
