const merge = require('webpack-merge');
const common = require('./webpack.config.js');



module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins:[

  ],
  devServer: {
    contentBase: './dist',
    host: '127.0.0.1',
    hot: true,
    open: false,//默认打开浏览器
    port:9999,//服务端口
    
  },  
})