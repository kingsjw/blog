<template>
  <div ref="postView">
    <div
      class="postView markdown-body"
      :class="$store.state.device.isMobile ? 'mobile' : ''"
    >
      <nuxt-content :document="post" ref="nuxtContent"></nuxt-content>
    </div>
    <PostSideMenu
      v-if="isSideMenuOpen"
      :currentlyActiveTocId="currentlyActiveTocId"
      :toc="toc"
    ></PostSideMenu>
  </div>
</template>

<script>
import PostSideMenu from '@/components/Post/PostSideMenu.vue';

export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOverWindowHeight: false,
      currentlyActiveTocId: '',
      observer: null,
    };
  },
  components: {
    PostSideMenu,
  },
  computed: {
    isSideMenuOpen() {
      return !this.$store.state.device.isMobile && this.isOverWindowHeight;
    },
    toc() {
      return this.post.toc.map(({ id, text, depth, path }) => ({
        id,
        text,
        depth,
        path,
      }));
    },
  },
  methods: {
    getSectionTarget(element) {
      if (!element) {
        return undefined;
      }

      if (element.tagName === 'H2' || element.tagName === 'H3') {
        return element;
      }

      return this.getSectionTarget(element.previousSibling);
    },
  },
  mounted() {
    if (this.$refs.postView) {
      this.isOverWindowHeight =
        window.innerHeight < this.$refs.postView.clientHeight;
    }
    // TODO(Kingsjw): intersection obserber hook으로 분리하자
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = this.getSectionTarget(entry.target);
          const sectionId = section ? section.getAttribute('id') : undefined;
          if (entry.isIntersecting && sectionId) {
            this.currentlyActiveTocId = sectionId;
          }
        });
      },
      {
        root: this.$refs.nustContent,
        rootMargin: `0px 0px -${100 - (210 / window.innerHeight) * 100}% 0px`,
        threshold: 0.8,
      }
    );

    document
      .querySelectorAll(
        '.nuxt-content h2[id], .nuxt-content h3[id], .nuxt-content h3[id] ~ p'
      )
      .forEach((section) => {
        this.observer.observe(section);
      });
  },
};
</script>

<style>
.postView.markdown-body.mobile img,
.postView.markdown-body.mobile video {
  width: 100%;
  height: auto;
  transition: 0.3s ease;
}
.postView.markdown-body.mobile img[data-scale-effect='true']:hover {
  transform: scale(1.2);
}
</style>

<style lang="scss" scoped>
.postView {
  @include postViewWidth;
  margin: 0 auto;
  padding: 0 0 80px;

  @include mobile {
    padding: 0 20px 80px;
  }

  @include tablet {
    padding: 0 20px 80px;
  }
}
</style>
