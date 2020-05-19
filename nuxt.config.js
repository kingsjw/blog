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
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
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
  build: {
    babel: {
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
      ],
    },
    vender: [
      'vue2-editor',
      'eventsource-polyfill',
      'babel-polyfill'
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
    },
  },
};

