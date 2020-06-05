<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
  import error404 from '~/components/error/postView404.vue';

  export default {
    name: 'nuxt-error',
    layout: 'blog', // optional
    props: {
      error: {
        type: Object,
        default: () => {
        },
      },
    },
    computed: {
      errorPage() {
        return error404;
      },
    },
  }
</script>
