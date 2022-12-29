<template>
  <template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <input type="text" placeholder="Enter Lastname" />
  </template>
  <br />
  <p>
    <button @click="scafold">Scafold</button>
  </p>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      names: ['Daniel', 'Julie', 'Gaia', 'Amaya'],
    }
  },

  methods: {
    scafold() {
      this.names
    },
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
