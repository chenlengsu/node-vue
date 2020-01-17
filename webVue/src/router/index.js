import Vue from "vue";
import Router from "vue-router";
import Landing from "../components/Landing";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(Router);

const route = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    { path: "*", redirect: "/" },
    { path: "/", component: Landing },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/dashboard", component: Dashboard }
  ]
});

//全局守卫
route.beforeEach((to, from, next) => {
  //获取token
  const isLogin = localStorage.jwtToken ? true : false;

  if (to.path == "/login" || to.path == "/register" || to.path == "/") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default route;
