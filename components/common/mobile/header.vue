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
      <div class="title">kingsjw {{ pageName ? `- ${pageName}` : '' }}</div>
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
        <div class="pages">
          <div @click="move('profile')" class="list" :class="pageName.indexOf('profile') !== -1 ? 'active' : ''">
            <div v-if="pageName.indexOf('profile') === -1" class="icon profile"></div>
            <div class="name">Profile</div>
          </div>
          <div @click="move('travel')" class="list" :class="pageName.indexOf('travel') !== -1 ? 'active' : ''">
            <div v-if="pageName.indexOf('travel') === -1" class="icon travel"></div>
            <div class="name">Travel</div>
          </div>
        </div>
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
    min-height: 80px;
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
            &.travel{
              background-image: url(~assets/img/icons/travel.svg);
            }
          }
          .name {
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
