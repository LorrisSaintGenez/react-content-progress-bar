const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  node: {
    fs: "empty",
    module: "empty"
  }
};
