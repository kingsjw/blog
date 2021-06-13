<template>
  <div class="profile markdown-body">
    <nuxt-content
      v-for="(contentKey, index) in [
        'profile',
        'history',
        'teckStack',
        'exprience',
      ]"
      :key="index"
      :document="profile.find(({ slug }) => slug === contentKey)"
    ></nuxt-content>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 80px;
}
</style>
