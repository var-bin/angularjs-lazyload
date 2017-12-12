"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const devServer = {
  contentBase: path.resolve("dist"),
  hot: true,
  host: process.env.host || "localhost",
  port: process.env.PORT || 5000
};

const webpackConfig = (env) => {
  const config = {
    entry: {
      app: path.resolve("./src/core/bootstrap.js")
    },
    output: {
      filename: "bundle.js",
      chunkFilename: "[name].chunk.js",
      path: path.join(__dirname, "dist")
    },
    module: {
      rules: [
        // eslint
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },

        // babel
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },

        // html
        {
          test: /\.html$/,
          loader: "raw-loader",
          exclude: path.resolve("./src/index.html")
        },

        // css
        {
          test: /\.css$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve("./src/index.html")
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: "common",
        filename: "common.js",
        minChunks: (module) => {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),

      new CleanWebpackPlugin(["dist"])
    ]
  };

  if (env && env.dev) {
    config.devServer = devServer;
    config.plugins.push(
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    );
  }

  if (env && env.production) {
    config.devtool = "source-map";
    config.plugins.push(
      new UglifyJSPlugin({
        uglifyOptions: {
          warnings: true
        },
        sourceMap: true
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    );
  }

  return config;
};

module.exports = webpackConfig;
