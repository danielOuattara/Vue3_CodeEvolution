<template>
  <h2>Username is : {{ this.username }}</h2>
  <Component_C
/></template>

<script>
import Component_C from "./components/Component_C.vue";
export default {
  name: "App",
  components: {
    Component_C,
  },

  data() {
    return {
      username: "Daniel",
    };
  },

  // provide: {
  //   name: "Daniel",
  // },
  provide() {
    return {
      name: this.username,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
