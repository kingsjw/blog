<template>
  <div class="errorPostView">
    <div class="wrap">
      <div class="pepe"></div>
      <div class="message">
        <div class="title">???: 404 {{ error.message }}</div>
        <div v-if="isPageView && isPageView === 'view'">
          이미 삭제되었거나 존재하지 않는 글
        </div>
      </div>
      <div class="back" @click="back">목록으로 돌아가기</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    pageName() {
      return this.$route && this.$route.path
        ? this.$route.path.split('/')[1]
        : '';
    },
    isPageView() {
      return this.$route && this.$route.path
        ? this.$route.path.split('/')[2]
        : '';
    },
  },
  methods: {
    back() {
      this.$router.replace(`/${this.pageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.errorPostView {
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    .pepe {
      width: 350px;
      height: 350px;
      border-radius: 50%;
      background-image: url(~assets/img/pepe.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 280px;
      background-color: transparent;
    }
    .message {
      font-size: 16px;
      text-align: center;
      line-height: 2em;
      .title {
        font-weight: bold;
        font-size: 2em;
      }
    }
    .back {
      cursor: pointer;
      margin-top: 10px;
      text-decoration: underline;
    }
  }
}
</style>
