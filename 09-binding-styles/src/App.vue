<template>
  <h2 v-bind:style="{ color: highLightColor, fontSize: headerSize }">
    Inline Style Heading
  </h2>
  <p v-bind:style="{ color: paragraphColor, fontSize: paraSize + 'px' }">
    Inline Style Heading n°1
  </p>
  <p v-bind:style="{ color: paragraphColor, 'font-size': paraSize + 'px' }">
    Inline Style Heading n°2
  </p>

  <h2 v-bind:style="headerStyleObject">Inline Object Style Heading</h2>

  <h2 v-bind:style="[headerColorStyleArray, headerDisplayStyleArray]">
    Inline Array Style Heading
  </h2>
  <h2 v-bind:style="[headerColorStyleArray, headerDisplayStyleArray, danger]">
    Inline Danger Style Heading
  </h2>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      highLightColor: 'magenta',
      paragraphColor: 'lightblue',
      headerSize: '2rem',
      paraSize: 20,

      headerStyleObject: {
        color: 'magenta',
        fontSize: '2rem',
        borderBottom: '3px solid lightgreen',
        display: 'inline-block',
      },

      headerColorStyleArray: {
        color: 'green',
        fontSize: '2rem',
      },

      headerDisplayStyleArray: {
        borderBottom: '3px solid lightgreen',
        display: 'inline-block',
      },

      danger: {
        color: 'red',
        backgroundColor: 'rgba(255,0,0,0.2)',
        padding: ' 1rem 2rem',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
      },
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
