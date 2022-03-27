/* eslint-disable import/no-extraneous-dependencies */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|gif)$/i,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
