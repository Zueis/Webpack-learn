const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development", // production,development
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"), // which file we need to transpile

  },
  output: {
    path: path.resolve(__dirname, "dist"), // directory we need to build our output file
    filename: "[name].js", // name of output file
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Webpack App',
      filename:'index.html',
      template:'src/template.html'
    })
  ]
};
