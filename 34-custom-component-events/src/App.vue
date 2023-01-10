<template>
  <div>
    <h2>Custom component events</h2>
    <button @click="toggleShowPopup">
      {{ !showPopup ? "show popup" : "hide popup" }}
    </button>
    <Popup
      class="popup"
      v-show="this.showPopup"
      @close="this.closePopup"
      @closePopup="this.closePopup"
    />
  </div>
</template>

<script>
import Popup from "./components/Popup.vue";

export default {
  name: "App",
  components: {
    Popup,
  },

  data() {
    return {
      showPopup: false,
    };
  },

  methods: {
    toggleShowPopup() {
      this.showPopup = !this.showPopup;
    },
    closePopup(arg) {
      this.showPopup = false;
      console.log("arg = ", arg);
    },
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
