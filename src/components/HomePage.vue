<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: mapState({
    listData: state => state.list.listData,
  }),
};
</script>

<style scoped>
.home {

}
</style>
