'use strict'

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sourceDir = "src";

module.exports = {
    devtool: '#eval-source-map',
    
    entry: path.resolve(__dirname, sourceDir, "index"),

    output: {
        path: path.resolve(__dirname, "public", "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: "babel-loader"            
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, sourceDir, "./index.html")
        })
    ],

    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 3000,
        open: "Google Chrome"
    }
}