<template>
  <p>Tab C content</p>
  <label for="name">Enter your name : </label>
  <input type="text" v-model="name" name="name" id="name" />
</template>

<script>
export default {
  name: "TabC",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
