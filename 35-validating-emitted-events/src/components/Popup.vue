<template>
  <div>
    <h3>I am a pop up</h3>
    <div>
      <label for="name"
        >Enter your name:
        <input type="text" name="name" id="name" v-model="name" />
      </label>
    </div>
    <p>
      <button @click="$emit('close', this.name)">Close Popup</button>
      <button @click="this.shutPopup">Close Popup</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "Popup",
  data() {
    return {
      name: "",
    };
  },
  emits: {
    close: (name) => {
      if (!name) return false;
      return true;
    },
    closePopup: (name) => {
      if (!name) return false;
      return true;
    },
  },
  methods: {
    shutPopup() {
      return this.$emit("closePopup", this.name);
    },
  },
};
</script>
