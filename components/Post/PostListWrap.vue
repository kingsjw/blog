<template>
  <div class="postWrap">
    <div class="wrap">
      <h2>
        <p class="title">{{ utils.postPageTitle(pageName) }}</p>
      </h2>
      <div class="itemWrap">
        <List
          v-for="(
            { title, coverImage, description, writer, createdAt, path }, index
          ) in posts"
          :key="`${title}-${index}`"
          :post="{ title, writer, coverImage, description, createdAt, path }"
        ></List>
      </div>
    </div>
  </div>
</template>

<script>
import List from './PostList.vue';
import utils from '../../utils/index.js';

export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      utils,
    };
  },
  components: {
    List,
  },
  computed: {
    pageName() {
      return this.$route && this.$route.path
        ? this.$route.path.split('/')[1]
        : '';
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.postWrap {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 60px;
  &.mobile {
    margin-top: 30px;
    .wrap {
      width: 100%;
      margin: 0;
      padding: 0 20px;
      .itemWrap {
        display: block;
        flex-basis: initial;
        flex-wrap: initial;
        margin-top: 20px;
      }
      .title {
        margin-top: 10px;
      }
    }
  }
  .wrap {
    width: 1200px;
    margin: 0 auto;
    .title {
      font-weight: bold;
      font-size: 20px;
      color: #494c62;
    }
    .itemWrap {
      width: 100%;
      display: flex;
      flex-basis: 33.33%;
      flex-wrap: wrap;
      margin-top: 20px;
    }
  }
}
</style>
