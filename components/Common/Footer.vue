<template>
  <footer>
    <div class="container">
      <p class="siteFooterCopyright">
        Copyright &copy; 2019 All Right <em>서재우</em>
      </p>
      <p class="siteFooterContact">
        kingsjw7@gmail.com .
        <a href="https://github.com/kingsjw" target="_blank">GitHub</a> .
        <a href="https://kingsjw.github.io/blog/" target="_blank">Blog</a> .
        <a href="https://github.com/kingsjw/blog" target="_blank">Repository</a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #fff;
  color: #000;
  .container {
    @include contentsWidth;
    .siteFooterCopyright {
      text-transform: uppercase;
    }
    .siteFooterContact {
      margin-top: 10px;
      li {
        list-style: none;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>