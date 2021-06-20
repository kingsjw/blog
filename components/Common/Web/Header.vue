<template>
  <div class="headerWrap">
    <header v-if="!$store.state.device.isMobile">
      <div class="wrap">
        <nuxt-link :to="'/'" class="logo">
          <h1>
            kingsjw
            <p>software engineer</p>
          </h1>
        </nuxt-link>
        <nav class="menu">
          <ul>
            <li>
              <nuxt-link
                to="/profile"
                :class="
                  $route.path && $route.path.indexOf('profile') >= 0
                    ? 'active'
                    : ''
                "
                >Profile</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/tech"
                :class="
                  $route.path && $route.path.indexOf('tech') >= 0
                    ? 'active'
                    : ''
                "
                >Tech</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/movie"
                :class="
                  $route.path && $route.path.indexOf('movie') >= 0
                    ? 'active'
                    : ''
                "
                >Movie</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/travel"
                :class="
                  $route.path && $route.path.indexOf('travel') >= 0
                    ? 'active'
                    : ''
                "
                >Travel</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style lang="scss">
.scrollWeb {
  header {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>

<style lang="scss" scoped>
.headerWrap {
  width: 100%;
  height: 80px;
  a {
    color: inherit;
    text-decoration: none;
  }
  header {
    transition: 0.3s ease;
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
    .wrap {
      @include contentsWidth;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: inherit;
        margin: 0;
      }
      .logo {
        font-weight: bold;
        font-size: 22px;
        cursor: pointer;
        p {
          margin: 2px 0 0 0;
          line-height: normal;
          font-size: 10px;
          font-weight: normal;
          color: #aaa;
        }
      }
      .menu ul {
        display: flex;
        align-items: center;
        li {
          font-size: 16px;
          margin-left: 27px;
          list-style: none;
          &:first-of-type {
            margin-left: 0;
          }
          > a {
            font-weight: 800;
            white-space: nowrap;
            height: 36px;
            color: inherit;
            text-decoration: none;
            &.active {
              color: #816bff;
            }
            &:hover {
              color: #816bff;
            }
          }
        }
      }
    }
  }
}
</style>
