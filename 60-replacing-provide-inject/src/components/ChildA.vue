<template>
  <h2>Child A component</h2>
  <ChildB />
</template>

<script>
import ChildB from "./ChildB.vue";
export default {
  name: "ChildA",
  components: { ChildB },
};
</script>

<style lang="scss" scoped></style>
