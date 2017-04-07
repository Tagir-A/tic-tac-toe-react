const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      })
    }
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "client.min.js"
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
}