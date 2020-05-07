const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ATL = require('awesome-typescript-loader')

const package = JSON.parse(fs.readFileSync('package.json').toString())

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
    library: 'qualidator',
    libraryTarget: 'umd'
  },
  devtool: isProd ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new ATL.CheckerPlugin(),
    new webpack.DefinePlugin({
      PACKAGE_VERSION: JSON.stringify(package.version)
    })
  ],
  devServer: {
    inline: false,
    open: true,
    watchContentBase: true
  }
}
