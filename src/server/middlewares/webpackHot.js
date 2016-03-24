const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('./webpackDev');

module.exports = webpackHotMiddleware(webpackDevMiddleware.compiler);
