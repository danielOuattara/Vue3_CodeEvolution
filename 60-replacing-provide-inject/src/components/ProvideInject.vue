<template>
  <h2>Parent component {{ name }}</h2>
  <p>
    <button @click="c_count++">Increase count simple increment</button> &nbsp;
    <button @click="c_increaseCount">Increase count composition method</button>
    &nbsp; Count :
    {{ c_count }}
  </p>
  <p>Hero name: {{ `${firstName} ${lastName}` }}</p>
  <p>
    <ChildA />
  </p>
</template>

<script>
import ChildA from "./ChildA.vue";
import { provide, ref, reactive, toRefs } from "vue";
export default {
  name: "ProvideInject",
  components: { ChildA },

  setup() {
    provide("c_username", "Joe Doe");

    //------------------
    const c_count = ref(0);

    function c_increaseCount() {
      return c_count.value++;
    }
    provide("c_count", c_count);
    provide("c_increaseCount", c_increaseCount);

    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });
    provide("c_hero", state);

    return { c_count, c_increaseCount, ...toRefs(state) };
  },

  //--------------------

  data() {
    return {
      name: "Daniel Ouattara",
    };
  },
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
