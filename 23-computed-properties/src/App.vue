<template>
  <h2>Direct fullname: {{ firstName }} {{ lastName }}</h2>
  <h2>Computed property fullname: {{ fullName }}</h2>
  <h2>
    Total Price Direct computing:
    {{
      items.reduce((accumulator, current) => {
        return accumulator + current.price
      }, 0)
    }}
  </h2>

  <h2>Total Price through computed properties: {{ totalAmount }}</h2>

  <button @click="addItem">Add item to items list</button>
  <!-- NOTE: When dependencies in computed Properties change, the properties are re-computed -->
  <h2>New Total Price through computed properties: {{ totalAmount }}</h2>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      firstName: 'Daniel',
      lastName: 'Ouattara',
      items: [
        { id: 1, title: 'TV', price: 100 },
        { id: 2, title: 'Phone', price: 200 },
        { id: 3, title: 'Laptop', price: 300 },
      ],
    }
  },
  methods: {
    addItem() {
      return this.items.push({
        id: this.items.length,
        title: 'new product',
        price: this.items[this.items.length - 1].price + 100,
      })
    },
  },
  computed: {
    fullName() {
      return `${this.firstName}  ${this.lastName} `
    },

    totalAmount() {
      return this.items.reduce((accumulator, current) => {
        return accumulator + current.price
      }, 0)
    },
  },
}
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
