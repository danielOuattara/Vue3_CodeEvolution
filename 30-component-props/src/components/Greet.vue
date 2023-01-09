<template>
  <h2>Hello {{ name }} - {{ heroName }}</h2>
</template>

<script>
export default {
  name: "Greet",
  props: ["name", "heroName"],
};
</script>

<style></style>
