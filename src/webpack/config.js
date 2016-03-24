const helpers = require('./helpers');
const config = {
  entry: helpers.getJsEntry(),
  output: helpers.getOutput(),
  module: {
    loaders: helpers.getLoaders(),
  },
  babel: helpers.getBabelConfig(),
  plugins: helpers.getPlugins(),
  progress: true,
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx'],
  },
};

if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'eval-source-map';
}

module.exports = config;
