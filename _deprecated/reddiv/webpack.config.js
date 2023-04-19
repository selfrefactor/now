process.env.NODE_ENV = 'development'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AutoDllPlugin = require('autodll-webpack-plugin').default

const named = new webpack.NamedModulesPlugin()
const envs = new webpack.EnvironmentPlugin([
  'NODE_ENV',
])
const html =   new HtmlWebpackPlugin({
  title             : 'DEV',
  alwaysWriteToDisk : true,
  inject            : true,
  favicon           : './files/favicon.ico',
})
const dll = new AutoDllPlugin({
  inject: true,
  filename: '[name]_[hash].js',
  entry: {
    vendor: [
      'rambdax',
      'raven-js',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-observable',
      'rxjs',
      'tslib'
    ]
  }
})
const htmlHard = new HtmlWebpackHarddiskPlugin()
const hot = new webpack.HotModuleReplacementPlugin()

const plugins = [
  named,
  envs,
  html,
  dll,
  htmlHard,
  hot
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
