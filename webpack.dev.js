const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  target: "web",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFile: "images/[hash].[ext].[query]"
  },
  // devtool:"eval-cheap=source-map",
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "dist"),
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
});
