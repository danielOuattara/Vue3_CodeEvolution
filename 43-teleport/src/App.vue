<template>
  <teleport to="#portal"><Portal /></teleport
></template>

<script>
import Portal from "./components/Portal.vue";
export default {
  name: "App",
  components: {
    Portal,
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
