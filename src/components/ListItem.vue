<template>
  <li class="listItem">
    <div class="info_head">
      <img :src="avatar" class="avatar">
    </div>
    <div class="info">
      <div class="info_layout fontMax">
        <div class="info_title">{{ title }}</div>
        <img class="icon" src="../assets/ic_arrow_upward_black_24px.svg"/>
      </div>
      <div class="info_layout fontMin">
        <span>{{ time }}</span>
        <div class="info_index">
          <img class="icon" src="../assets/ic_visibility_black_24px.svg" />
          <span>{{ visitCount }}</span>
          <img class="icon" src="../assets/ic_thumb_up_black_24px.svg" />
          <span>{{ replyCount }}</span>
        </div>
      </div>
    </div>
  </li>
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
  computed: {
    time() {
      return this.$moment(this.$props.time).fromNow();
    },
  },
};
</script>

<style>
.listItem {
  padding: 2% 3%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  background: #ffffff;
}
.avatar{
  margin: 0 10%;
  width: 80%;
  border-radius: 50%;
  border: 1px solid #cccccc;
}
.info {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.info_head{
  width: 20%;
}
.info_layout{
  display: flex;
  justify-content: space-between;
}
.info_index{
  width: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.info_title{
  width: 500px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.fontMax{
  font-size: 32px;
  color: #666666;
}
.fontMin{
  font-size: 24px;
  color: #cccccc;
}
.icon{
  width: 32px;
  color: #cccccc;
}
</style>
