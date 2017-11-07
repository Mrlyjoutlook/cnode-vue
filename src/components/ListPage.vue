<template>
  <div class="list">
    <div v-if="check(topics)">
      <ListItem v-for="item in recent_topics" :key="item.id" :dataSource="item" />
    </div>
    <div v-else-if="check(replies)">
      <ListItem v-for="item in recent_topics" :key="item.id" :dataSource="item" />
    </div>
    <div v-else>
      <ListItem v-for="item in recent_topics" :key="item.id" :dataSource="item" />
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'ListPage',
  data() {
    return {

    };
  },
  computed: {
    recent_topics() {
      return this.$store.state.user.baseInfo.recent_topics || [];
    },
    recent_replies() {
      return this.$store.state.user.baseInfo.recent_replies || [];
    },
    collect() {
      return '';
    },
  },
  metods: {
    check(str) {
      const { path } = this.$route;
      return path.indexOf(str) !== -1;
    },
  },
  components: {
    ListItem,
  },
}
</script>

<style>

</style>
