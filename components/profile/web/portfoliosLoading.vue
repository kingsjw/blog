<template>
  <div class="list-wrap">
    <div class="list">
      <div class="moveItem"></div>
      <div class="listImage"></div>
      <div class="info-wrap">
        <div class="intro">
          <div class="title"></div>
          <div class="subTitle"></div>
        </div>
        <div class="btnWrap">
          <div v-for="x in 3" :key="x" class="btn"></div>
        </div>
      </div>
      <div class="explanation">
        <div v-for="x in 3" :key="x"></div>
      </div>
      <div id="data">
        <div class="graph-wrap">
          <div
            v-for="x in 3"
            :key="x"
            :style="{ width: `${x + 2}0%` }"
            class="graph"
          >
            <div
              v-for="x in 3" :key="x"
              class="graph-data"
            ></div>
          </div>
        </div>
        <div class="graph-info">
          <div class="dev-wrap">
            <div
              v-for="x in 3"
              :key="x"
              class="dev">
              <div class="color"></div>
              <div class="name"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-bottom">
        <div class="dev-stack">
          <ul>
            <li
              v-for="x in 4"
              :key="x"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list-wrap{
    padding: 50px 0;
    .list {
      position: relative;
      height: 100%;
      background: #fff;
      border-radius: 6px;
      margin-top: 20px;
      border-top: 1px solid #f2f2f2;
      padding-top: 20px;
      overflow: hidden;
      &:first-of-type{
        border-top: none;
        margin-top: 0;
      }
      .listImage {
        width: 100%;
        height: 310px;
        background-color: #f8f8f8;
      }
      .info-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .intro {
          width: 100%;
          .title, .subTitle{
            background-color: #f8f8f8;
          }
          .title {
            width: 30%;
            height: 35px;
          }
          .subTitle {
            width: 50%;
            margin-top: 5px;
            height: 19px;
          }
        }
        .btnWrap{
          display: flex;
          .btn{
            min-width: 88px;
            height: 36px;
            border-radius: 2px;
            background-color: #f8f8f8;
            margin-left: 16px;
            &:first-of-type{
              margin-left: 0;
            }
          }
        }
      }
      .explanation{
        padding: 8px 16px 16px 0;
        margin-top: 10px;
        div{
          width: 30%;
          height: 10px;
          background-color: #f8f8f8;
          margin-top: 5px;
          &:first-of-type{
            margin-top: 0;
          }
        }
      }
      #data {
        width: 100%;
        height: 160px;
        background-color: #fff;
        position: relative;
        .graph-wrap {
          width: 68%;
          height: 100%;
          display: flex;
          flex-flow: column;
          position: relative;
          .graph {
            height: 32px;
            position: relative;
            margin-top: 15px;
            .graph-data {
              width: 100%;
              text-align: center;
              line-height: 32px;
              background-color: #f8f8f8;
              position: absolute;
              border-top-right-radius: 20px;
              border-bottom-right-radius: 20px;
              bottom: 0;
              height: 100%;
            }
          }
        }
        .graph-info {
          width: 28%;
          top: 0;
          bottom: 0;
          right: 0;
          padding-left: 15px;
          border-left: 1px dashed #f8f8f8;
          position: absolute;
          .dev-wrap {
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            .dev {
              display: flex;
              margin-top: 15px;
              align-items: center;
              .color {
                width: 15px;
                height: 15px;
                margin-right: 10px;
                background-color: #f8f8f8;
              }
              .name{
                background-color: #f8f8f8;
                width: 80px;
                height: 5px;
              }
            }
          }
        }
      }
      .info-bottom {
        .dev-stack {
          display: flex;
          justify-content: center;
          padding-top: 15px;
          ul {
            li {
              width: 60px;
              height: 32px;
              font-size: 18px;
              background-color: #f8f8f8;
              border-radius: 30px;
              margin-left: 10px;
              float: left;
            }
            &:after {
              clear: both;
              content: '';
              display: block;
            }
          }
        }
      }
    }
    &:after{
      clear: both;
      content: "";
      display: block;
    }
  }
  .moveItem{
    width: 77px;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(to left, rgba(238, 238, 238, 0), #fff, rgba(255, 255, 255, 0));
    content: '';
    opacity: 0;
    display: block;
    position: absolute;
    animation: moveleft 2s infinite linear;
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
      transform: translateX(800px);
    }
  }
</style>