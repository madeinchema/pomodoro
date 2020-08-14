const path = require('path');

module.exports = {

  entry: './src/Timer.js',

  output: {
    path: `${__dirname}/dist/assets/scripts`,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './dist'
  }

};
