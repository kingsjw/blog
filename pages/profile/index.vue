<template>
  <profileWeb
    v-if="!$store.state.common.isMobile"
    :myInfo="myInfo"
  ></profileWeb>
  <profileMobile
    v-else
    :myInfo="myInfo"
  ></profileMobile>
</template>

<script>
import profileWeb from '~/components/profile/web/profile.vue';
import profileMobile from '~/components/profile/mobile/profile.vue';

export default {
  components: {
    profileWeb,
    profileMobile
  },
  data() {
    return {
      myInfo: {
        intro: {
          name: 'Seo jae woo',
          self: 'hi im software engineer',
        },
        social: {
          gitHub: 'https://github.com/kingsjw?tab=repositories',
        },
        state: {
          company: 'Bringprice korea',
          position: 'Front-end Developer',
        },
        contact: {
          email: 'kingsjw7@gmail.com',
          phone: 'Request via email',
          address: 'Seoul Republic of korea',
        },
        skills: [
          {
            name: 'Java Script (es6+)',
            url: 'https://www.google.com/search?q=java+script',
          },
          {
            name: 'Nuxt.js',
            url: 'https://www.google.com/search?q=Nuxt.js',
          },
          {
            name: 'Vue.js',
            url: 'https://www.google.com/search?q=Vue.js',
          },
          {
            name: 'Node.js',
            url: 'https://www.google.com/search?q=Node.js',
          },
          {
            name: 'Bitbucket',
            url: 'https://www.google.com/search?q=Bitbucket',
          },
          {
            name: 'Sourcetree',
            url: 'https://www.google.com/search?q=Sourcetree',
          },
          {
            name: 'jira',
            url: 'https://www.google.com/search?q=jira',
          },
          {
            name: 'git',
            url: 'https://www.google.com/search?q=git',
          },
          {
            name: 'git hub',
            url: 'https://www.google.com/search?q=git+hub',
          },
          {
            name: 'Amazon Aws',
            url: 'https://www.google.com/search?q=Amazon Aws',
          },
          {
            name: 'Java',
            url: 'https://www.google.com/search?q=Java',
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>
