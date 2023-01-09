<template>
  <div>
    <h2 v-bind="$attrs">Article Title: {{ title }}</h2>
    <p>Likes: {{ likes }}</p>
    <p>Publihed: {{ isPublished ? "Yes" : "No" }}</p>
  </div>
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
  inheritAttrs: false,
};
</script>

<style scoped></style>
