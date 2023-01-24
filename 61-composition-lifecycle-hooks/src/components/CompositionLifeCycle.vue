<template>
  <div><p>Compostion API Component</p></div>
</template>

<script>
import {
  onBeforeUnmount,
  onUnmounted,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";
export default {
  name: "CompositionLifeCycle",

  setup() {
    console.log("setup running");
    onBeforeMount(() => console.log("Composition API : beforeMount()"));
    onMounted(() => console.log("Composition API : mounted()"));
    onBeforeUpdate(() => console.log("Composition API : beforeUpdate()"));
    onUpdated(() => console.log("Composition API : updated()"));
    onBeforeUnmount(() => console.log("Composition API : beforeUnmount()"));
    onUnmounted(() => console.log("Composition API : unmounted()"));
  },
};
</script>

<style lang="scss" scoped></style>
