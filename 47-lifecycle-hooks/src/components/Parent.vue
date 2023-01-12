<template>
  <div>
    <h2>Parent Component</h2>

    <button @click="showChild_1 = !showChild_1">Toogle Child Component</button>
    <Child_1 v-if="showChild_1" />

    <button @click="showChild_2 = !showChild_2">Toogle Child Component</button>
    <Child_2 v-if="showChild_2" />
  </div>
</template>

<script>
import Child_1 from "./Child_1.vue";
import Child_2 from "./Child_2.vue";
export default {
  name: "Parent",
  components: {
    Child_1,
    Child_2,
  },

  data() {
    return {
      showChild_1: true,
      showChild_2: true,
    };
  },

  beforeCreate() {
    console.log("Parent --> beforeCreate()");
  },

  created() {
    console.log("Parent --> created()");
  },

  beforeMount() {
    console.log("Parent --> beforeMount()");
  },

  mounted() {
    console.log("Parent --> mounted()");
  },

  beforeUpdate() {
    console.log("Parent --> beforeUpdate()");
  },

  updated() {
    console.log("Parent --> updated()");
  },

  beforeUnmount() {
    console.log("Parent --> beforeUnmount()");
  },

  unmounted() {
    console.log("Parent --> unmounted()");
  },
};
</script>

<style lang="scss" scoped></style>
