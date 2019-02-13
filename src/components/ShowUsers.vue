<template>
  <div>
    <button type="button" class="btn btn-primary" @click="showUsers">
      Show Users
    </button>
  </div>
</template>

<script>
export default {
  name: "ShowUsers",
  methods: { 
      showUsers() {
        this.$http
        .get("http://localhost:3000/users")
        .then(() => {
          this.$router.push({ name: "users" });
        })
        .catch(() => {
          this.$router.push({ name: "users" });
        });
    }
  }
};
</script>
