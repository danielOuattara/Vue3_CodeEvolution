<template>
  <h2>Volume tracker (0 - 20)</h2>
  <h3>Current Volume: {{ volume }}</h3>

  <div>
    <button @click="volume -= 2">Decrease</button>
    &nbsp;
    <button @click="volume += 2">Increase</button>
  </div>

  <hr />

  <h2>Movie Handler</h2>

  <p>
    <label for="movie">
      Movie :
      <input type="text" name="movie" id="movie" v-model.trim="movie" />
    </label>
  </p>
  <p>
    <label for="movie-info-title">
      Title :
      <input
        type="text"
        name="movie-info-title"
        id="movie-info-title"
        v-model.trim="movieInfo.title"
      />
    </label>
  </p>
  <p>
    <label for="movie-info-actor">
      Actor :
      <input
        type="text"
        name="movie-info-actor"
        id="movie-info-actor"
        v-model.trim="movieInfo.actor"
      />
    </label>
  </p>
  <p>
    <label for="movie-list">
      Add To Movie List :
      <input
        type="text"
        name="movie-list"
        id="movie-list"
        v-model.trim="movieItem"
      />
    </label>
    <button @click="addToMovieList">Click To Add</button>
  </p>
  <ul>
    <li v-for="movie in movieList" :key="movie">{{ movie }}</li>
  </ul>
</template>

<script>
/* HOw read and write to a computed property */
export default {
  name: "App",
  components: {},
  data() {
    return {
      volume: 0,
      movie: "Batman",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["Batman", "Superman"],
      movieItem: "",
    };
  },

  methods: {
    addToMovieList() {
      this.movieList.push(this.movieItem);
      this.movieItem = "";
      return;
    },
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue > 15) {
        alert("Caution: Do not damage your ears");
      }
    },
    // movie(newValue) {
    //   console.log(`Calling API with movie name : ${newValue}`);
    // },
    movie: {
      handler(newValue) {
        console.log(`Calling API with movie name : ${newValue}`);
      },
      immediate: true /* watcher execute only when data change */,
    },

    movieInfo: {
      /* watcher dy default does not watches for changes in deeply nested 
         properties of object, unless deep: true  is set */
      handler(newValue) {
        console.log(
          `Calling API with movie title : ${newValue.title} and actor= ${newValue.actor}`,
        );
      },
      deep: true,
    },

    movieList: {
      deep: true,
      handler(newValue) {
        console.log(`Calling API with new movie title : ${newValue}`);
      },
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
