<template>
  <button @click="incrementCount">click {{ count }} times</button>
</template>

<script>
import counterMixin from "./../mixins/counterMixin";
export default {
  name: "ClickCounter",
  mixins: [counterMixin],
};
</script>
