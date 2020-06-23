<template>
  <div class="headerWrap">
    <div class="content">
      <button
        v-if="pageDepth.length < 2"
        class="menu"
        @click="showNavigation ? close() : open()"
      ></button>
      <button
        v-else
        class="menu back"
        @click="$router.back()"
      ></button>
      <div class="title">
        <h1>kingsjw {{ pageName ? `- ${pageName}` : '' }}</h1>
      </div>
    </div>
    <transition
      name="slide-left"
      mode="out-in"
    >
      <div
        v-if="showNavigation"
        class="navWrap"
      >
        <div class="titleWrap">
          <span class="title" @click="home">my topic</span>
          <div
            v-if="!$store.state.user.isLogin"
            @click="openLogin"
            class="login"
          ></div>
          <span
            v-else
            @click="$emit('logout')"
            class="logout"
          >Log out</span>
        </div>
        <nav class="pages">
          <ul>
            <li>
              <nuxt-link to="profile" class="list" :class="pageName.indexOf('profile') !== -1 ? 'active' : ''">
                <i v-if="pageName.indexOf('profile') === -1" class="icon profile"></i>
                <span class="name">Profile</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="tech" class="list" :class="pageName.indexOf('tech') !== -1 ? 'active' : ''">
                <i v-if="pageName.indexOf('tech') === -1" class="icon tech"></i>
                <span class="name">Tech</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="movie" class="list" :class="pageName.indexOf('movie') !== -1 ? 'active' : ''">
                <i v-if="pageName.indexOf('movie') === -1" class="icon movie"></i>
                <span class="name">Movie</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="travel" class="list" :class="pageName.indexOf('travel') !== -1 ? 'active' : ''">
                <i v-if="pageName.indexOf('travel') === -1" class="icon travel"></i>
                <span class="name">Travel</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="showNavigation"
        @click="close"
        class="mask"
      ></div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showNavigation: false,
      };
    },
    computed: {
      pageDepth() {
        return this.$route && this.$route.path ? this.$route.path.split('/').filter(v => v !== '') : [];
      },
      pageName() {
        return (this.$route && this.$route.path) ? this.$route.path.split('/')[1] : '';
      },
    },
    methods: {
      home() {
        this.showNavigation = false;
        this.$router.replace('/');
        window.document.body.style.overflowY = '';
      },
      openLogin() {
        this.showNavigation = false;
        this.$emit('openLogin');
      },
      open() {
        this.showNavigation = true;
        window.document.body.style.overflowY = 'hidden';
      },
      close() {
        this.showNavigation = false;
        window.document.body.style.overflowY = '';
      },
      move(path) {
        this.showNavigation = false;
        this.$router.push(`/${path}`);
        window.document.body.style.overflowY = '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .headerWrap{
    width: 100%;
    min-height: 60px;
    z-index: 1;
    .content{
      padding: 9px 16px;
      width: 100%;
      background-color: #816bff;
      position: fixed;
      display: flex;
      align-items: center;
      .title{
        font-size: 20px;
        vertical-align: top;
        margin-left: 20px;
        color: #fff;
        h1{
          font-size: inherit;
          font-weight: normal;
          margin: 0;
        }
      }
      .menu{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 0 8px;
        background-size: 24px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(~assets/img/icons/menu.svg);
        position: relative;
        outline: none;
        user-select: none;
        &.back{
          background-size: 32px;
          background-image: url(~assets/img/icons/chevron-left.svg);
        }
        &:hover{
          background-color: #816bff;
        }
      }
    }
    .navWrap{
      width: 230px;
      max-width: calc(100vw - 125px);
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 2;
      box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
      .titleWrap{
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        .title {
          font-size: 20px;
        }
        .login {
          width: 16px;
          height: 16px;
          background-image: url(~assets/img/icons/login.png);
          background-size: 16px;
          background-repeat: no-repeat;
          background-position: center;
        }
        .logout{
          text-decoration: underline;
          font-size: 14px;
        }
      }
      .pages{
        padding: 8px 0;
        .list{
          display: flex;
          padding: 4px 16px;
          min-height: 48px;
          align-items: center;
          color: inherit;
          text-decoration: none;
          &.active{
            background-color: rgba(129, 107, 255, 0.4);
            color: #816bff;
            font-size: 18px;
            font-weight: bold;
          }
          .icon{
            width: 24px;
            height: 24px;
            background-size: 24px;
            background-position: center;
            background-repeat: no-repeat;
            margin-right: 32px;
            &.profile{
              background-image: url(~assets/img/icons/account.svg);
            }
            &.tech{
              background-image: url(~assets/img/icons/code.svg);
            }
            &.movie{
              background-image: url(~assets/img/icons/movie.svg);
            }
            &.travel{
              background-image: url(~assets/img/icons/travel.svg);
            }
          }
          .name {
            font-weight: 400;
            font-size: 14px;
            line-height: 1.25em;
          }
        }
      }
    }
    .mask{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
</style>
