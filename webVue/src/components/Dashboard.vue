<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4">Dashboard</h1>
          <p v-if="user !== null" class="lead text-muted">{{ user.name }}</p>
          <h4 v-if="profile != null">Todo:显示数据</h4>
          <div v-else>
            <p>没有任何相关的个人信息，请添加你的个人信息</p>
            <router-link to="/create-profile" class="btn btn-lg btn-info"
              >添加个人信息</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashborad",
  data() {
    return {
      profile: null
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    getProfileData() {
      this.$axios
        .get("/api/profile")
        .then(res => {
          // console.log(res.data);
          this.profile = res.data;
          //更新到 store
          this.$store.dispatch("setProfile", this.profile);
        })
        .catch(err => {
          console.log(err.response);
          //更新到 store
          this.$store.dispatch("setProfile", null);
        });
    }
  },
  created() {
    this.getProfileData();
  }
};
</script>

<style scoped></style>
