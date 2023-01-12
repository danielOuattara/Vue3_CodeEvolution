<template>
  <h1>http get with axios</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: { _limit: 30 },
        },
      );
      console.log("response = ", response);
      this.posts = response.data;
    },
  },
  created() {
    this.getData();
  },
  // mounted() {
  //   this.getData();
  // },
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
h1 {
  font-size: 24px;
}
</style>
