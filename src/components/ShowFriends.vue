<template>
  <div>
    <pre v-for="friend in friends" :key="friend.id">
      {{ friend.email }}
      <hr />
        <button type="remove friend" class="btn btn-danger">Remove</button>
    </pre>
  </div>
</template>

<script>
export default {
  name: "ShowFriends",
  data(){
  return {
    friends: []
    };
  },
  methods: {
    get_friends() {
     var headers = {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          uid: localStorage.getItem("uid"),
          client: localStorage.getItem("client")
        }
      };
      this.$http
        .get("http://localhost:3000/users/all_friends", headers)
        .then(res => {
          //console.log(res.data)
          this.friends = res.data;
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.get_friends();
  }
};
</script>