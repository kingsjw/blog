<template>
	<div class="profile">
    <div class="intro">
      <div class="personal">
        <div class="profile-img"></div>
        <div class="info-wrap">
          <div class="name">Seo Jae Woo</div>
          <div class="info-text">hi! im software engineer.</div>
        </div>
      </div>
      <div class="info-list">
        <div class="title">State</div>
        <div class="list-wrap">
          <div class="list">
            <div class="name">Company</div>
            <div class="info">Bringprice korea</div>
          </div>
          <div class="list">
            <div class="name">Position</div>
            <div class="info">Front-end Developer</div>
          </div>
        </div>
      </div>
      <div class="info-list contact">
        <div class="title">Contact Information</div>
        <div class="list-wrap">
          <div class="list">
            <div class="name">Email</div>
            <div class="info">Kingsjw7@gmail.com</div>
          </div>
          <div class="list">
            <div class="name">Phone Number</div>
            <div class="info">Request via email</div>
          </div>
          <div class="list">
            <div class="name">Address</div>
            <div class="info">Seoul Republic of korea</div>
          </div>
        </div>
      </div>
      <div class="info-list skills">
        <div class="title">Skills</div>
        <div class="list-wrap">
          <div class="list">
            <div class="name">Software engineering</div>
            <div class="info">
              <div @click="openUrl('https://www.google.com/search?q=java+script')" class="clip">Java Script</div>
              <div @click="openUrl('https://www.google.com/search?q=Nuxt.js')" class="clip">Nuxt.js</div>
              <div @click="openUrl('https://www.google.com/search?q=Vue.js')" class="clip">Vue.js</div>
              <div @click="openUrl('https://www.google.com/search?q=node.js')" class="clip">Node.js</div>
              <div @click="openUrl('https://www.google.com/search?q=Bitbucket')" class="clip">Bitbucket</div>
              <div @click="openUrl('https://www.google.com/search?q=Source+Tree')" class="clip">Sourcetree</div>
              <div @click="openUrl('https://www.google.com/search?q=jira')" class="clip">jira</div>
              <div @click="openUrl('https://www.google.com/search?q=git')" class="clip">git</div>
              <div @click="openUrl('https://www.google.com/search?q=git+hub')" class="clip">git hub</div>
              <div @click="openUrl('https://www.google.com/search?q=Amazon+Aws')" class="clip">Amazon Aws</div>
              <div @click="openUrl('https://www.google.com/search?q=Java')" class="clip">Java</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <portfolios
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
  components: {
    portfolios,
  },
  data() {
    return {
      projectList: [],
    };
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank');
    },
    getProjectList() {
      const db = Firebase.firestore();
      db.collection('project').orderBy("date", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = Object.assign({ id: doc.id }, doc.data());
          this.projectList.push(data);
        });
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
          }
          .info-text{
            font-size: 12px;
            color: #939499;
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
    }
    &::after{
      clear: both;
      content: '';
      display: block;
    }
	}
</style>
