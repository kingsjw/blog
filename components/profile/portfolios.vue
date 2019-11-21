<template>
  <div class="portfolio-list">
    <div class="box">
      <div class="list-wrap">
        <div
          v-for="(data, index) in projectList"
          :key="index"
          class="list">
          <div class="info-top">
            <img class="list_img" :src="data.image" :alt="index">
          </div>
          <div class="info-wrap">
            <div class="intro">
              <p class="title">{{ data.title }}</p>
              <P class="sub-title">{{ data.subTitle }}</P>
            </div>
            <div class="btn-wrap">
              <md-button
                @click="openUrl(data.projectUrl.site)"
                class="md-raised">site</md-button>
              <!--<div-->
                <!--v-if="$store.state.user.isLogin"-->
                <!--class="ctrl-btns">-->
                <!--<md-button-->
                  <!--@click="$emit('openFixed', index)"-->
                  <!--class="md-raised md-primary">Fixed</md-button>-->
                <!--<md-button-->
                  <!--@click="deleteProject(data.id, index)"-->
                  <!--class="md-raised md-accent">Delete</md-button>-->
              <!--</div>-->
            </div>
          </div>
          <div id="data">
            <div class="graph-wrap">
              <div
                v-for="(graph, z) in Object.keys(data.positions)"
                :key="z"
                :style="{ width: data.positions[graph].val + '%' }"
                class="graph">
                <div
                  :style="{ 'backgroundColor': colors[z] }"
                  class="graph-data">
                  <span
                    :style="data.positions[graph].val <= 20 ? { position: 'absolute', right: -(parseInt(data.positions[graph].val, 10) + 80) + 'px', left: 'calc(50% - 15px)', paddingTop: 0 } : {}"
                    class="data-val">{{ data.positions[graph].val }}%</span>
                </div>
              </div>
            </div>
            <div class="graph-info">
              <div class="dev-wrap">
                <div
                  v-for="(pos, z) in Object.keys(data.positions)"
                  :key="z"
                  class="dev">
                  <div
                    :style="{ backgroundColor: colors[z] }"
                    class="color"></div>
                  {{ data.positions[pos].name }}
                </div>
              </div>
            </div>
          </div>
          <div class="info-bottom">
            <div class="dev-stack">
              <ul>
                <li
                  v-for="(x, i) in data.techStack"
                  :key="i"
                >{{ x }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'portfolios',
    props: ['projectList'],
    data() {
      return {
        colors: ['#f06292', '#a7ffeb', '#81d4fa', '#e040fb'],
      };
    },
    methods: {
      openUrl(url) {
        window.open(url);
      },
      getProjectList() {
        this.$emit('getProject');
      },
      deleteProject(id, index) {
        this.$emit('delProject', id, index);
      },
    },
    mounted() {
      this.$nextTick(() => {
        if (Object.keys(this.projectList).length <= 0) {
          this.getProjectList();
        }
      });
    },
  };
</script>


<style lang="scss" scoped>
  @import 'vue-material/dist/vue-material.min.css';
  @import 'vue-material/dist/theme/default.css';
  .portfolio-list{
    .list-wrap{
      padding: 30px 0;
      .list {
        position: relative;
        height: 100%;
        background: #fff;
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        border-radius: 6px;
        margin-top: 20px;
        border-top: 1px solid #f2f2f2;
        padding-top: 10px;
        &:first-of-type{
          border-top: none;
          margin-top: 0;
        }
        .info-top {
          display: flex;
          justify-content: center;
          .list_img {
            width: auto;
            height: 320px;
            object-fit: contain;
          }
        }
        .info-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .intro {
            padding: 20px 16px;
            p {
              margin: 0;
            }
            .title {
              font-size: 30px;
              line-height: 42px;
              font-weight: 500;
              color: #4a4a4a;
            }
            .sub-title {
              font-size: 14px;
              line-height: 24px;
              color: #777;
            }
          }
          & > * {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        #data {
          width: 100%;
          height: 160px;
          background-color: #efefef;
          position: relative;
          .graph-wrap {
            width: 68%;
            height: 100%;
            display: flex;
            flex-flow: column;
            position: relative;
            .graph {
              height: 32px;
              align-self: start;
              position: relative;
              margin-top: 15px;
              .graph-data {
                width: 100%;
                text-align: center;
                line-height: 32px;
                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
                position: absolute;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                bottom: 0;
                animation-name: graph-ani;
                animation-duration: .3s;
                height: 100%;
              }
              @keyframes graph-ani {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }
              .data-val {
                padding-top: 10px;
                text-align: center;
              }
            }
          }
          .graph-info {
            width: 28%;
            top: 0;
            bottom: 0;
            right: 0;
            padding-left: 15px;
            border-left: 1px dashed #333;
            position: absolute;
            .dev-wrap {
              height: 100%;
              display: flex;
              flex-flow: column;
              justify-content: center;
              .dev {
                display: flex;
                line-height: 15px;
                margin-top: 15px;
                .color {
                  width: 15px;
                  height: 15px;
                  background-color: #81d4fa;
                  margin-right: 10px;
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
              padding: 0;
              li {
                padding: 8px 21px;
                line-height: 22px;
                font-size: 18px;
                border: 1px solid #ff5252;
                color: #ff5252;
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
          .btn-wrap {
            width: 100%;
            display: flex;
            justify-content: space-between;
            button {
              margin-right: 20px;
              margin-bottom: 15px;
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
  }
</style>
