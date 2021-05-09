const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {rambdax} = require('./files/rambdax')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')

const assets = [rambdax]

const extractLess = new ExtractTextPlugin({
  filename : '[name].[contenthash].css',
  disable  : false,
})

process.env.NODE_ENV = 'production'

const plugins = [
  new CleanWebpackPlugin(['dist']),
  // new WebpackBundleSizeAnalyzerPlugin('./plain-report.txt'),
  new webpack.EnvironmentPlugin([
    'NODE_ENV',
  ]),
  new HtmlWebpackIncludeAssetsPlugin({
    assets,
    append: false
  }),
  new HtmlWebpackPlugin({
    title             : 'Rambda REPL',
    xhtml             : true,
    alwaysWriteToDisk : true,
    favicon           : './files/favicon.ico',
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime'
  }),
  extractLess,
  new UglifyJSPlugin({
    sourceMap: true
  }),
]

const vendors = [
  'react-redux',
  'redux',
  'rambdax',
  'react',
  'react-dom',
]

const entry = {
  main   : './src/index.tsx',
  vendor : vendors,
}

const tsxLoader = [
  'awesome-typescript-loader',
]

const typescriptRule = {
  test    : /\.tsx?$/,
  loader  : tsxLoader,
  include : [ `${ __dirname }/src`, `${ __dirname }/node_modules/notify/` ],
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
}

const cssRule = {
  test : /\.css$/,
  use  : [ 'style-loader', 'css-loader' ],
}

const lessRule = {
  test : /\.less$/,
  use  : extractLess.extract({ use : [ { loader : 'css-loader' }, { loader : 'less-loader' } ] }),
}

const rules = [
  typescriptRule,
  cssRule,
  lessRule,
]


const output = {
  filename: '[name].[chunkhash].js',
  path: path.resolve(__dirname, 'public')
}

module.exports = {
  entry   : entry,
  output  : output,
  plugins : plugins,
  resolve : {
    extensions : [ '.ts', '.tsx', '.js' ],
  },
  module : { rules : rules },
}
