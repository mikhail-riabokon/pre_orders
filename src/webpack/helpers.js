const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// import notify from './plugins/notifyStats';


const appRoot = path.resolve(__dirname, '..', '..');
const srcPath = path.join(appRoot, 'src', 'client');

exports.getJsEntry = () => {
  const result = [
    path.join(srcPath, 'index'),
  ];

  if (process.env.HOT) {
    result.unshift(
      'webpack-hot-middleware/client'
    );
  }

  return result;
};

exports.getOutput = () => {
  return {
    path: path.resolve(appRoot, 'assets'),
    filename: 'app.js',
    publicPath: '/assets',
  };
};

exports.getLoaders = () => {
  function getStyleLoader() {
    return process.env.HOT
      ? 'style!css!sass'
      : ExtractTextPlugin.extract('style', 'css!sass');
  }

  return [
    {
      test: /(\.js$|\.jsx$)/,
      loader: 'babel',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$|\.css$/,
      loader: getStyleLoader(),
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'file?name=/images/[name].[ext]',
    },
    {
      test: /\.(woff|ttf|eot|svg)$/,
      loader: 'file?name=/fonts/[name].[ext]',
    },
  ];
};

exports.getBabelConfig = () => {
  const config = {
    passPerPreset: true,
    presets: [
      'react',
      'es2015',
      'stage-0',
    ],
  };

  if (process.env.HOT) {
    config.plugins = [['react-transform', {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module'],
      }],
    }]];
  }

  return config;
};

exports.getPlugins = () => {
  const uglifyConfig = {
    compress: {
      warnings: false,
    },
  };

  if (process.env.NODE_ENV !== 'production') {
    uglifyConfig.exclude = /app\.js/;
  }

  const result = [
    // new TransferWebpackPlugin([{
    //   from: 'node_modules/democracy-styles/democracy/static/images',
    //   to: 'images',
    // }]),
    // function () {
    //   this.plugin('done', notify);
    // },
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(uglifyConfig),
  ];

  if (process.env.HOT) {
    result.unshift(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    );
  } else {
    result.push(
      new ExtractTextPlugin('[name].css')
    );
  }



  return result;
}
