<template>
  <div class="headerWrap">
    <header
      v-if="!$store.state.device.isMobile"
    >
      <nav class="wrap">
        <div class="logo" @click="$router.replace('/')">
          <a href="/">
            kingsjw
            <p>software engineer</p>
          </a>
        </div>
        <div class="menu">
          <ul>
            <li><a href="/profile" :class="$route.path && $route.path.indexOf('profile') >= 0 ? 'active' : ''">Profile</a></li>
            <li><a href="/tech" :class="$route.path && $route.path.indexOf('tech') >= 0 ? 'active' : ''">Tech</a></li>
            <li><a href="/movie" :class="$route.path && $route.path.indexOf('movie') >= 0 ? 'active' : ''">Movie</a></li>
            <li><a href="/travel" :class="$route.path && $route.path.indexOf('travel') >= 0 ? 'active' : ''">Travel</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<style lang="scss">
  .scrollWeb{
    header{
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    }
  }
</style>

<style lang="scss" scoped>
  .headerWrap{
    width: 100%;
    height: 80px;
    a{
      text-decoration: none;
      color: inherit;
      display: block;
    }
    header{
      transition: .3s ease;
      z-index: 1;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      position: fixed;
      background-color: #fff;
      top: 0;
      .wrap{
        width: 1200px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
          font-weight: bold;
          font-size: 22px;
          cursor: pointer;
          p{
            margin: 2px 0 0 0;
            line-height: normal;
            font-size: 10px;
            font-weight: normal;
            color: #aaa;
          }
        }
        .menu ul{
          display: flex;
          align-items: center;
          li{
            font-size: 16px;
            margin-left: 27px;
            &:first-of-type{
              margin-left: 0;
            }
            > a{
              font-weight: 800;
              white-space: nowrap;
              display: flex;
              align-items: center;
              height: 36px;
              &.active{
                color: #816bff;
              }
              &:hover{
                color: #816bff;
              }
            }
          }
        }
      }
    }
  }
</style>
