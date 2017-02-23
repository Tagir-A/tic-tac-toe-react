const webpack = require('webpack');

module.exports = {
  context: __dirname,
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
    path: __dirname + "/js/",
    filename: "client.min.js"
  },
}