<template>
  <div id="app">
    <mt-header title="Cnode" class="header">
      <div slot="left">
        <mt-button icon="back" />
      </div>
    </mt-header>
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <mt-tabbar>
      <mt-tab-item id="home">
        <router-link to="/">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="message">
        <router-link to="/message">消息</router-link>
      </mt-tab-item>
      <mt-tab-item id="publish">
        <router-link to="/publish">发表</router-link>
      </mt-tab-item>
      <mt-tab-item id="admin">
        <router-link to="/admin">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

<style>
#app {
  /* background: #dadada; */
}
.header {
  height: 90px;
}
</style>
