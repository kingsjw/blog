<template>
  <div class="main">
    <div class="wrap">
      <p class="title">최근 활동</p>
      <div class="newsfeed">
        <p>프로젝트 - 뉴스피드</p>
          <!-- 리스트 컴포넌트 -->
      </div>
      <div class="newsfeed">
        <p>영화 - 뉴스피드</p>
          <!-- 리스트 컴포넌트 -->
      </div>
      <div class="newsfeed">
        <p>드라마 - 뉴스피드</p>
          <!-- 리스트 컴포넌트 -->
      </div>
      <div class="newsfeed">
        <p>여행 - 뉴스피드</p>
          <!-- 리스트 컴포넌트 -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
  .main{
    .wrap{
      width: 1200px;
      margin: 0 auto;
      padding-top: 20px;
      .title{
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
</style>

