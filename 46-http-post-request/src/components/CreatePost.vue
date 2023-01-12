<template>
  <form @submit.prevent="createPost">
    <div>
      <label for="userId">User Id :</label>
      <input
        type="text"
        id="userId"
        name="userId"
        v-model="this.formData.userId"
      />
    </div>
    <div>
      <label for="title">Title :</label>
      <input
        type="text"
        id="title"
        name="title"
        v-model="this.formData.title"
      />
    </div>
    <div>
      <label for="body">body :</label>
      <input type="text" id="body" name="body" v-model="this.formData.body" />
    </div>
  </form>
  <button @click="this.createPost">Create post</button>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
      postResponse: "",
      errorResponse: "",
    };
  },

  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
          method: "POST",
          body: JSON.stringify({
            ...this.formData,
          }),
        })
        .then((response) => {
          console.log("response = ", response);
          this.postResponse = response.data;
        })
        .catch((error) => {
          this.errorResponse = error.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
