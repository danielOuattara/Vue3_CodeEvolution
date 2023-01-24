<template>
  <div>
    <h2>Person Greeting component</h2>
    <p>basic props : {{ firstName }} {{ lastName }}</p>
    <p>computed Options API : {{ fullName_option }}</p>
    <p>computed Composition API : {{ fullName_composition }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreeting",
  props: ["firstName", "lastName"],
  setup(props) {
    const fullName_composition = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });
    return { fullName_composition };
  },

  computed: {
    fullName_option() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>
