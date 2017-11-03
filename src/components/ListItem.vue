<template>
  <div class="listItem">
    <div class="avatar"></div>
    <div class="info">
      <div class="info_layout">
        <span>{{ title }}</span>
      </div>
      <div class="info_layout">
        <span>{{ time }}</span>
        <div>
          <span>{{ visitCount }}</span>
          <span>{{ replyCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  data() {
    return {};
  },
  props: {
    avatar: {
      type: String,
      default: 'https://avatars3.githubusercontent.com/u/3118295?v=4&s=120',
    },
    time: {
      type: String,
      default: '2017-05-27T06:07:49.278Z',
    },
    title: {
      type: String,
      default: '测试请发到客户端测试专区，违规影响用户的，直接封号',
    },
    replyCount: {
      type: Number,
      default: 123,
    },
    visitCount: {
      type: Number,
      default: 26168,
    },
    top: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: '592917b59e32cc84569a7458',
    },
  },
};
</script>

<style>
.listItem {
  display: flex;
  justify-content: space-around;
  background: #ffffff;
}
.avatar {
  width: 30%;
}
.info {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.info_layout {
  display: flex;
  justify-content: space-around;
}
</style>
