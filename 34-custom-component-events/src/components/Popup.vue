<template>
  <div>
    <h3>I am a pop up</h3>
    <button @click="$emit('close', 'Daniel')">Close Popup</button>
    <button @click="this.shutPopup">Close Popup</button>
  </div>
</template>
<script>
export default {
  name: "Popup",
  emits: ["close", "closePopup"],
  methods: {
    shutPopup() {
      return this.$emit("closePopup", "Daniel");
    },
  },
};
</script>
