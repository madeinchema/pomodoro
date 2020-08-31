const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },

  devServer: {
    contentBase: path.resolve(__dirname),
    // publicPath: '/',
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  optimization: {
    minimize: false,
  },
};
