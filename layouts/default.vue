<template>
  <div
    class="pageWrap"
    :class="{
      scrollDown,
      scrollDownTop,
      scrollWeb,
    }"
  >
    <HeaderWeb v-if="!$store.state.device.isMobile"></HeaderWeb>
    <HeaderMobile v-else></HeaderMobile>
    <div class="contentWrap">
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderWeb from '@/components/Common/Web/Header.vue';
import HeaderMobile from '@/components/Common/Mobile/Header.vue';
import Footer from '@/components/Common/Footer.vue';

export default {
  components: {
    HeaderWeb,
    HeaderMobile,
    Footer,
  },
  data() {
    return {
      scrollDown: false,
      scrollDownTop: false,
      scrollWeb: false,
      timeout: '',
      isMobile: false,
    };
  },
  methods: {
    bodyScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (this.lastScroll < scrollY) {
        this.scrollDown = true;

        this.scrollDownTop = scrollY >= 30;
      } else {
        this.scrollDown = false;
        this.scrollDownTop = false;
      }
      if (scrollY <= 0) {
        this.scrollDown = false;
        this.scrollDownTop = false;
        this.scrollWeb = false;
      } else {
        this.scrollWeb = true;
      }
      if (scrollY + window.outerHeight > document.body.clientHeight - 50) {
        this.scrollDown = false;
      }
      this.lastScroll = scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.bodyScroll);
    this.isMobile = !!(
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
    this.$store.commit('device/changeDevice', this.isMobile);
  },
};
</script>

<style lang="scss">
  h2 {
    font-size: inherit;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  input {
    &:focus {
      outline: none;
    }
  }
  .slide-bottom-fade-enter-active,
  .slide-bottom-fade-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    will-change: transform, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slide-left-enter, .slide-left-leave-to
      /* .slide-leave-active below version 2.1.8 */ {
    transform: translate3D(-100%, 0, 0);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter, .fade-leave-to,
    .slide-bottom-fade-enter, .slide-bottom-fade-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .slide-bottom-fade-enter {
    transform: translateY(100%);
  }
  .slide-bottom-fade-leave {
    transform: translateY(-100%);
  }
</style>

