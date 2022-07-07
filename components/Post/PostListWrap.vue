<template>
  <div class="itemWrap">
    <List
      v-for="(
        { title, coverImage, description, writer, createdAt, path, date }, index
      ) in posts"
      :key="`${title}-${index}`"
      :post="{ title, writer, coverImage, description, createdAt, path, date }"
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
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
}
</style>
