<template>
  <div>
    <input type="text" placeholder="First name" v-model="firstName" />
    <input type="text" placeholder="Last name" v-model="lastName" />
    <PersonGreeting :firstName="firstName" :lastName="lastName" />
  </div>
</template>

<script>
import { ref } from "vue";
import PersonGreeting from "./PersonGreeting.vue";

export default {
  name: "Peron",
  components: {
    PersonGreeting,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    return { lastName, firstName };
  },
};
</script>
