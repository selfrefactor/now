const webpack = require('webpack');
const path = require('path');
const dist = path.resolve(process.cwd(), 'files');

module.exports = {
  context: process.cwd(),
  target: 'web', // Make web variables accessible to webpack, e.g. window
  resolve: {
    modules: [
      'node_modules',
    ],
  },
  entry: {
    vendor: [
      './files/vendor.js' // If you plan to use chunks, put common dependencies in e.g vendor.js
    ],
  },
  output: {
    filename: '[name].dll.js',
    path: dist,

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.join(dist, '[name].json'),

      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]',
    }),
  ],
}
