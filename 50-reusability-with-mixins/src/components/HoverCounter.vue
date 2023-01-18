<template>
  <h2 v-on:mouseover="incrementCount">click {{ count }} times</h2>
</template>

<script>
import counterMixin from "./../mixins/counterMixin";
export default {
  name: "HoverCounter",
  mixins: [counterMixin],
};
</script>
