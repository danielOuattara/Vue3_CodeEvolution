<template>
  <h2>Hello {{ this.name }} - {{ this.heroName }}</h2>
</template>

<script>
export default {
  name: "Greet",
  props: ["name", "heroName"],
  created() {
    console.log(`${this.name} - ${this.heroName}`);
  },
};
</script>

<style></style>
