<template>
  <template v-for="name in names" :key="name">
    <h2 v-if="name.includes('Doe')">
      {{ name }}
    </h2>
  </template>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      names: ['John Doe', 'Jana Doe', 'Amel', 'Kent Molton', 'DJ Kaloudji'],
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
