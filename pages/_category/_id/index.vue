<template>
  <div class="postViewPage">
    <PostView :post="post"></PostView>
    <PostSideMenu
      v-if="!$store.state.device.isMobile"
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
          content: this.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.coverImage,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    };
  },
};
</script>