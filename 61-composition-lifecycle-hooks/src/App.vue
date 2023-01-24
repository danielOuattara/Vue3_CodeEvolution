<template> <OptionsLifeCycle /> <CompositionLifeCycle /> </template>

<script>
import OptionsLifeCycle from "./components/OptionsLifeCycle.vue";
import CompositionLifeCycle from "./components/CompositionLifeCycle.vue";
export default {
  name: "App",
  components: {
    OptionsLifeCycle,
    CompositionLifeCycle,
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
h1 {
  font-size: 24px;
}
</style>
