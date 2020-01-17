<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Sign Up</h1>
          <p class="lead text-center">Create your DevConnector account</p>
          <form @submit.prevent="submit" autocomplete="off">
            <TextField
              type="name"
              placeholder="姓名"
              name="name"
              v-model="newUser.name"
              :error="errors.name"
            />
            <TextField
              type="email"
              placeholder="邮箱地址"
              name="email"
              v-model="newUser.email"
              :error="errors.email"
              info="我们使用了gravatar全球公认头像，如果需要有头像显示，请使用在gravatar注册的邮箱"
            />
            <TextField
              type="password"
              placeholder="密码"
              name="password"
              v-model="newUser.password"
              :error="errors.password"
            />
            <TextField
              type="password"
              placeholder="再次输入密码"
              name="password2"
              v-model="newUser.password2"
              :error="errors.password2"
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "./common/TextFieldGroup";
export default {
  name: "Register",
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  components: {
    TextField
  },
  methods: {
    submit() {
      //   console.log(this.$store.getters.isAuthenticated);
      this.$axios
        .post("/api/users/register", this.newUser)
        .then(res => {
          // console.log(res.data);
          //执行mutations
          //   this.$store.commit("setUser", res.data);
          //执行 actions异步
          this.$store.dispatch("setUser", res.data);
          //页面跳转
          this.$router.push("/login");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    }
  }
};
</script>

<style scoped></style>
