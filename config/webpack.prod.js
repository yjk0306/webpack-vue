const merge = require('webpack-merge')
const common = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack')





module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  plugins : [
    new UglifyJSPlugin(
      {
        sourceMap: true
      }
    ),
  

  ]
})