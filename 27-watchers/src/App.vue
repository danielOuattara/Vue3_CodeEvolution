<template>
  <h2>Volume tracker (0 - 20)</h2>
  <h3>Current Volume: {{ volume }}</h3>

  <div>
    <button @click="volume -= 2">Decrease</button>
    &nbsp;
    <button @click="volume += 2">Increase</button>
  </div>
</template>

<script>
/* HOw read and write to a computed property */
export default {
  name: "App",
  components: {},
  data() {
    return {
      volume: 0,
    };
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue > 15) {
        alert("Caution: Do not damage your ears");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
