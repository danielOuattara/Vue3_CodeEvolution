<template>
  <!-- 
    <p>
    <button @click="active = 'tabA'">Tab A</button>
    <button @click="active = 'tabB'">Tab B</button>
    <button @click="active = 'tabC'">Tab C</button>
  </p>
  <TabA v-if="active === 'tabA'"></TabA>
  <TabB v-if="active === 'tabB'"></TabB>
  <TabC v-if="active === 'tabC'"></TabC>
   -->
  <!-- ---------------------------------------------------- -->
  <p>
    <button @click="active = 'TabA'">Tab A</button>
    <button @click="active = 'TabB'">Tab B</button>
    <button @click="active = 'TabC'">Tab C</button>
  </p>

  <component :is="active"></component>

  <!-- ---------------------------------------------------- -->

  <!-- TODO: complete by avoiding button repetitions -->
  <!-- <p>
    
    <button
      v-for="item in this.buttonList"
      :key="item"
      @click="this.activator()"
    >
      {{ item }}
    </button>
  </p>
  <component :is="active"></component> -->
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
      // buttonList: ["tabA", "tabB", "tabC"],
    };
  },

  methods: {
    // activator(arg) {
    //   this.active = arg;
    // },
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
