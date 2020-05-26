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

  const result = await nuxt.renderRoute(req.path); // Returns { html, error, redirected }
  res.send(result.html); // Sends html as response
});
