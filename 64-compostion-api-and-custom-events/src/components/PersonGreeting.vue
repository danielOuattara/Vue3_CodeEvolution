<template>
  <div>
    <h2>Person Greeting component</h2>
    <p>basic props : {{ firstName }} {{ lastName }}</p>
    <p>computed Options API : {{ fullName_option }}</p>
    <p>computed Composition API : {{ fullName_composition }}</p>
    <hr />
    <br />

    <button @click="o_sendEvent">
      options_api send info back to parent component
    </button>
    <button @click="c_sendEvent">
      composition_api send info back to parent component
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreeting",
  props: ["firstName", "lastName"],

  setup(props, context) {
    const fullName_composition = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function c_sendEvent() {
      context.emit("childToParent_composition_api", { name: "Jana Doe" });
    }

    return { fullName_composition, c_sendEvent };
  },

  computed: {
    fullName_option() {
      return `${this.firstName} ${this.lastName}`;
    },
  },

  emits: ["childToParent_options_api", "childToParent_composition_api"],
  methods: {
    o_sendEvent() {
      this.$emit("childToParent_options_api", { message: "John Doe" });
    },
  },
};
</script>
