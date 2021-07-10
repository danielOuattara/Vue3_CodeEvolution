<template>
  <p> {{ greet}} {{ name }}</p>
  <p v-text="job"></p>
  <p v-html="domain"></p>
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
