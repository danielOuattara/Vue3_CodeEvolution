<template>
  <p>{{ greet }} {{ name }}</p>
  <p v-text="job"></p>
  <!--  -->
  <p v-html="domain"></p>
  <!--  -->
  <h1 :id="headingId">Hello</h1>
  <button :disabled="true">Click</button>
  <!--  -->

  <h2 class="underline">Underline text</h2>
  <h2 class="underline" :class="status">Status text</h2>
  <h2 :class="isPromoted && 'promoted'">Promoted movies</h2>
  <h2 :class="isSoldOut ? 'soldOut' : 'newMovie'">One movies</h2>
  <h2 :class="['newMovie', 'promoted']">Newly promoted movies</h2>
  <h2 :class="[isPromoted && 'promoted', isSoldOut ? 'soldOut' : 'newMovie']">
    Array conditionnal movie
  </h2>
  <h2
    :class="{
      promoted: isPromoted,
      newMovie: !isPromoted,
      soldOut: isSoldOut,
    }"
  >
    Object conditionnal movie
  </h2>

  <!--  -->
  <h2 :style="{ color: highLightColor, fontSize: headerSize }">
    Inline Style Heading
  </h2>
  <p :style="{ color: paragraphColor, fontSize: paraSize + 'px' }">
    Inline Style Heading n°1
  </p>
  <p :style="{ color: paragraphColor, 'font-size': paraSize + 'px' }">
    Inline Style Heading n°2
  </p>

  <h2 :style="headerStyleObject">Inline Object Style Heading</h2>

  <h2 :style="[headerColorStyleArray, headerDisplayStyleArray]">
    Inline Array Style Heading
  </h2>
  <h2 :style="[headerColorStyleArray, headerDisplayStyleArray, danger]">
    Inline Danger Style Heading
  </h2>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      greet: 'Hello',
      name: 'Daniel',
      job: 'engineer',

      domain: '<b>Solar energie</b>',

      headingId: 'heading',
      isDisabled: true,

      status: 'danger',
      isPromoted: true,
      isSoldOut: true,
      movies: [],

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
#heading {
  color: green;
}

.underline {
  text-decoration: underline;
}

.danger {
  border: 2px solid red;
  display: inline-block;
  margin: 1rem;
  padding: 0.5rem 1rem;
}

.success {
  border: 2px solid green;
  display: inline-block;
  margin: 1rem;
  padding: 0.5rem 1rem;
}
.promoted {
  font-style: italic;
  font-weight: 300;
}
.newMovie {
  color: green;
}
.soldOut {
  color: orange;
}
</style>
