<template>
  <nuxt-link
    :to="post.path"
    class="list"
    :class="$store.state.device.isMobile ? 'mobile' : ''"
  >
    <div v-if="post && post.coverImage" class="thumbnail">
      <div
        :style="{ backgroundImage: `url(${post.coverImage})` }"
        class="image"
      ></div>
    </div>
    <div v-else class="errorImage"></div>
    <div>
      <div class="info">
        <div class="title">{{ post.title }}</div>
        <div class="writer">작성자: {{ post.writer }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
        coverImage: '',
        writer: '',
        createdAt: '',
        path: '',
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: calc((100% / 3) - 22px);
  height: 520px;
  margin-left: 30px;
  border: 1px solid #eee;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  &:nth-child(n + 4) {
    margin-top: 30px;
  }
  &:nth-child(3n + 1) {
    margin-left: 0;
  }
  &:not(.mobile):hover {
    transform: scale(1.02);
  }
  &.mobile {
    width: 100%;
    height: 342px;
    margin-left: 0;
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
    .thumbnail {
      height: 78%;
    }
    .errorImage {
      height: 78%;
      background-size: 38%;
    }
    .info {
      padding: 20px 18px;
    }
  }
  .thumbnail {
    width: 100%;
    height: 82%;
    .image {
      width: 100%;
      height: 100%;
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .errorImage {
    width: 100%;
    height: 82%;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fno-image.png?alt=media&token=b92dd35f-3bb6-4f70-b809-3015ae981df7');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .info {
    padding: 32px 16px;
    color: #494c62;
    line-height: 20px;
    .title {
      font-size: 16px;
      font-weight: 600;
    }
    .writer {
      font-size: 10px;
    }
  }
}
</style>
