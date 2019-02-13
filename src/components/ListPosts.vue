<template>
  <div>
    <pre v-for="post in posts" :key="post.id">
      {{post.content}}
      <hr>
      {{post.user}}
    </pre>
  </div>
</template>
<script>
export default {
  name: "ListPosts",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    get_posts() {
      var headers = {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          uid: localStorage.getItem("uid"),
          client: localStorage.getItem("client")
        }
      };
      this.$http
        .get("http://localhost:3000/posts", headers)
        .then(res => {
          this.posts = res.data;
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.get_posts();
  }
};
</script>
