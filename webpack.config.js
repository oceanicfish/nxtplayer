const path = require('path')

module.exports = {  
  mode: 'development',
  devtool: 'inline-source-map', // make vscode debug working
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'player.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    hot: true
  }
}