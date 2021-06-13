<template>
  <div class="postView markdown-body">
    <nuxt-content :document="post"></nuxt-content>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.postView {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 80px;
}
</style>
