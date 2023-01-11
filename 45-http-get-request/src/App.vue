<template>
  <h1>http get with axios</h1>
  <PostList :posts="this.posts" />
</template>

<script>
import axios from "axios";
import PostList from "./components/PostList.vue";
export default {
  name: "App",
  components: {
    PostList,
  },
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
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
          params: {
            _limit: 30,
          },
        },
      );
      // console.log("response = ", response);
      this.posts = response.data;
    },
  },
  mounted() {
    this.getData();
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
h1 {
  font-size: 24px;
}
</style>
