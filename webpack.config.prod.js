const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = function (env, argv) {
  return {
    mode: 'production',

    entry: './src/app.js',

    // output: {
    //   path: path.resolve(__dirname, 'dist/scripts'),
    //   filename: 'bundle.js',
    //   // publicPath: '/'
    // },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },

    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
      new HtmlWebpackPlugin({
        title: 'Pomodoro App',
        template: path.resolve('./src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],

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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: './images',
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    optimization: {
      minimize: false,
    },
  };
};
