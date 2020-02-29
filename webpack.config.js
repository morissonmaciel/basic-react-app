"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("workbox-webpack-plugin");
const sourceDir = "src";

module.exports = {
  devtool: "#eval-source-map",

  entry: {
    "bundle": path.resolve(__dirname, sourceDir, "index")
  },

  output: {
    path: path.resolve(__dirname, "build", "dist"),
    publicPath: "/",
    filename: "[name].js"
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
      test: /\.json$/,
      use: ["json-loader"],
    }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env" : {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "public")
    }]),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["bundle"],
      template: path.resolve(__dirname, sourceDir, "./index.html")
    }),
    new ServiceWorkerWebpackPlugin.GenerateSW()
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