<template>
  <div class="itemWrap">
    <List
      v-for="(
        { title, coverImage, description, writer, createdAt, path }, index
      ) in posts"
      :key="`${title}-${index}`"
      :post="{ title, writer, coverImage, description, createdAt, path }"
    ></List>
  </div>
</template>

<script>
import List from './PostList.vue';

export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    List,
  },
};
</script>

<style lang="scss" scoped>
.itemWrap {
  width: 100%;
  display: flex;
  flex-basis: 33.33%;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
