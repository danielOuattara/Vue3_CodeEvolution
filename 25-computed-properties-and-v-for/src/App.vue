<template>
  <h2>Total Price through computed properties: {{ totalAmount }}</h2>

  <button @click="addItem">Add item to items list</button>
  <!-- NOTE: When dependencies in computed Properties change, 
       the properties are re-computed -->

  <p>
    <label for="country">
      Country:
      <input type="text" name="country" id="vountry" v-model="country" />
    </label>
  </p>

  <h2>Expensive items from items list:</h2>
  <ul>
    <li v-for="article in expensiveItems" :key="article.id">
      {{ article.title }}
    </li>
  </ul>
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
        { id: 1, title: 'Tube TV', price: 100 },
        { id: 2, title: 'Phone', price: 200 },
        { id: 3, title: 'Laptop', price: 300 },
        { id: 4, title: 'HD Televison ', price: 400 },
        { id: 5, title: 'washing Machine ', price: 500 },
      ],
      country: '',
      expensiveBoudary: 250,
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
    totalAmountMethods() {
      console.log('totalAmountMethods - methods')
      return this.items.reduce((accumulator, current) => {
        return accumulator + current.price
      }, 0)
    },
  },
  computed: {
    fullName() {
      return `${this.firstName}  ${this.lastName} `
    },

    totalAmount() {
      console.log('totalAmount - computed properties')
      return this.items.reduce((accumulator, current) => {
        return accumulator + current.price
      }, 0)
    },
    expensiveItems() {
      return this.items.filter((item) => item.price >= this.expensiveBoudary)
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
