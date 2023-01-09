<template>
  <h2>Article Title: {{ title }}</h2>
  <p>Likes: {{ likes }}</p>
  <p>Publihed: {{ isPublished ? "Yes" : "No" }}</p>
</template>

<script>
export default {
  name: "Article",
  props: {
    title: {
      type: String,
      required: true,
      default: "The title here",
    },
    likes: Number,
    isPublished: Boolean,
  },
};
</script>

<style scoped></style>
