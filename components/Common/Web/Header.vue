<template>
  <header>
    <div class="content">
      <div class="wrap">
        <nuxt-link :to="'/'" class="logo">
          <h1>
            kingsjw
            <p>Software Engineer</p>
          </h1>
        </nuxt-link>
        <nav class="menu">
          <ul>
            <li>
              <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tech">Tech</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/movie">Movie</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/travel">Travel</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.scrollWeb {
  header {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}
header {
  width: 100%;
  height: $headerHeight * 1px;
  @include mobile {
    height: $headerMobileHeight * 1px;
    padding: 14px 0;
  }
  .content {
    width: 100%;
    height: $headerHeight * 1px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    @include tablet {
      padding: 0 14px;
    }
    @include mobile {
      height: $headerMobileHeight * 1px;
      padding: 14px 0;
    }
    .wrap {
      @include contentsWidth;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      @include mobile {
        height: auto;
        flex-direction: column;
      }
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
      .menu {
        @include mobile {
          margin-top: 20px;
        }
        ul {
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
              &.nuxt-link-active {
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
}
</style>
