<template>
  <div>
    <pre v-for="user in users" :key="user.id">
      {{ user.email }}
      <hr />
      <button type="add friend" class="btn btn-primary">Add Friend</button>
    </pre>
  </div>
</template>

<script>
export default {
  name: "Users",
  data(){
  return {
    users: []
    };
  },
  methods: {
    get_users() {

      this.$http
        .get("http://localhost:3000/users")
        .then(res => {
          //console.log(res.data)
          this.users = res.data;
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.get_users();
  }
};
</script>
