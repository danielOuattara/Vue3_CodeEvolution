<template>
  <div>
    <pre>
    {{ formValues }}
  </pre
    >
  </div>
  <form action>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" v-model="formValues.name" />
    </div>
    <!--  -->
    <div>
      <label for="profile">Profile</label>
      <textarea
        type="text"
        id="profile"
        name="profile"
        v-model="formValues.profileSummary"
      ></textarea>
    </div>
    <!--  -->
    <div>
      <label for="country">Country</label>
      <select name="country" id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vitenam">Vitenam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <!--  -->
    <div>
      <label for="jobLocation">Country</label>
      <select
        name="jobLocation"
        id="jobLocation"
        v-model="formValues.jobLocation"
        multiple
      >
        <option value="india">India</option>
        <option value="vitenam">Vitenam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
      },
    }
  },
  methods: {},
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

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.428;
  color: #555;
  background-color: #fff;
  background-image: none;
}
</style>
