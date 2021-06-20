<template>
  <div
    class="profilePage"
    :class="$store.state.device.isMobile ? 'mobile' : ''"
  >
    <Profile :profile="profile"></Profile>
  </div>
</template>

<script>
import '~/assets/css/github-markdown.css';
import Profile from '~/components/profile/profile.vue';

export default {
  head() {
    return {
      title: '프로필',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '개발자 서재우의 프로필 입니다.',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fflog.jpg?alt=media&token=5d7a96e9-b03a-47a9-a2ac-0267ca4a4939',
        },
        { hid: 'og:title', name: 'og:title', content: '개발자 서재우' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '개발자 서재우의 프로필 입니다.',
        },
      ],
    };
  },
  components: {
    Profile,
  },
  async asyncData({ $content }) {
    const profile = await $content('profile', {
      deep: true,
    }).fetch();
    return {
      profile,
    };
  },
};
</script>

<style lang='scss' scoped>
.profilePage {
  @include contentsWidth;
  margin: 0 auto;
  padding: 0 0 80px;
  z-index: -1;
  position: relative;
  &.mobile {
    padding: 20px;
  }
}
</style>
