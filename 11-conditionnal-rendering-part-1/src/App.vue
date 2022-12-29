<template>
  <h2 v-if="number === 0">The number is zero</h2>
  <h2 v-else-if="number < 0">The number is negative</h2>
  <h2 v-else-if="number > 0">The number is positive</h2>
  <h2 v-else>The number is NOT a number</h2>
  <h2>{{ number }}</h2>

  <hr />

  <!-- This technique adds a supplementary div element inthe DOM  -->
  <div v-if="display">
    <h2>Daniel</h2>
    <h2>Fullstack Developper</h2>
    <h2>Vue React Node Python</h2>
  </div>

  <!-- This technique does not add any suplementary elementin the DOM -->
  <template v-if="display">
    <h2>Daniel</h2>
    <h2>Fullstack Developper</h2>
    <h2>Vue React Node Python</h2>
  </template>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      number: 'hello',
      display: true,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
