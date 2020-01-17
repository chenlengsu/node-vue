<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">登录主页</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/profiles">开发者</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-show="isLogin">
            <router-link class="nav-link" to="/dashboard"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item" v-show="!isLogin">
            <router-link class="nav-link" to="/register">注册</router-link>
          </li>
          <li class="nav-item" v-show="!isLogin">
            <router-link class="nav-link" to="/login">登录</router-link>
          </li>
          <li v-if="user !== null" class="nav-item" v-show="isLogin">
            <a class="nav-link" @click.prevent="logout">
              <img
                class="rounded-circle headImage"
                :src="
                  user.avatar
                    ? user.avatar
                    : 'https://www.gravatar.com/avatar/anything?s=200&d=mm'
                "
                :alt="user.name"
                title="需要注册全球公认头像, 才可以拥有头像"
              />
              退出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  computed: {
    isLogin() {
      if (this.$store.getters.isAuthenticated) {
        return true;
      } else {
        return false;
      }
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      //删除缓存
      localStorage.removeItem("jwtToken");
      //删除登录的请求头
      // this.$store.dispatch("setIsAuthenticated", false);
      // this.$store.dispatch("setUser", {});
      this.$store.dispatch("clearCurrentState");
      //跳转登录
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.headImage {
  width: 25px;
  margin-right: 5px;
}
</style>
