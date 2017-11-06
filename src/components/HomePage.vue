<template>
  <div class="home">
    <mt-navbar class="tab" fixed>
      <mt-tab-item id="all" class="tab_item">全部</mt-tab-item>
      <mt-tab-item id="good" class="tab_item">精华</mt-tab-item>
      <mt-tab-item id="shark" class="tab_item">分享</mt-tab-item>
      <mt-tab-item id="ask" class="tab_item">问答</mt-tab-item>
      <mt-tab-item id="job" class="tab_item">招聘</mt-tab-item>
    </mt-navbar>
    <div v-if="initLoad()">
      正在加载中
    </div>
    <ul
      class="scroll"
      v-else
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :avatar="item.author.avatar_url"
        :time="item.create_at"
        :title="item.title"
        :replyCount="item.reply_count"
        :visitCount="item.visit_count"
        :top="item.top"
      />
      <div>加载更多</div>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    tab() {
      return this.$store.state.list.tab;
    },
    list() {
      const { tab, listData } = this.$store.state.list;
      return listData[tab].data;
    },
  },
  // watch: {
  //   list: {
  //     deep: true,
  //     handler() {
  //       console.log('aaa');
  //     },
  //   },
  // },
  methods: {
    initLoad() {
      const { tab, listData } = this.$store.state.list;
      return listData[tab].id.length === 0;
    },
    loadMore() {
      const { tab, listData } = this.$store.state.list;
      if (listData[tab].id.length !== 0) this.requestList();
    },
    requestList() {
      const { tab, listData } = this.$store.state.list;
      const data = {
        tab,
        page: listData[tab].page,
        limit: listData[tab].limit,
      };
      this.$store.dispatch('getList', data);
    },
  },
  components: {
    ListItem,
  },
  mounted() {
    this.$data.loading = true;
    this.requestList();
  },
};
</script>

<style scoped>
.tab {
  margin-top: 90px;
  background: #26a2ff;
}
.tab_item {
  color: #ffffff;
}
.scroll {
  margin: 0;
  padding: 0;
  position: absolute;
  padding: 182px 0 100px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
.scroll li {
  list-style: none;
}
</style>
