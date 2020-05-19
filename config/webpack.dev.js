const merge = require('webpack-merge');
const common = require('./webpack.config.js');



module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins:[

  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false,//默认打开浏览器
    port:9999,//服务端口
    
  },  
})