<template>
  <Person />
</template>

<script>
import Person from "./components/Person.vue";

export default {
  name: "App",
  components: {
    Person,
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
