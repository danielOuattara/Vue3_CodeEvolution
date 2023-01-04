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
  <!-- NOTE: When dependencies in computed Properties change, 
       the properties are re-computed -->
  <h2>New Total Price through computed properties: {{ totalAmount }}</h2>

  <!-- ========================= -->
  <!-- computed proprties VS methods function -->
  <h2>Method Total Price: {{ totalAmountMethods() }}</h2>

  <!--computed properties are cached, not recalculated. 
      So it is most efficient than methods functions that 
      are recalculated at every re-render of the component -->

  <!-- 
    methods are always called (re built) when there is any change in the UI
    computed properties do not get called(re built), when the UI change but only
    when their denpendencies are update: so better performance are gained with
    computed properties
   -->
  <label for="country">
    Country:
    <input type="text" name="country" id="vountry" v-model="country" />
  </label>
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
      country: '',
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
