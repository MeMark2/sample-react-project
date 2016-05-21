var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: './bin/bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
    ]
  },
};