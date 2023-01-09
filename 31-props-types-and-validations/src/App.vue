<template>
  <BlogPost title="My journey with Vue" :showTime="showTime" />

  <!-- Dynamically assign the value of a variable -->
  <BlogPost
    :title="post.title"
    :likes="this.likes"
    :isPublished="this.isPublished"
    :commentsId="this.commentsId"
    :author="this.author"
  />

  <!-- Dynamically assign the value of a complex expression -->
  <BlogPost
    :title="post.title + ' by ' + post.author.name"
    :likes="this.post.likes"
    :isPublished="this.post.isPublished"
    :commentsId="this.post.commentsId"
    :author="this.post.author"
  />

  <hr />

  <Greet name="Daniel" heroName=" Batman" />
  <Greet name="John" heroName="Superman" />
  <Greet name="Jana" heroName="Wonder woman" />
  <Greet :name="this.name" :heroName="this.channel" />

  <hr />

  <Article :title="this.title" :likes="50" :isPublished="true" />
</template>

<script>
import BlogPost from "./components/BlogPost.vue";
import Article from "./components/Article.vue";
import Greet from "./components/Greet.vue";
export default {
  name: "App",
  components: {
    BlogPost,
    Greet,
    Article,
  },
  data() {
    return {
      name: "Vishwas",
      channel: "CodeEvolution",
      title: "The wind of the South",
      likes: 34,
      isPublished: true,
      commentsId: [234, 264, 274],
      author: {
        name: "Gaïa Nihahsah",
        lastName: "Ouattara",
        country: "France",
      },
      post: {
        title: "Super Blog Title",
        author: {
          name: "Daniel",
          lastName: "Ouattara",
          country: "Burkian-Faso",
        },
        likes: 43,
        isPublished: true,
        commentsId: [32, 62, 72],
      },
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
