<template>
 <button @click="this.fetchData">Load posts</button>
 <p v-if="this.fetchError">{{ this.fetchError }}</p>
 <div v-for="post in this.listOfPosts" :key="post">
  <p>{{ post.title }}</p>
  <p>{{ post.id }}</p>
 </div>
 <hr />
 <br />
 <ul>
  <li v-for="person in this.posts" :key="person.id">{{ person.title }}</li>
 </ul>
</template>

<script>
import axios from "axios";
export default {
 props: ["posts"],

 data() {
  return {
   listOfPosts: [],
   fetchError: "",
  };
 },

 methods: {
  fetchData() {
   axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => (this.listOfPosts = response.data))
    .catch((error) => {
     this.fetchError = error.message;
    });
  },
 },

 created() {
  this.fetchData();
 },
};
</script>

<style lang="scss" scoped></style>
