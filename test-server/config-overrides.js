const ThreadsPlugin = require("threads-plugin");
const { override, addWebpackPlugin } = require("customize-cra");

module.exports = override(
  // eslint-disable-next-line no-restricted-globals
  addWebpackPlugin(
    new ThreadsPlugin({
      globalObject: typeof self !== "undefined" ? self : this,
    })
  )
);
