<template>
  <div>
    
    <div class="pull-right">
      <show-users></show-users>
      <hr />
    <div class="pull-right">
      <log-out></log-out>
    </div>
    </div>
    
    <div class="pull-left">
      <show-friends></show-friends>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1>Welcome To Facebook</h1>
          <create-post></create-post>
          <hr />
          <list-posts></list-posts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from "@/components/CreatePost.vue";
import ListPosts from "@/components/ListPosts.vue";
import LogOut from "@/components/LogOut.vue";
import ShowFriends from "@/components/ShowFriends.vue";
import ShowUsers from "@/components/ShowUsers.vue";
export default {
  name: "home",
  components: {
    CreatePost,
    ListPosts,
    LogOut,
    ShowFriends,
    ShowUsers
  },
  methods: {
    getUser() {
      var token = localStorage.getItem("token");
      if (token === undefined || token === null) {
        this.$router.push({ name: "sign_in" });
      }
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>
