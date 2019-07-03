import merge from 'webpack-merge';
import webpack from 'webpack';
import common from './webpack.common';

export default merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    filename: 'app/[name].js',
  },

  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      API_URL: `${process.env.API_URL}`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    hot: true,
    open: true,
    inline: true,
    contentBase: './dist',
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,
  },
});
