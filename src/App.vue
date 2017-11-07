<template>
  <div id="app">
    <mt-header fixed title="Cnode" class="header">
      <div slot="left">
        <mt-button icon="back" />
      </div>
    </mt-header>
    <router-view/>
    <mt-tabbar class="tabbar" v-show="showTab()">
      <mt-tab-item id="home">
        <div class="tabbar_item" v-on:click="tabEvent('/home/all')">
          <img src="./assets/ic_home_black_24px.svg"/>
          <span>首页</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="message">
        <div class="tabbar_item" v-on:click="tabEvent('/message')">
          <img src="./assets/ic_forum_black_24px.svg"/>
          <span>消息</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="publish">
        <div class="tabbar_item" v-on:click="tabEvent('/create')">
          <img src="./assets/ic_create_black_24px.svg"/>
          <span>发表</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="admin">
        <div class="tabbar_item" v-on:click="tabEvent('/admin')">
          <img src="./assets/ic_person_outline_black_24px.svg"/>
          <span>我的</span>
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    tabEvent(path) {
      this.$router.push(path);
    },
    showTab() {
      const { path } = this.$route;
      return path.indexOf('/login') === -1 && path.indexOf('/topic') === -1 && path.indexOf('/list') === -1;
    },
  },
};
</script>

<style>
#app{
  /* background: #dadada; */
}
.header{
  height: 90px;
}
.tabbar{
  border-top: solid 1px #c8c8c8;

}
.tabbar_item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
