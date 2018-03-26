var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  cache: true,
  entry: './src/scripts/main.jsx',
  output: {
    path: path.join(__dirname, 'dist', 'scripts'),
    publicPath: 'scripts/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        include: /\.json$/,
        loaders: ["json-loader"]
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: ['./dist/', './public'],
  },
};

// loaders: [
//   { test: /\.css$/, loader: 'style-loader' },
//   { test: /\.jsx?/, loader: 'jsx-loader' }
// ]

// {
//   test: /\.jsx$/,
//   exclude: /(node_modules|bower_components)/,
//   use: {
//     loader: 'babel-loader',
//     options: {
//       presets: [
//         'env',
//         'react'
//       ]
//     }
//   }
// },
