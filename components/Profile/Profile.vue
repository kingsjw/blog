<template>
  <div class="markdown-body">
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
