<template>
  <div class="portfoliosLoading">
    <div class="card">
      <div class="moveItem"></div>
      <div class="projectImg"></div>
      <div class="titleWrap">
        <div class="title"></div>
        <div class="subTitle"></div>
      </div>
      <div class="contents">
        <div
          v-for="x in 5"
          :key="x"
          :style="{ width: `${((x * 2) > 7 ? 7 : x * 2)}0%` }"
          ></div>
      </div>
      <div class="techStackWrap">
        <div>
          <div class="techStack"></div>
          <div class="techStack"></div>
        </div>
      </div>
      <div class="result">
        <div
          v-for="x in 3"
          :key="x"
          class="icon"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .portfoliosLoading{
    .card{
      width: 100%;
      margin-top: 20px;
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
      border-radius: 2px;
      padding-bottom: 16px;
      overflow: hidden;
      position: relative;
      .projectImg{
        width: 100%;
        min-height: 210px;
        background-color: #f8f8f8;
      }
      .titleWrap{
        padding: 24px 16px 16px 16px;
        .title, .subTitle{
          background-color: #f8f8f8;
        }
        .title{
          width: 25%;
          height: 27px;
        }
        .subTitle{
          margin-top: 5px;
          width: 30%;
          height: 16px;
        }
      }
      .contents{
        padding: 0 16px 8px 16px;
        div{
          width: 40%;
          height: 17px;
          margin-top: 5px;
          background-color: #f8f8f8;
          &:first-of-type{
            margin-top: 0;
          }
        }
      }
      .techStackWrap{
        padding: 0 16px;
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        > div{
          width: 50%;
          .techStack{
            width: 100%;
            height: 13px;
            background-color: #f8f8f8;
            margin-top: 5px;
            &:first-of-type{
              margin-top: 0;
            }
          }
        }
      }
      .result{
        display: flex;
        justify-content: flex-end;
        padding: 8px 16px 0 16px;
        margin-top: 5px;
        .icon{
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #f8f8f8;
          margin-right: 10px;
          &:last-of-type{
            margin-right: 0;
          }
        }
      }
    }
    .moveItem{
      width: 10%;
      top: 0;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(to left, rgba(238, 238, 238, 0), #fff, rgba(255, 255, 255, 0));
      content: '';
      opacity: 0;
      display: block;
      position: absolute;
      animation: moveleft 1s infinite linear;
    }
    @keyframes moveleft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      10%{
        opacity: 1;
      }
      60%{ opacity: 1; }
      to {
        opacity: 0;
        transform: translateX(500px);
      }
    }
  }
</style>