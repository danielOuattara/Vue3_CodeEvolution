<template>
  <!-- <Data />  -->
  <Demo1 />
  <br />
  <hr />
  <Demo2 />
</template>

<script>
// import Data from "./components/Data.vue";
import Demo1 from "./components/Demo-1.vue";
import Demo2 from "./components/Demo-2.vue";

export default {
  name: "App",
  components: {
    // Data,
    Demo1,
    Demo2,
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
