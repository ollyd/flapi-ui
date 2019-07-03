import path from 'path';
import HtmlPlugin from 'html-webpack-plugin';

export default {
  entry: [
    '@babel/polyfill',
    './src',
  ],

  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'app/[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|woff|ico)$/,
        loader: 'file-loader?name=[hash].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      title: 'Flapi',
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
};
