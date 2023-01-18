<!--

    Mixins in 4steps:

    1 - create a mixins folder and a JS file containing the logic to be shared
    2 - import the JS file int a component where needed
    3 - in this compoment remove all the code that will be replaced by the mixins
    4 - declare "mixins: []" in the component logic and add the name of the imported mixins

    Note: 
    1. many properties can be in the mixin logic: data, comptuted, methods, watcher, life cycle hooks, ...etc
    2. logic in the component has higher priority over logic in the mixins
 -->

<template>
  <ClickCounter />
  <HoverCounter />
</template>

<script>
import ClickCounter from "./components/ClickCounter.vue";
import HoverCounter from "./components/HoverCounter.vue";
export default {
  name: "App",
  components: { ClickCounter, HoverCounter },
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
