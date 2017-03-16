/**
 * @file webpack.config.js
 * Contains Webpack build configuration.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Construct plugins array.
const plugins = [];
plugins.push(new HtmlWebpackPlugin({
  template: 'src/index.html',
  inject: 'body',
  filename: 'index.html',
}));

// Configure loaders.
const loaders = [
  {
    test: /\.js|jsx$/,
    exclude: /node_modules/,
    loaders: ['babel-loader'],
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ['file-loader'],
  },
  {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  },
];

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'drupalcon-vr.[hash].js',
    publicPath: '',
  },
  module: {
    loaders,
  },
  plugins,
};
