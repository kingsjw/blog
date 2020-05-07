<template>
  <div class="main" :class="$store.state.common.isMobile ? 'mobile' : ''">
    <div class="wrap">
<!--      <p class="title">최근 활동</p>-->
<!--      <div class="newsfeed">-->
<!--        <p>프로젝트 - 뉴스피드</p>-->
<!--          &lt;!&ndash; 리스트 컴포넌트 &ndash;&gt;-->
<!--      </div>-->
<!--      <div class="newsfeed">-->
<!--        <p>영화 - 뉴스피드</p>-->
<!--          &lt;!&ndash; 리스트 컴포넌트 &ndash;&gt;-->
<!--      </div>-->
<!--      <div class="newsfeed">-->
<!--        <p>드라마 - 뉴스피드</p>-->
<!--          &lt;!&ndash; 리스트 컴포넌트 &ndash;&gt;-->
<!--      </div>-->
<!--      <div class="newsfeed">-->
<!--        <p>여행 - 뉴스피드</p>-->
<!--          &lt;!&ndash; 리스트 컴포넌트 &ndash;&gt;-->
<!--      </div>-->
      <div class="flog"></div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
  .main{
    &.mobile{
      .wrap{
        width: 100%;
        padding: 0 20px;
        .flog {
          width: 100%;
          height: 400px;
          background-size: 360px
        }
      }
    }
    .wrap{
      width: 1200px;
      margin: 0 auto;
      padding-top: 20px;
      .flog{
        width: 100%;
        height: 500px;
        background-size: 600px 400px;
        background-image: url(~assets/img/flog.gif);
        background-repeat: no-repeat;
        background-position: center;
      }
      .title{
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
</style>

