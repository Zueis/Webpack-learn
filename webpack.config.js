const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", // production,development
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"), // which file we need to transpile
  },
  output: {
    path: path.resolve(__dirname, "dist"), // directory we need to build our output file
    filename: "[name].js", // name of output file
    clean: true, // keep one file on dist
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map", // generate js.map source file for helping to debugg
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000, // serve live on port
    open: true, // should browser open on run dev ?
    hot: true, // hot realoading
    compress: true, // gzip,etc
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // don't mess with node_module
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpeg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
