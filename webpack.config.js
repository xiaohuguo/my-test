var path = require('path');
var webpack = require('webpack');
module.exports = {
  cache: true,
  entry: './js/app.js',
  output: {
    path: './public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!sass'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, "js")
      ],
      query: {
        presets: ['react']
      }
    }]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })],
  externals: ['React', 'ReactDOM'],
  devtool: 'eval'
};
