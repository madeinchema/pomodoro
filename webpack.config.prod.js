const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/app.js',

  // output: {
  //   path: path.resolve(__dirname, 'dist/scripts'),
  //   filename: 'bundle.js',
  //   // publicPath: '/'
  // },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: '',
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
