<template>
  <div>
    <button type="button" class="btn btn-danger" @click="logOutUser">
      Log Out
    </button>
  </div>
</template>

<script>
export default {
  name: "LogOut",
  methods: {
    logOutUser() {
      var headers = {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          uid: localStorage.getItem("uid"),
          client: localStorage.getItem("client")
        }
      };
      this.$http
        .delete("http://localhost:3000/auth/sign_out", {}, headers)
        .then(() => {
          localStorage.removeItem("access-token");
          localStorage.removeItem("uid");
          localStorage.removeItem("client");
          this.$router.push({ name: "sign_in" });
        })
        .catch(() => {
          localStorage.removeItem("access-token");
          localStorage.removeItem("uid");
          localStorage.removeItem("client");
          this.$router.push({ name: "sign_in" });
        });
    }
  }
};
</script>
