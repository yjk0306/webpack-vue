const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const env = require('../env')
const multiple  = require('./multiple')

console.log(multiple)
const entry = {};

multiple.pages.forEach((value, index) => {
  entry[value.page] = value.entry;
})

console.log(entry)

module.exports = {

  entry:  path.resolve(__dirname, '../src/main.js'),
  // entry: entry,
  
  output: {
    path:  'dist/js',
    filename: "[name]/[name].js",
    chunkFilename: "[name]/[name].js",
    path: path.resolve(__dirname, '../dist')
  },

  resolve: {
    alias: {
      // 写了这句，我们可以这样写代码 import Vue from 'vue', 并且引入的是vue/dist/vue.runtime.esm.js这个版本，不然默认引入的是vue.js。这个在github的vue官方仓库dist目录下有解释。
      // 'vue$': 'vue/dist/vue.runtime.esm.js',
      // 写了这句，我们可以这样写代码 import api from '@/api/api.js'，省去到处找路径定位到src的麻烦
      '@': path.resolve(__dirname, '../src'),
      '@template': path.resolve(__dirname, '../src/components')
    },
    // 添加一个 resolve.extensions 属性，方便我们引入依赖或者文件的时候可以省略后缀
    // 我们在引入文件时可以这样写 import api from '@/api/api'。
    extensions: ['*', '.js', '.vue']
  },  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader : 'css-loader',
              options: {
                url : false
              }
            }
          ]
        })
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ],
        exclude:/node_modules/,
        include:/src/
      },
      {
        test:/\.(js|.jsx)$/,
        loader:'babel-loader',
        options: {
          plugins: ['syntax-dynamic-import'],
          presets: ['env']
        },
        exclude: /(node_modules|bower_components)/,
        include:/src/
      },
      {
        test:/\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          // loader: 'file-loader',
          options: {
              esModule: false, // 这里设置为false
              name: '[hash].[ext]',
              limit: 10000,
              outputPath:'images' //定义输出的图片文件夹
          }
       }],
        exclude:/node_modules/
    }
    ]
  },   

  plugins: [
    new CleanWebpackPlugin(),

   
// 单页面  start
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template:'public/index.html'
    }),
// 单页面 end

// 多页面 start
    // new HtmlWebpackPlugin({
    //   title: 'page1',
    //   filename: path.resolve(__dirname, '../dist/page1/index.html'),
    //   template: path.resolve(__dirname, '../project/page1/index.html'),
    //   chunks:['page1'], // 这里应该就可以找到 modA/modA.js 
    //   inject:true,
    //   hash:true
    // }),
    
    // new HtmlWebpackPlugin({
    //   title: 'page2',
    //   filename: path.resolve(__dirname, '../dist/page2/index.html'),
    //   template: path.resolve(__dirname, '../project/page2/index.html'),
    //   chunks:['page2'], // 这里应该就可以找到 modA/modA.js 
    //   inject:true,
    //   hash:true
    // }),
//  多页面 end 


    new webpack.DefinePlugin({
      'process.env' : JSON.stringify(env)
    }),
    
    new VueLoaderPlugin(),
    
    new ExtractTextPlugin({
      filename : '[name].min.css'
    }),
    new webpack.NamedModulesPlugin(),
   
    new webpack.HotModuleReplacementPlugin()
    ],

}