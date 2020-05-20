const path = require('path');

module.exports = {
  index: 'page1/index.html',
  pages: [
    {
      page: 'page1',
      entry: path.resolve(__dirname, '../project/page1/main.js'),
      title: '这是页面1',
      filename: path.resolve(__dirname, '../dist/page1/index.html'),
      template: path.resolve(__dirname, '../project/page1/index.html')
    },
    {
      page: 'page2',
      entry: path.resolve(__dirname, '../project/page2/main.js'),
      title: '这是页面2',
      filename: path.resolve(__dirname, '../dist/page2/index.html'),
      template: path.resolve(__dirname, '../project/page1/index.html')
    }

  ]
}

