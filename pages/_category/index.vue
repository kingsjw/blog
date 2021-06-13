<template>
  <ListWrap :posts="posts"></ListWrap>
</template>

<script>
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
};
</script>
