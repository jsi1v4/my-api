const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { resolve } = require('./utils');

module.exports = {
  target: 'node',
  entry: resolve('src/main.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: [
        /node_modules/,
        /\.test.ts?$/
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    filename: 'index.js',
    path: resolve('dist')
  }
};
