<template>
  <div>
    <h2>Person Greeting component</h2>
    <p>basic props : {{ firstName }} {{ lastName }}</p>
    <p>computed Options API : {{ o_fullName }}</p>
    <p>computed Composition API : {{ c_fullName }}</p>
    <hr />
    <br />

    <button @click="o_sendEvent">
      options_api send info back to parent component
    </button>
    <!-- -------------------- -->
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
  emits: ["childToParent_options_api", "childToParent_composition_api"],

  //-------------------------------------------------- compositon-api
  setup(props, context) {
    const c_fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function c_sendEvent() {
      context.emit("childToParent_composition_api", { name: "Jana Doe" });
    }

    return { c_fullName, c_sendEvent };
  },

  //--------------------------------------------------- options-api
  computed: {
    o_fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },

  methods: {
    o_sendEvent() {
      this.$emit("childToParent_options_api", { message: "John Doe" });
    },
  },
};
</script>
