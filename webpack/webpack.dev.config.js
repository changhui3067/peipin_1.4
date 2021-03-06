var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: path.join(__dirname, '..', '/root/src'),
  entry: {
      //'webpack-dev-server/client?http://0.0.0.0:8000'
      // Add each page's entry here
      index: './index/index'
    },
    output: {
      path: path.join(__dirname, '..', '/root/build'),
      filename: '[name].bundle.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')), // judge if dev environment.
        __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')) // judge if secret environment.
      }),
      new ExtractTextPlugin("[name].css"),
      new HtmlWebpackPlugin({
        template: './../templates/index.html',
        filename: 'index.html',
        chunks: ['index'],
        inject: 'body'
      })
    ],
    module: {
      perLoaders: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          loader: 'jshint-loader'
        }
      ],
      loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: "babel"
         },
         {
           test: /\.css$/,
           loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
         },
         {
           test: /\.scss$/,
           loader: 'style-loader!css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass'
         },
         {
           test: /\.(jpe?g|png|gif)$/i,
           loader: 'url?limit=10000!img?progressive=true'
         },
         {
            test: /\.(eot|woff|ttf|svg)$/,
            loader: 'url?limit=10000'
          }
      ],
      noParse: []
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      alias: {}
    },
    devtool: 'eval-source-map',
    jshint: {
      "esnext": true
    },
    devServer: {
      historyApiFallback: {
        index: 'index.html',
        rewrites: [
          { from: /\/index/, to: '/index.html'}
        ]
      }
    },
};

module.exports = config;
