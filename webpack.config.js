/**
 * @file webpack.config.js
 * Contains Webpack build configuration.
 */

const dns = require('dns');
const os = require('os');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV_PRODUCTION = 'production';
const NODE_ENV_DEVELOPMENT = 'development';
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : NODE_ENV_DEVELOPMENT;

// Construct plugins array.
const plugins = [];
plugins.push(new HtmlWebpackPlugin({
  template: 'src/index.html',
  inject: 'body',
  filename: 'index.html',
}));

if (NODE_ENV === NODE_ENV_PRODUCTION) {
  plugins.push(new FaviconsWebpackPlugin({
    logo: './src/assets/images/logo.png',
    inject: true,
  }));
}

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

/**
 * Fetches and resolves this machine's IP address.
 *
 * @returns {Promise}
 *   Promise that resolves this machine's IP address.
 */
const fetchIp = () => (
  new Promise((resolve, reject) => {
    dns.lookup(os.hostname(), (error, address) => (
      error ? reject(error) : resolve(address)
    ));
  })
);

module.exports = () => (
  fetchIp().then(host => ({
    entry: './src/index.jsx',
    output: {
      path: `${__dirname}/dist`,
      filename: 'drupalcon-vr.[hash].js',
      publicPath: '',
    },
    module: {
      loaders,
    },
    devServer: {
      host,
    },
    plugins,
  })).catch((error) => {
    throw new Error(error);
  })
);
