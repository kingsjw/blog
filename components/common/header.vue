<template>
  <div class="header-wrap">
    <mobile
      v-if="$store.state.common.isMobile"
    ></mobile>
    <web
      v-else
    ></web>
  </div>
</template>
<script>
  import web from './web/header.vue';
  import mobile from './mobile/header.vue';

  export default {
    components: {
      web,
      mobile,
    },
  };
</script>

<style lang="scss" scoped>
  .header-wrap{
    width: 100%;
    height: 80px;
  }
</style>
