const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,
  entry: {
    main: "./src/index.js",
    featureProduct: "./src/featureProduct.js",
    carousel: "./src/carousel.js",
    information: './src/information.js',
  },
  output: {
    assetModuleFilename: "images/[name].[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
