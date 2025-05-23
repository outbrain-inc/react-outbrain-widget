//project based on https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin'); // Add this line

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: {
    'react': 'commonjs react',
    'react-dom' : 'commonjs react-dom'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.d.ts', to: 'index.d.ts' }, // Copy index.d.ts to build folder
      ],
    }),
  ],
};

