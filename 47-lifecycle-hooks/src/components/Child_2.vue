<template>
  <div><p>Child 2 Component</p></div>
</template>

<script>
export default {
  name: "Child_2",

  beforeCreate() {
    console.log("Child 2 : beforeCreate()");
  },

  created() {
    console.log("Child 2 : created()");
  },

  beforeMount() {
    console.log("Child 2 : beforeMount()");
  },

  mounted() {
    console.log("Child 2 : mounted()");
  },

  beforeUpdate() {
    console.log("Child 2 : beforeUpdate()");
  },

  updated() {
    console.log("Child 2 : updated()");
  },

  beforeUnmount() {
    console.log("Child 2 : beforeUnmount()");
  },

  unmounted() {
    console.log("Child 2 : unmounted()");
  },
};
</script>

<style lang="scss" scoped></style>
