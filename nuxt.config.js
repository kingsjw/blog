module.exports = {
  /*
  ** Headers of the page
  */
  target: 'static',
  head: {
    titleTemplate: '개발자 서재우 - %s',
    title: '메인',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '개발자 서재우의 개인 블로그입니다.' },
      { hid: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fflog.jpg?alt=media&token=5d7a96e9-b03a-47a9-a2ac-0267ca4a4939' },
      { hid: 'og:title', name: 'og:title', content: '개발자 서재우' },
      { hid: 'og:description', name: 'og:description', content: '개발자 서재우의 개인 블로그입니다.' },
      { name: 'google-site-verification', content: 'lBJohKMHlGpwP9qnoSEDvOnl4QR56H-2_TYkzC5O9So' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#816bff' },
  /*
  ** Build configuration
  */
  generate: {
    dir: 'docs',
  },
  build: {
    babel: {
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
      ],
    },
    vender: [
      'vue2-editor',
      'eventsource-polyfill',
      'babel-polyfill',
      'es6-promise/auto'
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: './plugins/polyfill.js', ssr: false },
    { src: './plugins/vue2-editor.js', ssr: false }
  ],
  modules: ['nuxt-sass-resources-loader', '@nuxt/content'],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  css: [
    '~/assets/css/github-markdown.css',
    '~/assets/css/normalize.css',
  ],
  router: {
    base: '/blog/',
  },
};

