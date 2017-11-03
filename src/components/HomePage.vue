<template>
  <div class="home">
    <mt-navbar class="tab">
      <mt-tab-item id="all" class="tab_item">全部</mt-tab-item>
      <mt-tab-item id="good" class="tab_item">精华</mt-tab-item>
      <mt-tab-item id="shark" class="tab_item">分享</mt-tab-item>
      <mt-tab-item id="ask" class="tab_item">问答</mt-tab-item>
      <mt-tab-item id="job" class="tab_item">招聘</mt-tab-item>
    </mt-navbar>
    <ul
      class="scroll"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled={false}
      infinite-scroll-distance="10">
      <ListItem/>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'HomePage',
  data() {
    return {
      list: ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'],
    };
  },
  methods: {
    loadMore() {
      console.log('aaaaa');
    },
  },
  components: {
    ListItem,
  },
};
</script>

<style scoped>
.tab{
  background: #26a2ff;
}
.tab_item{
  color: #ffffff;
}
.scroll{
  margin: 0;
  padding: 0;
  position: fixed;
}
.scroll li{
  list-style: none;
}
</style>
