<template>
  <h4>App component text</h4>
  <ChildStyles> <h4>Hello world</h4></ChildStyles></template
>

<script>
import ChildStyles from "./components/ChildStyles.vue";
export default {
  name: "App",
  components: {
    ChildStyles,
  },

  data() {
    return {
      name: "",
    };
  },

  methods: {},
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
h4 {
  color: orange;
}
</style>
