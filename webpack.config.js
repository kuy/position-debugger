'use strict';

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/in-memory',
    filename: 'bundle.js',
    publicPath: '/in-memory'
  }
};
