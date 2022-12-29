<template>
  <h2 v-for="name in names" :key="name">{{ name }}</h2>

  <!--  -->
  <hr />

  <h2 v-for="(name, index) in names" :key="name">{{ index }}: {{ name }}</h2>

  <!--  -->
  <hr />

  <h2 v-for="name in fullNames" :key="name">
    {{ name.firstName }} {{ name.lastName }}
  </h2>

  <!--  -->
  <hr />

  <template v-for="actor in actors" :key="actor">
    <h2>{{ actor.name }}</h2>
    <ul>
      <li v-for="movie in actor.movies" :key="movie">{{ movie }}</li>
    </ul>
  </template>

  <!--  -->
  <hr />

  <h2 v-for="(value, key, index) in infos" :key="value">
    {{ value }} - {{ key }} - {{ index }}
  </h2>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      names: ['Daniel', 'Julie', 'Gaia', 'Amaya'],

      fullNames: [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Janna', lastName: 'Alexander' },
        { firstName: 'Bob', lastName: 'Martin' },
      ],

      actors: [
        { name: 'Christain Bale', movies: ['Batman', 'The prestige'] },
        { name: 'Di Caprio', movies: ['Titanic', 'Inception'] },
      ],

      infos: {
        name: 'Code Evolution',
        course: 'Vue 3',
        media: 'Youtube',
      },
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
