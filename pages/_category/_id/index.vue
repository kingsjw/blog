<template>
  <div class="postViewPage">
    <PostView :post="post"></PostView>
  </div>
</template>
<script>
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
