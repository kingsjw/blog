<template>
  <profileWeb
    v-if="!$store.state.device.isMobile"
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
  head() {
    return {
      title: '개발자 서재우',
      meta: [
        { hid: 'description', name: 'description', content: `개발자 서재우의 프로필 입니다.` },
        { hid: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fflog.jpg?alt=media&token=5d7a96e9-b03a-47a9-a2ac-0267ca4a4939' },
        { hid: 'og:title', name: 'og:title', content: '개발자 서재우' },
        { hid: 'og:description', name: 'og:description', content: `개발자 서재우의 프로필 입니다.` },
      ],
    };
  },
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
