<template>
  <h2>{{ name }}</h2>
  <p>
    <button @click="changeName, incrementationCounter(2, $event)">
      click to change Name
    </button>
  </p>
  <p>
    <button @mouseover="this.name = 'Daniel'">
      mouseover to change Name
    </button>
  </p>
  <p>
    <button @mouseover="name = 'Daniel'">
      mouseover to change Name
    </button>
  </p>
  <p>
    <button
      @mouseover="this.name = this.name === 'Batman' ? 'John Doe' : 'Batman'"
    >
      mouseover to change Name
    </button>
  </p>
  <p>
    <button
      @mouseenter="changeName, incrementCounter($event)"
      @mouseout="changeName"
    >
      mouse enter OR mouse out to change Name
    </button>
  </p>

  <hr />

  <h2>{{ runningCounter }}</h2>
  <p>
    <button @click="incrementCounter">increment Counter</button>
    &nbsp;
    <button @click="resetCounter">reset Counter</button>
    &nbsp;
    <button @click="decrementCounter">decrement Counter</button>
  </p>
  <p>
    <button @click="incrementationCounter(5, $event)">
      increment Counter by 5
    </button>
    &nbsp;
    <button @click="decrementationCounter(5)">
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
    changeName(event) {
      console.log('event = ', event)
      return (this.name = this.name === 'Batman' ? 'John Doe' : 'Batman')
    },
    incrementCounter(event) {
      this.runningCounter++
      console.log('Event = ', event)
    },
    incrementationCounter(number, event) {
      this.runningCounter += number
      console.log('event = ', event)
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
