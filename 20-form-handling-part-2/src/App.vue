<template>
  <div>
    <pre>
    {{ formValues }}
  </pre
    >
  </div>
  <form @submit="submitForm">
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
    <!--  -->
    <div>
      <input
        type="checkbox"
        id="remoteWork"
        name="remoteWork"
        v-model="formValues.remoteWork"
      />
      <label for="remoteWork">
        Accept Remote Work ?
      </label>
    </div>
    <!--  -->
    <div>
      <input
        type="checkbox"
        id="remoteWork2"
        name="remoteWork2"
        v-model="formValues.remoteWork2"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork2">
        Accept Remote Work ?
      </label>
    </div>
    <!--  -->
    <div>
      <label>Skills Set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>
    <!--  -->
    <div>
      <label>Experience Level</label>

      <input
        type="radio"
        id="junior"
        value="junior"
        v-model="formValues.experienceLevel"
      />
      <label for="junior">Junior: 0 - 2 years</label>

      <input
        type="radio"
        id="medium"
        value="medium"
        v-model="formValues.experienceLevel"
      />
      <label for="medium">Medium: 2 - 5 years</label>

      <input
        type="radio"
        id="senior"
        value="senior"
        v-model="formValues.experienceLevel"
      />
      <label for="senior">Senior: 5 - 10 ans</label>

      <input
        type="radio"
        id="master"
        value="master"
        v-model="formValues.experienceLevel"
      />
      <label for="master">Master: 10 ans +</label>
    </div>
    <!--  -->

    <br />
    <div>
      <button type="submit">Submit</button>
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
        remoteWork: false,
        remoteWork2: 'no',
        skillSet: [],
        experienceLevel: '',
      },
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault()
      console.log('Form values', this.formValues)
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
