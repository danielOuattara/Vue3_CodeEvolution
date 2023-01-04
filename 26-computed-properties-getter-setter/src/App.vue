<template>
  <h2>{{ this.fullName }}</h2>

  <button @click="changeFullName">Change fullname</button>

  <p>
    <label for="newFirstName">
      FirstName:
      <input
        type="text"
        name="newFirstName"
        id="vountry"
        v-model.trim.lazy="newFirstName"
      />
    </label>
  </p>
  <p>
    <label for="newLastName">
      LastName:
      <input
        type="text"
        name="newLastName"
        id="vountry"
        v-model.trim.lazy="newLastName"
      />
    </label>
  </p>
  <p><button @click="updateFullName">Update Full Name</button></p>
</template>

<script>
/* HOw read and write to a computed property */
export default {
  name: "App",
  components: {},
  data() {
    return {
      firstName: "Daniel",
      lastName: "Ouattara",
      newFirstName: "",
      newLastName: "",
    };
  },
  methods: {
    changeFullName() {
      this.fullName = "John Doe";
    },

    updateFullName() {
      this.fullName = `${this.newFirstName} ${this.newLastName}`;
    },
  },

  computed: {
    fullName: {
      // get() {
      //   return `${this.firstName}  ${this.lastName} `;
      // },
      // set(newValue) {
      //   const names = newValue.split(" ");
      //   this.firstName = names[0];
      //   this.lastName = names[1];
      // },

      //-----

      get() {
        return `${this.firstName} ${this.lastName} `;
      },
      set(newValue) {
        this.firstName = newValue.split(" ")[0];
        this.lastName = newValue.split(" ")[1];
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
