const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "./", 
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
      },
      {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};