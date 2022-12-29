<template>
  <h2 class="underline">Underline text</h2>
  <h2 class="underline" v-bind:class="status">Status text</h2>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted movies</h2>
  <h2 v-bind:class="isSoldOut ? 'soldOut' : 'newMovie'">One movies</h2>
  <h2 v-bind:class="['newMovie', 'promoted']">Newly promoted movies</h2>
  <h2
    v-bind:class="[
      isPromoted && 'promoted',
      isSoldOut ? 'soldOut' : 'newMovie',
    ]"
  >
    Array conditionnal movie
  </h2>
  <h2
    v-bind:class="{
      promoted: isPromoted,
      newMovie: !isPromoted,
      soldOut: isSoldOut,
    }"
  >
    Object conditionnal movie
  </h2>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      status: 'danger',
      isPromoted: true,
      isSoldOut: true,
      movies: [],
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
.underline {
  text-decoration: underline;
}

.danger {
  border: 2px solid red;
  display: inline-block;
  margin: 1rem;
  padding: 0.5rem 1rem;
}

.success {
  border: 2px solid green;
  display: inline-block;
  margin: 1rem;
  padding: 0.5rem 1rem;
}
.promoted {
  font-style: italic;
  font-weight: 300;
}
.newMovie {
  color: green;
}
.soldOut {
  color: orange;
}
</style>
