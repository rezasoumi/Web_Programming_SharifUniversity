// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: {
    mainpage: "./src/index.ts",
    payment: "./src/js/code.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    watchFiles: ['src/index.html'],
    static: ['src', 'src/login/static', 'src/flightDetails/static', 'src/dashboard/static', 'src/static']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      chunks: ["mainpage"]
    }),
/*
    new HtmlWebpackPlugin({
      filename: "index-old.html",
      template: "src/mainpage/index-old.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard.html",
      template: "src/dashboard/dashboard.html",
    }),
    new HtmlWebpackPlugin({
      filename: "flights.html",
      template: "src/flightDetails/flights.html",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "src/login/login.html",
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "src/login/register.html",
    }),
    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "src/payment/payment.html",
      chunks: ["payment"]
    }),
*/

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
