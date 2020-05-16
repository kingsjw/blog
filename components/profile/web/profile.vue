<template>
	<div class="profile">
    <div class="intro">
      <div class="personal">
        <div class="profile-img"></div>
        <div class="info-wrap">
          <div class="name">{{ myInfo.intro.name }}</div>
          <div class="info-text">{{ myInfo.intro.self }}</div>
          <div class="social">
            <div @click="openUrl(myInfo.social.gitHub)" class="gitHub"></div>
          </div>
        </div>
      </div>
      <div class="info-list">
        <div class="title">State</div>
        <div
          v-for="(key, index) in Object.keys(myInfo.state)"
          :key="index"
          class="list-wrap"
        >
          <div class="list">
            <div class="name">{{ key }}</div>
            <div class="info">{{ myInfo.state[key] }}</div>
          </div>
        </div>
      </div>
      <div class="info-list contact">
        <div class="title">Contact Information</div>
        <div
          v-for="(key, index) in Object.keys(myInfo.contact)"
          :key="index"
          class="list-wrap"
        >
          <div class="list">
            <div class="name">{{ key }}</div>
            <div class="info">{{ myInfo.contact[key] }}</div>
          </div>
        </div>
      </div>
      <div class="info-list skills">
        <div class="title">Skills</div>
        <div class="list-wrap">
          <div class="list">
            <div class="name">Software engineering</div>
            <div class="info">
              <div
                v-for="(val, index) in myInfo.skills"
                :key="index"
                @click="openUrl(val.url)"
                class="clip"
              >{{ val.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="title">- projects</div>
      <portfolios
        :loading="loading"
        :projectList="projectList"
        @getProject="getProjectList"
      ></portfolios>
    </div>
	</div>
</template>

<script>
import Firebase from 'firebase';
import portfolios from './portfolios.vue';

export default {
  props: ['myInfo'],
  components: {
    portfolios,
  },
  data() {
    return {
      loading: false,
      projectList: [],
    };
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank');
    },
    getProjectList() {
      const db = Firebase.firestore();
      this.loading = true;
      db.collection('project').orderBy("date", "asc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = Object.assign({ id: doc.id }, doc.data());
          this.projectList.push(data);
        });
        this.$store.commit('profile/saveData', this.projectList);
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
	.profile{
		width: 1200px;
    height: calc(100vh - 80px);
		margin: 0 auto;
    .intro{
      width: 300px;
      height: 100%;
      position: fixed;
      top: 80px;
      left: calc(50% - 600px);
      bottom: 0;
      box-shadow: 2px 0 2px -2px rgba(0,0,0,0.2);
      .title{
        font-size: 16px;
        font-weight: bold;
        color: #000;
      }
      .personal{
        .profile-img{
          width: 65px;
          height: 65px;
          background-color: #ccc;
          border-radius: 50px;
          margin: 15px auto;
          background-image: url(~assets/img/profile.png);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .info-wrap{
          text-align: center;
          .name{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
          }
          .info-text{
            font-size: 12px;
            color: #939499;
          }
          .social{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 0;
            .gitHub{
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background-image: url(~assets/img/icons/gitHub.png);
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              cursor: pointer;
              transition: .3s ease;
              &:hover{
                opacity: 0.7;
              }
            }
          }
        }
      }
      .info-list{
        margin-top: 40px;
        .list-wrap{
          margin-top: 12px;
          .list{
            margin-top: 18px;
            &:first-of-type{
              margin-top: 0;
            }
            .name{
              color: #939499;
              font-size: 12px;
            }
            .info{
              margin-top: 5px;
              font-size: 14px;
            }
            .clip{
              cursor: pointer;
              padding: 4px 10px;
              background-color: #ff5252;
              color: #fff;
              border-radius: 16px;
              margin-left: 4px;
              display: inline-block;
              margin-top: 6px;
              transition: .3s ease;
              &:hover{
                background-color: #e73939;
              }
            }
          }
        }
        &.skills{
          .list{
            .info{
              margin-left: -4px;
            }
          }
        }
      }
    }
    .project{
      width: 800px;
      position: absolute;
      left: calc(50% - 280px);
      .title{
        margin: 20px 0 0 8px;
        font-size: 26px;
        color: #28323c;
      }
    }
    &::after{
      clear: both;
      content: '';
      display: block;
    }
	}
</style>
