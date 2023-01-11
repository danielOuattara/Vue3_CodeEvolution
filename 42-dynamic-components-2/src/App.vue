<template>
  <p>
    <button @click="active = 'TabA'">Tab A</button>
    <button @click="active = 'TabB'">Tab B</button>
    <button @click="active = 'TabC'">Tab C</button>
  </p>

  <keep-alive>
    <component :is="active"></component>
  </keep-alive>
</template>

<script>
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";
export default {
  name: "App",
  components: {
    TabA,
    TabB,
    TabC,
  },

  data() {
    return {
      active: "TabA",
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
