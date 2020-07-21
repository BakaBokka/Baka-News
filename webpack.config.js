const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
new webpack.DefinePlugin({
  'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
})

module.exports = {
entry: './src/index.js',
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[chunkhash].js'
},
module: {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            {
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          ],
        },
      },
      exclude: /node_modules/,
    },

    {
      test: /\.css$/,
      use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
        {
          loader:'css-loader',
          options: {
              importLoaders: 2
          }
      },
         "postcss-loader"],
    },
    {
      test: /\.(woff|woff2|ttf)$/,
      use: 'file-loader?name=./fonts/[name].[ext]'
    },
    {
      test: /\.(jpg|jpeg|png|svg|webp)$/,
      use: 'file-loader?name=./images/[name].[ext]&esModule=false'
    }
  ],
},

plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
            preset: ['default'],
    },
    canPrint: true
}),
  new WebpackMd5Hash(),
  new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
})
],

}