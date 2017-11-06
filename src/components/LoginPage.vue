<template>
  <div class="login">
    <div class="logo">Cnode</div>
    <mt-field label="accessToken" placeholder="please input accessToken" v-model="token" />
    <mt-radio title="set up" v-model="value" :options="option" />
    <div class="login_layout">
      <mt-button type="primary" class="btn">Sign in</mt-button>
    </div>
    <div class="login_layout-col">
      <span>其他登录方式</span>
      <div>
        <spa>gitlab</spa>
      </div>
      <div>mrlyj: <a href="https://github.com/Mrlyjoutlook/cnode-vue">项目地址</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      option: [{ label: 'save accessToken', value: true }],
    };
  },
};
</script>

<style scoped>
.login{
  margin-top: 90px;
}
.logo{
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
}
.btn{
  margin-top: 100px;
  width: 9rem;
}
.login_layout{
  width: 100%;
  display: flex;
  justify-content: center;
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
