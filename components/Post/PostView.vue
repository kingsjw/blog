<template>
  <div
    class="postView markdown-body"
    :class="$store.state.device.isMobile ? 'mobile' : ''"
  >
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

<style lang="scss">
.markdown-body {
  &.mobile {
    img,
    video {
      width: 100%;
      height: auto;
    }
  }
}
</style>

<style lang="scss" scoped>
.postView {
  @include postViewWidth;
  margin: 0 auto;
  padding: 0 0 80px;
  &.mobile {
    padding: 0 20px 80px;
  }
}
</style>
