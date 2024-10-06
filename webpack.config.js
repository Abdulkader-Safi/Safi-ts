const path = require("path");

module.exports = (_, argv) => {
  return {
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    target: "web",
    mode: argv.mode || "development", // Set mode based on argument or default to 'development'
  };
};
