const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require('sass-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
            sources: {
                list: [
                    {
                        tag: "img",
                        attribute: "data-src",
                        type: "src",
                      },
                ]
            }
        }
      },

      
      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '/asset/img/[name].[ext]',
            }
          },
        ],
      },
    ],
  },
  plugins: [
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: '/src/index.html'
}),
            new MiniCssExtractPlugin(),
            ],
  
};