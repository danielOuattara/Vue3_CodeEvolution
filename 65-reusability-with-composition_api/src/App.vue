<template>
  <ClickCounter />
  <HoverCounter />
</template>

<script>
import HoverCounter from "./components/HoverCounter.vue";
import ClickCounter from "./components/ClickCounter.vue";

export default {
  name: "App",
  components: {
    ClickCounter,
    HoverCounter,
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
