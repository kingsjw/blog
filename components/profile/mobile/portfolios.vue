<template>
  <div class="portfolios">
    <div
      v-for="(data, index) in projectListData"
      :key="index"
      class="card"
    >
      <div
        class="projectImg"
        :style="{ backgroundImage: `url(${data.image})` }"
      ></div>
      <div class="titleWrap">
        <div class="title">{{ data.title }}</div>
        <div class="subTitle">{{ data.subTitle }}</div>
      </div>
      <div class="contents">{{ data.intro }}</div>
      <div class="techStack">
        <span
          v-for="(x, i) in data.techStack"
          :key="i"
        >{{ `#${x}` }}</span>
      </div>
      <div class="result">
        <div
          v-for="(key, index) in Object.keys(data.projectUrl)"
          :key="index"
          @click="openUrl(data.projectUrl[key])"
          class="icon"
          :class="key"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['projectList'],
    computed: {
      projectListData() {
        let data = [];
        if (this.projectList && this.projectList.length > 0) {
          data = this.projectList;
        } else {
          data = this.$store.state.profile.project;
        }
        return data;
      },
    },
    methods: {
      openUrl(url) {
        window.open(url, '_blank');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .portfolios{
    .card{
      width: 100%;
      margin-top: 20px;
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
      border-radius: 2px;
      padding-bottom: 16px;
      .projectImg{
        width: 100%;
        min-height: 210px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .titleWrap{
        padding: 24px 16px 16px 16px;
        .title{
          font-size: 20px;
          line-height: 32px;
        }
        .subTitle{
          font-size: 14px;
          color: #777;
        }
      }
      .contents{
        padding: 0 16px 8px 16px;
        font-size: 14px;
        line-height: 22px;
      }
      .techStack{
        padding: 0 16px;
        text-align: right;
        span{
          font-size: 14px;
          opacity: 0.8;
          margin-left: 10px;
          &:first-of-type{
            margin-left: 0;
          }
        }
      }
      .result{
        display: flex;
        justify-content: flex-end;
        padding: 8px 16px 0 16px;
        .icon{
          width: 16px;
          height: 16px;
          margin-right: 10px;
          background-size: 16px;
          background-repeat: no-repeat;
          background-position: center;
          &:last-of-type{
            margin-right: 0;
          }
          &.site{
            background-image: url(~assets/img/icons/site.svg);
          }
          &.aos{
            background-image: url(~assets/img/icons/aos.svg);
          }
          &.ios{
            background-image: url(~assets/img/icons/ios.svg);
          }
        }
      }
    }
  }
</style>
