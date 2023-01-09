<template>
  <Article id="my-article" :likes="50" :isPublished="true" />
</template>

<script>
import Article from "./components/Article.vue";
export default {
  name: "App",
  components: {
    // BlogPost,
    // Greet,
    Article,
  },
  data() {
    return {
      name: "Vishwas",
      channel: "CodeEvolution",
      title: "The wind of the South",
      likes: 34,
      isPublished: true,
    };
  },

  methods: {
    showTime() {
      return new Date().toString();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
