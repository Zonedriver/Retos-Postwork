const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

const { title } = require('process');
const { Template } = require('webpack');

module.exports = 
{
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  /*plugins: 
  [
    new HtmlWebpackPlugin
    (
      {
        filename: 'index.html',
        template: './src/index.html'
      }
    )
  ]*/
}