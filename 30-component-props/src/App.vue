<template>
  <Greet name="Daniel" heroName=" Batman" />
  <Greet name="John" heroName="Superman" />
  <Greet name="Jana" heroName="Wonder woman" />
  <Greet :name="this.name" :heroName="this.channel" />
</template>

<script>
import Greet from "./components/Greet.vue";
export default {
  name: "App",
  components: {
    Greet,
  },
  data() {
    return {
      name: "Vishwas",
      channel: "CodeEvolution",
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
