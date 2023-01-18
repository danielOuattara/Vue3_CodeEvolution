<template>
  <label for="firstname">Firstname :</label>
  <input type="text" name="firstname" id="firstname" ref="firstnameInput" />
  <PostList ref="postListRef" />
</template>

<script>
import PostList from "./PostList.vue";

export default {
  name: "TemplateRef",
  components: { PostList },
  mounted() {
    //   console.log(this.$refs);
    this.$refs.firstnameInput.focus();
    console.log(this.$refs.postListRef);
  },
};
</script>

<style lang="scss" scoped></style>
