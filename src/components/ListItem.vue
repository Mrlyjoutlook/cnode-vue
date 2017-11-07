<template>
  <div class="item">
    <div>
      <img :src="dataSource.author.avatar_url" />
    </div>
    <div>
      <span>{{ dataSource.title }}</span>
      <span>{{ trans() }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    dataSource: {
      type: String,
      default: {},
    },
  },
  methods: {
    trans() {
      return this.$moment(this.$props.last_reply_at).fromNow();
    },
  },
}
</script>

<style>
.item{

}
</style>
