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

export default function useCounter() {
  const c_count = ref(0);

  function c_incrementCount() {
    return c_count.value++;
  }

  return { c_count, c_incrementCount };
}
