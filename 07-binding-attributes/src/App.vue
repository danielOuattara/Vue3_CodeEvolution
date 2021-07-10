<template>
  <h1 v-bind:id="headingId">Hello</h1>
  <p> {{ greet}} {{ name }}</p>
  <p v-text="job"></p>
  <p v-html="domain"></p>
  <button v-bind:disabled="isDisabled">Click</button>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      greet: "Hello",
      name: "Daniel",
      job:" engineer",
      domain:"<b>Solar energie</b>",
      headingId: "heading",
      isDisabled: true,
    }
  }
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
