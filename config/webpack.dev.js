/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');

const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    compress: false,
    open: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
        test: /.(css)$/,
      },
    ],
  },
  devtool: 'eval-source-map',
  plugins: [new HotModuleReplacementPlugin()],
};

module.exports = merge(common, devConfig);
