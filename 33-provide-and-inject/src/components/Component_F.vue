<template>
  <h2>Component_F</h2>
  <h2>From App_Component Name is : {{ this.name }}</h2>
</template>

<script>
export default {
  name: "Component_F",
  inject: ["name"],
};
</script>

<style></style>
