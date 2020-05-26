<template>
  <div class="listViewLoading" :class="$store.state.device.isMobile ? 'mobile' : ''">
    <div class="title">
      <div>
        <div class="moveItem"></div>
      </div>
    </div>
    <div class="image">
      <div class="moveItem"></div>
    </div>
    <div class="contents">
      <div
        v-for="x in 5" :key="x"
        :style="{ width: `${x * 2 >= 5 ? 5 : x * 2}0%` }"
      >
        <div class="moveItem"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .listViewLoading{
    margin-top: 30px;
    &.mobile{
      .image{
        height: 221px;
      }
    }
    .title{
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #eaecef;
      padding-bottom: .3em;
      > div{
        width: 33%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: #f8f8f8;
      }
    }
    .image{
      width: 100%;
      height: 470px;
      margin-top: 16px;
      background-color: #f8f8f8;
      position: relative;
      overflow: hidden;
    }
    .contents{
      margin-top: 24px;
      > div{
        width: 40%;
        height: 24px;
        margin-top: 16px;
        background-color: #f8f8f8;
        position: relative;
        overflow: hidden;
        &:first-of-type{
          margin-top: 0;
        }
      }
    }
    .moveItem{
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(to left, rgba(238, 238, 238, 0), #fff, rgba(255, 255, 255, 0));
      opacity: 0;
      display: block;
      position: absolute;
      animation: moveleft 1s infinite linear;
    }
    @keyframes moveleft {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      10%{
        opacity: 1;
      }
      60%{ opacity: 1; }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
  }
</style>