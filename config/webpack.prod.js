const merge = require('webpack-merge')
const common = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack')
// 分析包内容
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;





module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  plugins : [
    new UglifyJSPlugin(
      {
        sourceMap: true
      }
    ),
   // 开启 BundleAnalyzerPlugin
    // new BundleAnalyzerPlugin(),
  ]
})