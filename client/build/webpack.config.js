'use strict'

const webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  WebpackNotifierPlugin = require('webpack-notifier')

module.exports = (() => {
  const event = process.env.npm_lifecycle_event,
    isProd = event === 'build' || event === "prebuild",
    config = {}

  config.entry = {
    app: __dirname + '/../app/app.js'
  }

  config.output = {
    path: __dirname + '/../../server/public/',
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[chunkhash].js' : '[name].build.js',
    chunkFilename: isProd ? '[name].[chunkhash].js' : '[name].build.js'
  }

  config.devtool = isProd ? 'source-map' : 'inline-source-map'

  config.module = {
    rules: [
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, use: [{ loader: 'file-loader' }] },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.js$/, enforce: "pre", exclude: /node_modules/, loader: "eslint-loader" },
      { test: /\.html$/, use: [{ loader: 'raw-loader' }] },
      { test: /\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader', query: { sourceMap: true } },
            { loader: 'postcss-loader' }
          ]
        })
      }
    ]
  }

  config.devServer = {
    contentBase: __dirname + '/../app/',
    stats: 'minimal'
  }

  config.plugins = [
    new WebpackNotifierPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/../app/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: !isProd, allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1
    })
  ]

  if (isProd) {
    config.plugins.push(new CleanWebpackPlugin(["public/*"], {
      root: __dirname + "/../../server/",
      verbose: true
    }))
  }

  return config

})()