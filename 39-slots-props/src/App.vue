<template>
  <!-- 
    <Card></Card>
  <Card>Card content</Card>
  <Card>
    <h2>Card content</h2>
  </Card>
  <Card> <img src="https://picsum.photos/200"/></Card>

  <Card>
    <template v-slot:header> <h2>Header Card</h2> </template>

    <template v-slot:default>
      <img src="https://picsum.photos/200" />
      <p>Body content</p>
    </template>

    <template v-slot:footer> <h2>Footer Card</h2> </template>
  </Card> 
-->
  <NameList>
    <template v-slot:default="slotsProps">
      {{ slotsProps.firstName }} {{ slotsProps.lastName }}</template
    >
  </NameList>

  <hr />

  <NameList>
    <template v-slot:default="slotsProps">
      {{ slotsProps.lastName }} --- {{ slotsProps.firstName }}</template
    >
  </NameList>

  <hr />

  <NameList>
    <template v-slot:default="slotsProps">
      {{ slotsProps.firstName }} ***</template
    >
  </NameList>
</template>

<script>
import NameList from "./components/NameList.vue";
export default {
  name: "App",
  components: {
    NameList,
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
