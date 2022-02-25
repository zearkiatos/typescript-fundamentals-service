module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"]
  },
  output: {
    filename: "bundle.js"
  }
};
