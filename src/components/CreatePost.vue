<template>
  <div>
    <form action="#" @submit.prevent="submitform">
      <div class="form-group">
        <label for="body">Post</label>
        <input
          type="text"
          class="form-control"
          id="content"
          placeholder="Enter New Post"
          v-model="formData.content"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    submitform() {
      var headers = {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          uid: localStorage.getItem("uid"),
          client: localStorage.getItem("client")
        }
      };
      this.$http
        .post("http://localhost:3000/posts", this.formData, headers)
        .then(() => {
          this.formData = {};
        })
        .catch(() => {});
    }
  }
};
</script>
