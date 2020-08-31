const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist/assets/scripts'),
    filename: 'bundle.js',
    // publicPath: '/'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/scripts/',

  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  optimization: {
    minimize: false
  },

};
