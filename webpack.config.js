module.exports = {
  entry: './src/react/index.js',
  output: {
    path: './src/react',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react': __dirname + '/node_modules/react/lib/React.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=1&optional=runtime'
      }
    ]
  }
};
