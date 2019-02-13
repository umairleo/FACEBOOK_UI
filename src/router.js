import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import Users from "./views/Users.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth",
      name: "sign_up",
      component: SignUp
    },
    {
      path: "/auth/sign_in",
      name: "sign_in",
      component: SignIn
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
  ]
});
