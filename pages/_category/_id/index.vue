<template>
  <div class="postViewPage">
    <PostView :post="post" ref="postView"></PostView>
    <PostSideMenu
      v-if="isSideMenuOpen"
      :menus="
        post.toc.map(({ id, text, depth }) => ({ id, text, depth, path }))
      "
    ></PostSideMenu>
  </div>
</template>
<script>
import PostSideMenu from '../../../components/Post/PostSideMenu.vue';
import PostView from '../../../components/Post/PostView.vue';

export default {
  async asyncData({ $content, route }) {
    const { category, id } = route.params;
    const post = await $content(`${category}/${id}`, {
      deep: true,
    }).fetch();
    const { title, description, coverImage, path } = post;
    return {
      title,
      description,
      coverImage,
      post,
      path,
    };
  },
  data() {
    return {
      isOverWindowHeight: false,
    };
  },
  components: {
    PostView,
    PostSideMenu,
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: this.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.coverImage,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.description,
        },
      ],
    };
  },
  computed: {
    isSideMenuOpen() {
      return !this.$store.state.device.isMobile && this.isOverWindowHeight;
    },
  },
  mounted() {
    this.isOverWindowHeight =
      window.innerHeight < this.$refs.postView.$el.clientHeight;
  },
};
</script>

<style lang="scss" scoped>
.postViewPage {
  @include mobile {
    padding: 0 14px;
  }

  @include tablet {
    padding: 0 14px;
  }
}
</style>
