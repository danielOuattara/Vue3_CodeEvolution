<template>
  <h1>Blog</h1>
  <p v-if="this.title">message: {{ this.title }}</p>
  <p v-if="this.likes">likes: {{ this.likes }}</p>
  <p v-if="this.isPublished">Is published: {{ this.isPublished }}</p>
  <p v-if="this.commentsId">Comment Ids: {{ this.commentsId }}</p>
  <ul v-if="this.commentsId">
    <li v-for="(commentId, index) in this.commentsId" :key="index">
      {{ index }}: {{ commentId }}
    </li>
  </ul>
  <h2 v-if="this.author">
    {{ `${this.author.name} ${this.author.lastName}` }}
  </h2>

  <h3 v-if="this.showTime">{{ showTime() }}</h3>
</template>

<script>
export default {
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentsId: Array,
    author: Object,
    showTime: Function,
  },
  created() {
    console.table(`${this.author}`);
  },
};
</script>

<style></style>
