import merge from 'webpack-merge';
import CleanPlugin from 'clean-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import common from './webpack.common';

export default merge(common, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanPlugin(['dist'], { root: path.join(__dirname, '..'), verbose: true }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new webpack.EnvironmentPlugin({
      API_URL: `${process.env.API_URL}`,
    }),
    new OptimizeCssAssetsPlugin(),
  ],
});
