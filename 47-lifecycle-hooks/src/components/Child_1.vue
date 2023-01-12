<template>
  <div><p>Child 1 Component</p></div>
</template>

<script>
export default {
  name: "Child_1",

  beforeCreate() {
    console.log("Child 1 : beforeCreate()");
  },

  created() {
    console.log("Child 1 : created()");
  },

  beforeMount() {
    console.log("Child 1 : beforeMount()");
  },

  mounted() {
    console.log("Child 1 : mounted()");
  },

  beforeUpdate() {
    console.log("Child 1 : beforeUpdate()");
  },

  updated() {
    console.log("Child 1 : updated()");
  },

  beforeUnmount() {
    console.log("Child 1 : beforeUnmount()");
  },

  unmounted() {
    console.log("Child 1 : unmounted()");
  },
};
</script>

<style lang="scss" scoped></style>
