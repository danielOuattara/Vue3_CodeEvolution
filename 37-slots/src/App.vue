<template>
  <Card />
  <Card>Card content</Card>
  <Card>
    <h2>Card content</h2>
  </Card>
  <Card> <img src="https://picsum.photos/200"/></Card>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Card,
  },

  data() {
    return {
      name: "",
    };
  },

  methods: {},
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
</style>
