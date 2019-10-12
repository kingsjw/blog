module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons' },
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
    { src: './plugins/vue-material.js', ssr: false },
    { src: './plugins/vue2-editor.js', ssr: false }
  ],
  modules: ['nuxt-sass-resources-loader'],
  css: [
    '~/assets/css/normalize.css',
  ],
  router: {
    extendRoutes(routes, resolve) {
      let parent = routes.find(route => route.path === '/travel');
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

