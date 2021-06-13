<template>
  <PostView :post="post"></PostView>
</template>
<script>
import PostView from '../../../components/Post/PostView.vue';

export default {
  async asyncData({ $content, route }) {
    const { category, id } = route.params;
    const post = await $content(`${category}/${id}`, {
      deep: true,
    }).fetch();
    const { title, description, coverImage } = post;
    return {
      title,
      description,
      coverImage,
      post,
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