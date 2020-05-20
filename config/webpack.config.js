const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const arkenv = require('../env/ark.env')
const devenv = require('../env/dev.env')
const prodenv = require('../env/prod.env')

let env = {}

switch (process.env.NODE_ENV) {
  case 'development' :
    env = devenv
    break;
  case 'ark' :
    env = arkenv
    break;
  case 'prod' :
    env = prodenv
    break;       
}



module.exports = {

  entry:  path.resolve(__dirname, '../src/main.js'),

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
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

   

    new HtmlWebpackPlugin({
      title: 'Output Management',
      template:'public/index.html'
    }),

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