const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      serviceworker: path.resolve(__dirname, "src", "background/serviceworker.ts"),
      contentscript: path.resolve(__dirname, "src", "contentscripts/contentscript.ts"),
      popup: path.resolve(__dirname, "src", "popup/popup.ts"),
   },
   output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         {
           test: /\.html$/i,
           loader: "html-loader",
         },
         {
           test: /\.css$/i,
           include: path.resolve(__dirname, 'src'),
           use: ['style-loader', 'css-loader', 'postcss-loader'],
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [
            {from: ".", to: ".", context: "public"},
            {from: "src/popup/popup.html", to: "."}
        ]
      }),
   ],
};