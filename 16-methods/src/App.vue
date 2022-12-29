<template>
  <p>Adder method output: {{ adder() }}</p>
  <p>Adder2 method output: {{ adder2(2, 5, 9) }}</p>
  <p>multiplicator method output: {{ multiplicator(12) }}</p>
  <p>multiplicator method output: {{ multiplicator(9) }}</p>
  <p>multiplicator method output: {{ multiplicator(five) }}</p>
</template>

<script>
export default {
  name: 'App',
  components: {},

  data() {
    return {
      multiplier: 3,
      five: 5,
    }
  },

  methods: {
    adder() {
      return 2 + 3 + 4
    },
    adder2(a, b, c) {
      return a + b + c
    },

    multiplicator(number) {
      return this.multiplier * number
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
