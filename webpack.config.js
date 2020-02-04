"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sourceDir = "src";

module.exports = {
  devtool: "#eval-source-map",

  entry: path.resolve(__dirname, sourceDir, "index"),

  output: {
    path: path.resolve(__dirname, "public", "dist"),
    publicPath: "./",
    filename: "bundle.js"
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      use: ["babel-loader", "eslint-loader"]
    },
    {
      test: /\.(css)$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"]
    },
    {
      test: /\.(eot|ttf|woff|woff2?)$/,
      use: ["file-loader"]
    },
    {
      type: "javascript/auto",
      test: /\.json/,
      use: ["file-loader"],
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, sourceDir, "./index.html")
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3000,
    overlay: true,
    clientLogLevel: "none",
    publicPath: "/",
    historyApiFallback: true
  }
};