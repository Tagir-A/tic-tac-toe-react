const webpack = require('webpack');
var path = require('path');
module.exports = {
  context: path.resolve(__dirname),
  devtool: "cheap-module-source-map",
  entry: "./js/app.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "client.min.js"
  },
}