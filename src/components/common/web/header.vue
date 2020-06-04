<template>
  <div class="headerWrap">
    <header
      v-if="!$store.state.device.isMobile"
    >
      <nav class="menuGroup">
        <ul>
          <li>
            <a href="https://kingsjw7-f7e06.firebaseapp.com">Home</a>
          </li>
          <li>
            <a href="https://kingsjw7-f7e06.firebaseapp.com/profile">Profile</a>
          </li>
          <li>
            <a href="https://kingsjw7-f7e06.firebaseapp.com/tech">Tech</a>
          </li>
          <li>
            <a href="https://kingsjw7-f7e06.firebaseapp.com/movie">Movie</a>
          </li>
          <li>
            <a href="https://kingsjw7-f7e06.firebaseapp.com/travel">Travel</a>
          </li>
        </ul>
      </nav>
      <div class="wrap">
        <div class="logo" @click="$router.replace('/')">
          kingsjw
          <p>software engineer</p>
        </div>
        <div class="menu">
          <ul>
            <li><button @click="$router.push('/profile')" :class="$route.path && $route.path.indexOf('profile') >= 0 ? 'active' : ''">Profile</button></li>
            <li><button @click="$router.push('/tech')" :class="$route.path && $route.path.indexOf('tech') >= 0 ? 'active' : ''">Tech</button></li>
            <li><button @click="$router.push('/movie')" :class="$route.path && $route.path.indexOf('movie') >= 0 ? 'active' : ''">Movie</button></li>
            <li><button @click="$router.push('/travel')" :class="$route.path && $route.path.indexOf('travel') >= 0 ? 'active' : ''">Travel</button></li>
          </ul>
        </div>
      </div>
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
            > button{
              font-weight: 800;
              white-space: nowrap;
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
