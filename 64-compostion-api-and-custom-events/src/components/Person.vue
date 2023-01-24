<template>
  <div>
    <input type="text" placeholder="First name" v-model="firstName" />
    <input type="text" placeholder="Last name" v-model="lastName" />
    <PersonGreeting
      :firstName="firstName"
      :lastName="lastName"
      @childToParent_options_api="o_showChildMessage"
      @childToParent_composition_api="c_showChildMessage"
    />

    <p>child message options_api : {{ o_childMessage }}</p>
    <p>child message options_api : {{ c_childMessage }}</p>
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
    const c_childMessage = ref(null);

    function c_showChildMessage(arg) {
      return (c_childMessage.value = arg.name);
    }

    return { lastName, firstName, c_childMessage, c_showChildMessage };
  },

  data() {
    return {
      o_childMessage: "",
    };
  },
  methods: {
    o_showChildMessage(arg) {
      console.log(arg);
      this.o_childMessage = arg.message;
    },
  },
};
</script>
