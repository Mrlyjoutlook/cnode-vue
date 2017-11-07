<template>
  <div class="admin">
    <div class="admin_info">
      <div class="admin_pict">
        <img :src="avatar_url" />
      </div>
      <div class="admin_base">
        <span>姓名：{{ loginname }}</span>
        <span>积分：{{ score }}</span>
      </div>
    </div>
    <div class="admin_list">
      <mt-cell title="最近发布" to="/list/create" is-link />
      <mt-cell title="最近参与" to="/list/join" is-link />
      <mt-cell title="我的收藏" to="/login/collect" is-link />
    </div>
    <div class="version">
      <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
      <span>version 1.0.0</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  computed: {
    loginname() {
      return this.$store.state.user.baseInfo.loginname || '';
    },
    avatar_url() {
      return this.$store.state.user.baseInfo.avatar_url || '';
    },
    score() {
      return this.$store.state.user.baseInfo.score || 0;
    },
  },
  methods: {

  },
  mounted() {
    const { loginname } = this.$store.state.user.baseInfo;
    this.$store.dispatch('reqUserInfo', loginname);
  },
};
</script>

<style scoped>
.admin{
  margin-top: 90px;
}
.admin_info{
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
}
.admin_pict{
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.admin_pict img{
  width: 80%;
  border-radius: 50%;
}
.admin_base{
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 28px;
  color: #888;
}
.admin_list{
  margin-top: 30px;
}
.version{
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.version img{
  width: 280px;
}
.version span{
  margin: 30px 0 120px;
  font-size: 28px;
  color: #888;
}
</style>
