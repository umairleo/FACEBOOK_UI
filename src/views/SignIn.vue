<template>
  <div>
    <h1 class="text-center">Sign In Page</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <form @submit.prevent="submitForm">
            <div
              class="alert alert-danger"
              role="alert"
              v-if="formErrors.length > 0"
            >
              <ul>
                <li v-for="(error, index) in formErrors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                v-model="formData.email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="formData.password"
              />
            </div>
            <button type="submit" class="btn btn-default">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      formData: {},
      formErrors: []
    };
  },
  methods: {
    submitForm() {
      this.$http
        .post("http://localhost:3000/auth/sign_in", this.formData)
        .then(res => {
          localStorage.setItem("access-token", res.headers["access-token"]);
          localStorage.setItem("uid", res.headers.uid);
          localStorage.setItem("client", res.headers.client);
          this.formData = {};
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.formErrors = error.response.data.errors;
        });
    }
  }
};
</script>
