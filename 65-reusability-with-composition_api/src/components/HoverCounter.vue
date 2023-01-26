<template>
  <h2 v-on:mouseover="incrementCount">
    option-api : mouseover {{ count }} times
  </h2>
  <h2 v-on:mouseover="c_incrementCount">
    composition-api: mouseover {{ c_count }} times
  </h2>
  <h2 v-on:mouseover="c_incrementCount_params">
    composition-api + params: mouseover {{ c_count_params }} times
  </h2>
</template>

<script>
import counterMixin from "./../mixins/counterMixin";
import useCounter from "../composables/useCounter";
import useCounterParameters from "../composables/useCounterParamaters";
export default {
  name: "HoverCounter",
  mixins: [counterMixin],

  //---------------------------------------------------
  setup() {
    const { c_count, c_incrementCount } = useCounter();
    const { c_count_params, c_incrementCount_params } = useCounterParameters(
      0,
      1,
    );

    return {
      c_count,
      c_incrementCount,
      c_count_params,
      c_incrementCount_params,
    };
  },
};
</script>
