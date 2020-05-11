<template>
  <div class="main" :class="$store.state.common.isMobile ? 'mobile' : ''">
    <div class="wrap">
      <div class="titleWrap">
        <div class="title">Kingsjw blog</div>
        <div class="subTitle">software engineer 서재우의 일상이 담긴 블로그 입니다.</div>
      </div>
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
        .titleWrap{
          padding: 60px 20px;
          .title{
            font-size: 56px;
          }
          .subTitle{
            font-size: 24px;
          }
        }
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
      .titleWrap{
        padding: 140px 40px 120px 40px;
        .title{
          font-size: 110px;
          font-weight: 700;
          line-height: 1.4em;
        }
        .subTitle{
          margin-top: 10px;
          font-size: 26px;
          line-height: 140%;
          color: #40474D;
        }
      }
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

