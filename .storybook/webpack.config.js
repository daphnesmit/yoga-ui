const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  config.entry.push("webpack-hot-middleware/client.js?reload=true");
  config.mode = process.env.NODE_ENV || "development";
  config.devServer = {
    watchContentBase: true,
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true,
  };

  config.module.rules[0].use[0].options.sourceType = "unambiguous";

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]],
    },
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: { parser: "typescript" },
      },
    ],
    enforce: "pre",
  });

  config.resolve.extensions.push(".ts", ".tsx");

  config.resolve.alias = {
    "@src": path.resolve(__dirname, "../dist/collection"),
  };

  return config;
};