const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../webpack/config');
const compiler = webpack(webpackConfig);

module.exports.default = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
});

exports.compiler = compiler;
