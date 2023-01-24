<template>
  <div><p>Option Component</p></div>
</template>

<script>
export default {
  name: "OptionsLifeCycle",

  beforeCreate() {
    console.log("Option API : beforeCreate()");
  },

  created() {
    console.log("Option API : created()");
  },

  beforeMount() {
    console.log("Option API : beforeMount()");
  },

  mounted() {
    console.log("Option API : mounted()");
  },

  beforeUpdate() {
    console.log("Option API : beforeUpdate()");
  },

  updated() {
    console.log("Option API : updated()");
  },

  beforeUnmount() {
    console.log("Option API : beforeUnmount()");
  },

  unmounted() {
    console.log("Option API : unmounted()");
  },
};
</script>

<style lang="scss" scoped></style>
