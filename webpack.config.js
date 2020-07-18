const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeSass = require('node-sass');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader', 
          {
            loader: 'sass-loader',
            options: {
              implementation: nodeSass
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
};
