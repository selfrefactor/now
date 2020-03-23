const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const {rambdax} = require('./files/rambdax')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

const assets = [rambdax]

const plugins = [
  new webpack.NamedModulesPlugin(),
  new webpack.DllReferencePlugin({
    context  : process.cwd(),
    manifest : require('./files/vendor.json'),
  }),
  new HtmlWebpackPlugin({
    title             : 'DEV',
    alwaysWriteToDisk : true,
    favicon           : './files/favicon.ico',
  }),
  new HtmlWebpackHarddiskPlugin(),
  new HtmlWebpackIncludeAssetsPlugin({
    assets,
    append: false
  }),
  new AddAssetHtmlPlugin([
    { filepath : require.resolve('./files/vendor.dll.js') },
  ]),
  new webpack.HotModuleReplacementPlugin(),
]

const entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './src/index.tsx',
]

const output = {
  filename : 'bundle.js',
  path     : __dirname + '/dev_dist',
}

const tsxLoader = [
  'react-hot-loader/webpack',
  'awesome-typescript-loader?useBabel=true&useCache=true',
]

const typescriptRule = {
  test    : /\.tsx?$/,
  loader  : tsxLoader,
  include : [ `${ __dirname }/src`, `${ __dirname }/node_modules/notify/` ],
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
}

const sourceMapRule = {
  enforce : 'pre',
  test    : /\.js$/,
  loader  : 'source-map-loader',
}

const cssRule = {
  test : /\.css$/,
  use  : [ 'style-loader', 'css-loader' ],
}

const lessRule = {
  test : /\.less$/,
  use  : [ { loader : 'style-loader' }, { loader : 'css-loader' }, { loader : 'less-loader' } ],
}

const rules = [
  typescriptRule,
  sourceMapRule,
  cssRule,
  lessRule,
]

module.exports = {
  entry   : entry,
  output  : output,
  plugins : plugins,
  resolve : { extensions : [ '.ts', '.tsx', '.js' ] },
  module  : { rules : rules },
}
