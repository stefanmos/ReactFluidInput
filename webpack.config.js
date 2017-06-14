var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
      }
    ]
  }
}
