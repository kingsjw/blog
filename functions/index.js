const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');

const nuxtConfig = require('./nuxt.config.js');

const config = {
  nuxtConfig,
  dev: false,
  debug: true,
  buildDir: 'nuxt',
};
const nuxt = new Nuxt(config);

exports.kingsjw7 = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});
