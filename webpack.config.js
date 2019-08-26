const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    // 這邊要放絕對路徑，所以用 path，__dirname 是目前路徑
    path: path.resolve(__dirname, 'dist'), 
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_nodules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}