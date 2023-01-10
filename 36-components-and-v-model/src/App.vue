<template>
  <!-- <label for="name"
    >Enter your name:
    <input type="text" name="name" id="name" v-model.lazy="this.name" />
  </label> -->

  <Input v-model="name" />
</template>

<script>
import Input from "./components/Input.vue";
export default {
  name: "App",
  components: {
    Input,
  },

  data() {
    return {
      name: "",
    };
  },

  methods: {
    showName() {
      console.log(this.name);
    },
  },

  mounted() {
    console.log("mounted: ", this.name);
  },
  updated() {
    console.log("updated: ", this.name);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  border: 3px solid green;
  padding: 10px;
  border-radius: 7px;
}
.popup {
  border: 1px solid grey;
  padding: 20px;
  width: 300px;
  display: block;
  margin: auto;
  margin-top: 20px;
}
</style>
