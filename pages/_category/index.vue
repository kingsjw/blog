<template>
  <div
    class="categoryPage"
    :class="$store.state.device.isMobile ? 'mobile' : ''"
  >
    <div class="contents">
      <h2 class="pageTitle">{{ utils.postPageTitle(pageName) }}</h2>
      <ListWrap :posts="posts"></ListWrap>
    </div>
  </div>
</template>

<script>
import utils from '~/utils/index.js';
import ListWrap from '../../components/Post/PostListWrap.vue';
import Helmet from '../../Helmet.json';

export default {
  async asyncData({ $content, route }) {
    const { category } = route.params;
    const posts = await $content(route.params.category, {
      deep: true,
    }).fetch();
    return {
      category,
      posts,
    };
  },
  components: {
    ListWrap,
  },
  head() {
    return Helmet[this.category];
  },
  data() {
    return {
      utils,
    };
  },
  computed: {
    pageName() {
      return this.$route && this.$route.path
        ? this.$route.path.split('/')[1]
        : '';
    },
  },
};
</script>

<style lang='scss' scoped>
.categoryPage {
  &.mobile {
    padding: 0 20px;
  }
  .contents {
    @include contentsWidth;
    margin: 40px auto;
    .pageTitle {
      font-weight: bold;
      font-size: 20px;
      color: #494c62;
    }
  }
}
</style>
