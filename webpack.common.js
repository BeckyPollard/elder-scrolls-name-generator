const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: './src/vendor.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      favicon: './src/favicon.ico',
    }),
    // ADD FOR EACH NEW HTML PAGE
    // new HtmlWebpackPlugin({
    //   template: './src/name.html',
    //   filename: 'name.html',
    //   favicon: './src/favicon.ico',
    // }),
    // TODO: better auto way of handling html pages?
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader', //require assets linked in html
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        use: {
          loader: 'file-loader', //require assets linked in html
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
    ],
  },
};
