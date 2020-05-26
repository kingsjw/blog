module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'kingsjw - %s',
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover' },
      { hid: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fflog.jpg?alt=media&token=5d7a96e9-b03a-47a9-a2ac-0267ca4a4939' },
      { hid: 'og:title', name: 'og:title', content: 'kingsjw - blog' },
      { hid: 'og:description', name: 'og:description', content: '개발자 서재우의 개인 블로그 입니다.' },
      { name: 'google-site-verification', content: 'lBJohKMHlGpwP9qnoSEDvOnl4QR56H-2_TYkzC5O9So'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: 'nuxt',
  build: {
    extractCSS: true,
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
    extend (config, { isDev, isClient }) {
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
    { src: './plugins/firebase.js', ssr: false },
    { src: './plugins/vue2-editor.js', ssr: false }
  ],
  modules: ['nuxt-sass-resources-loader'],
  css: [
    '~/assets/css/normalize.css',
  ],
  router: {
    extendRoutes(routes, resolve) {
      let parent = '';
      parent = routes.find(route => route.path === '/travel');
      parent.children = [];
      parent.children.push({
        name: 'travel-edit',
        path: ':popFlag?',
      });
      parent = routes.find(route => route.path === '/movie');
      parent.children = [];
      parent.children.push({
        name: 'movie-edit',
        path: ':popFlag?',
      });
      parent = routes.find(route => route.path === '/tech');
      parent.children = [];
      parent.children.push({
        name: 'tech-edit',
        path: ':popFlag?',
      });
    },
  },
};

