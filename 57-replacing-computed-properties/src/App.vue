<template>
  <Computed />
</template>

<script>
import Computed from "./components/Computed.vue";

export default {
  name: "App",
  components: {
    Computed,
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
