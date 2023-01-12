<template>
  <h1>http post with axios</h1>
  <CreatePost />
</template>

<script>
import axios from "axios";
import CreatePost from "./components/CreatePost.vue";
export default {
  name: "App",
  components: {
    CreatePost,
  },
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async postData() {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
          method: "POST",
          body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
          }),
        },
      );
      console.log("response = ", response);
      this.posts = response.data;
    },
  },
  mounted() {
    // this.postData();
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
