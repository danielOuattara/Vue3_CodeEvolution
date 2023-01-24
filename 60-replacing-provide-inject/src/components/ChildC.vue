<template>
  <h2>ChildC component</h2>
  <h3>Options APIfrom provide/inject we get: {{ username }}</h3>
  <h3>composition API provide/inject we get: {{ c_username }}</h3>

  <p>
    <button @click="c_increaseCount">Increase count (parent method)</button>
    &nbsp;
    <button @click="c_localIncreaseCount">Increase count (child method)</button>
    &nbsp;Count:
    {{ c_count }}
  </p>
  <p>Hero name: {{ `${firstName} ${lastName}` }}</p>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "ChildC",
  inject: ["username"],

  setup() {
    const c_username = inject("c_username", "Default value");

    let c_count = inject("c_count", 0);
    const c_increaseCount = inject("c_increaseCount");
    function c_localIncreaseCount() {
      return c_count.value++;
    }

    const c_hero = inject("c_hero", {});

    // console.log("c_hero = ", c_hero);
    // console.log("toRefs(c_hero) = ", toRefs(c_hero));
    return {
      c_username,
      c_count,
      c_increaseCount,
      c_localIncreaseCount,
      ...toRefs(c_hero),
    };
  },
};
</script>

<style lang="scss" scoped></style>
