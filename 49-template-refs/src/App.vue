<template>
 <TemplateRef />
</template>

<script>
import TemplateRef from "./components/TemplateRef.vue";

export default {
 name: "App",
 components: { TemplateRef },
 data() {
  return {};
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
