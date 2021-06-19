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
    <div class="info">
      <div class="title">{{ post.title }}</div>
      <div class="writing">
        <div class="writer">작성자: {{ post.writer }}</div>
        <div class="date">{{ ymdDateFormat(post.createdAt) }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { ymdDateFormat } from '../../utils';

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
  data() {
    return {
      ymdDateFormat,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: calc((100% / 3) - 22px);
  margin-left: 30px;
  border: 1px solid #eee;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  text-decoration: none;
  position: relative;
  &:nth-child(n + 4) {
    margin-top: 30px;
  }
  &:nth-child(3n + 1) {
    margin-left: 0;
  }
  &.mobile {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
    .thumbnail {
      .image {
        padding-bottom: 100%;
      }
    }
    .errorImage {
      background-size: 38%;
    }
    .info {
      padding: 20px 18px;
    }
  }
  .thumbnail {
    width: 100%;
    .image {
      width: 100%;
      padding-bottom: 110%;
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.3s ease;
      z-index: -1;
      &:hover {
        transform: scale(1.1);
      }
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
    padding: 24px 16px;
    color: #494c62;
    line-height: 20px;
    .title {
      font-size: 16px;
      font-weight: 600;
    }
    .writing {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
      .date,
      .writer {
        font-size: 11px;
      }
    }
  }
}
</style>
