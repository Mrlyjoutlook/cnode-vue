<template>
  <div class="login">
    <div class="login_layout">
      <div class="logo">Cnode</div>
      <div class="des">Welcome</div>
    </div>
    <mt-field label="accessToken" placeholder="please input accessToken" v-model="token" />
    <mt-radio title="set up" :options="option" v-model="saveToken"/>
    <div class="login_layout">
      <mt-button type="primary" class="btn" v-on:click="submit">Sign in</mt-button>
    </div>
    <div class="login_layout-col">
      <span>其他登录方式</span>
      <div>
        <img src="../assets/github.svg" class="threeAuth"/>
      </div>
      <div>mrlyj: <a href="https://github.com/Mrlyjoutlook/cnode-vue">项目地址</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    const saveToken = this.$store.state.user.rememberToken ? 'ok' : '';
    const token = this.$store.state.user.accesstoken;
    return {
      saveToken,
      token,
      option: [{
        label: 'save token',
        value: 'ok',
      }],
    };
  },
  methods: {
    submit() {
      const callback = () => {
        const { path } = this.$route.query;
        this.$router.push(path);
      };
      this.$store.dispatch('checkToken', {
        token: this.$data.token,
        saveToken: this.$data.saveToken,
        callback,
      });
    },
  },
};
</script>

<style scoped>
.login{
  margin-top: 90px;
}
.logo{
  margin: 60px 0 10px;
  font-size: 84px;
  font-weight: bold;
  color: #494949;
}
.des{
  margin: 10px 0 60px;
  font-size: 36px;
  font-weight: bold;
  color: #908f8f;
}
.btn{
  margin-top: 100px;
  width: 9rem;
}
.threeAuth{
  width: 50px;
}
.login_layout{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login_layout-col{
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login_layout-col span{
  margin: 20px 0;
  font-size: 28px;
  color: #888;
}
.login_layout-col div{
  margin: 10px 0 20px;
}
.login_layout-col div:last-child{
  margin: 20px 0;
  font-size: 24px;
  color: #959595;
}
</style>
