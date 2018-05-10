/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {

  devtool: 'cheap-module-source-map',

  entry: path.resolve(__dirname, 'src/index.jsx'),

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'assets'),
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    https: true,
    inline: true,
    open: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }, {
        test: /\.s?css$/,
        exclude: path.resolve(__dirname, 'src/styles'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              camelCase: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.s?css$/,
        include: path.resolve(__dirname, 'src/styles'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              camelCase: true
            }
          }
        ]
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: 'file-loader'
      }, {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        use: 'url-loader?prefix=font/&limit=5000'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }, {
        test: /\.gif/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000&mimetype=image/gif'
      }, {
        test: /\.jpg/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000&mimetype=image/jpg'
      }, {
        test: /\.png/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000&mimetype=image/png'
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};