<template>
  <div>
    <input type="text" ref="inputRef" />
    <input type="text" ref="c_inputRef" />
    <button @click="c_handleClick">click me</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "TemplateRef",

  setup() {
    const c_inputRef = ref(null);
    console.log("c_inpuRef = ", c_inputRef);
    console.log("c_inputRef.value = ", c_inputRef.value);

    function c_handleClick() {
      console.log("c_inpuRef = ", c_inputRef);
      console.log("c_inputRef.value = ", c_inputRef.value);
    }

    onMounted(function() {
      console.log("c_inpuRef = ", c_inputRef);
      console.log("c_inputRef.value = ", c_inputRef.value);
      c_inputRef.value.focus();
    });

    return {
      c_inputRef,
      c_handleClick,
    };
  },

  //-----------------------------------

  // mounted() {
  //   this.$refs.inputRef.focus();
  // },
};
</script>

<style lang="scss" scoped></style>
