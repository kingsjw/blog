<template>
  <nuxt-link :to="post.path" class="list">
    <div v-if="post && post.coverImage" class="thumbnail">
      <div
        :style="{ backgroundImage: `url(${post.coverImage})` }"
        class="image"
      ></div>
    </div>
    <div v-else class="errorImage"></div>
    <div class="info">
      <div class="title">{{ post.title }}</div>
      <div class="description">{{ post.description }}</div>
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
  border: 1px solid #eee;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  text-decoration: none;
  position: relative;
  width: calc(33.33% - 20px);
  @include tablet {
    width: calc(50% - 15px);
  }
  @include mobile {
    width: 100%;
  }
  .thumbnail {
    width: 100%;
    overflow: hidden;
    .image {
      width: 100%;
      padding-bottom: 110%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .errorImage {
    width: 100%;
    height: 82%;
    min-height: 300px;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/common%2Fno-image.jpeg?alt=media&token=8986b7c8-8fd0-4cab-990f-801dabb9a8fd');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .info {
    padding: 24px 16px;
    color: #494c62;
    background-color: #fff;
    .title {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
    }
    .description {
      margin-top: 4px;
      font-size: 11px;
      line-height: 16px;
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
