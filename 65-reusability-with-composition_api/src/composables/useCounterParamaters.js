// export default {
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     incrementCount() {
//       return this.count++;
//     },
//   },
// };

import { ref } from "vue";

export default function useCounterParameters(initial, step) {
  const c_count_params = ref(initial);

  function c_incrementCount_params() {
    return (c_count_params.value += step);
  }

  return { c_count_params, c_incrementCount_params };
}
