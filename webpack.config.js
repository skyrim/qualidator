const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const package = require('./package.json')

const outDir = 'lib'

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: isProd
    ? { 'qualidator.min': path.resolve(__dirname, 'src/index.ts') }
    : { qualidator: path.resolve(__dirname, 'src/index.ts') },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, outDir),
    libraryTarget: 'commonjs'
  },
  devtool: isProd ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-unicode-property-regex']
          }
        }
      },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.json$/, use: 'raw-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new webpack.DefinePlugin({
      PACKAGE_VERSION: JSON.stringify(package.version)
    })
  ]
}
