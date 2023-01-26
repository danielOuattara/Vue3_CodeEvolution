<template>
  <p>
    <button @click="incrementCount">click option-api {{ count }} times</button>
  </p>
  <p>
    <button @click="c_incrementCount">
      click composition-api {{ c_count }} times
    </button>
  </p>
  <p>
    <button @click="c_incrementCount_params">
      click composition-api {{ c_count_params }} times
    </button>
  </p>
</template>

<script>
import counterMixin from "./../mixins/counterMixin";
import useCounter from "../composables/useCounter";
import useCounterParameters from "../composables/useCounterParamaters";
export default {
  name: "ClickCounter",
  mixins: [counterMixin],

  //---------------------------------------------------
  setup() {
    const { c_count, c_incrementCount } = useCounter();
    const { c_count_params, c_incrementCount_params } = useCounterParameters(
      0,
      3,
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
