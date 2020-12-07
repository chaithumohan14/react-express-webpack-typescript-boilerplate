const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./frontend/index.tsx",
  output: {
    filename: "[name].[contentHash].js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist", "frontend"),
  },
  module: {
    rules: [
      { test: /\.tsx$/, use: ["babel-loader", "ts-loader"] },
      { test: /\.ts$/, use: ["babel-loader", "ts-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "frontend", "index.html"),
    }),
  ],
  devServer: {
    port: 3001,
  },
  watch: process.env.NODE_ENV === "development",
};
