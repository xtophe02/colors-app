const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  // mode: "development",
  // output: {
  //   filename: "[name].bundle.js",
  //   path: path.resolve(__dirname, "dist")
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});
