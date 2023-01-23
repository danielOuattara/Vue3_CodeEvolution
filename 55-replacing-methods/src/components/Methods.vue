<template>
  <h2>{{ name }}</h2>
  <button @click="setName">Change Name</button>

  <hr />

  <h2>Count: {{ c_count }}</h2>
  <button @click="c_incrementCount">incrementCount</button>

  <hr />

  <h2>Count: {{ c_count }}</h2>
  <button @click="c_incrementCount2">incrementCount_2</button>

  <hr />

  <h2>{{ firstName }} {{ lastName }}</h2>
  <button @click="c_changeHero">Change user</button>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "Methods",

  setup() {
    const c_count = ref(0);

    const c_incrementCount = () => {
      return c_count.value++;
    };

    function c_incrementCount2() {
      return c_count.value++;
    }

    const user = reactive({
      firstName: "Daniel",
      lastName: "Ouattara",
    });

    function c_changeHero() {
      user.firstName = "John";
      user.lastName = "Travolta";
    }

    return {
      c_count,
      c_incrementCount,
      c_incrementCount2,
      ...toRefs(user),
      c_changeHero,
    };
  },
  data() {
    return {
      name: "Bruce",
    };
  },

  methods: {
    setName() {
      this.name = "codeEvolution";
    },
  },
};
</script>
