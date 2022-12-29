<template>
  <h2>{{ name }}</h2>
  <p>
    <button v-on:click="changeName">click to change Name</button>
  </p>
  <p>
    <button v-on:mouseover="this.name = 'Daniel'">
      mouseover to change Name
    </button>
  </p>
  <p>
    <button v-on:mouseover="name = 'Daniel'">
      mouseover to change Name
    </button>
  </p>
  <p>
    <button
      v-on:mouseover="
        this.name = this.name === 'Batman' ? 'John Doe' : 'Batman'
      "
    >
      mouseover to change Name
    </button>
  </p>
  <p>
    <button v-on:mouseenter="changeName" v-on:mouseout="changeName">
      mouse enter OR mouse out to change Name
    </button>
  </p>

  <hr />

  <h2>{{ runningCounter }}</h2>
  <p>
    <button v-on:click="incrementCounter">increment Counter</button>
    &nbsp;
    <button v-on:click="resetCounter">reset Counter</button>
    &nbsp;
    <button v-on:click="decrementCounter">decrement Counter</button>
  </p>
  <p>
    <button v-on:click="incrementationCounter(5)">
      increment Counter by 5
    </button>
    &nbsp;
    <button v-on:click="decrementationCounter(5)">
      decrement Counter by 5
    </button>
  </p>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      name: 'John Doe',
      runningCounter: 0,
    }
  },
  methods: {
    changeName() {
      return (this.name = this.name === 'Batman' ? 'John Doe' : 'Batman')
    },
    incrementCounter() {
      this.runningCounter++
    },
    incrementationCounter(number) {
      this.runningCounter += number
    },
    resetCounter() {
      this.runningCounter = 0
    },
    decrementCounter() {
      this.runningCounter--
    },
    decrementationCounter(number) {
      this.runningCounter -= number
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
