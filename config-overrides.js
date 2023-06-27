const path = require("path");

module.exports = function override(config, env) {
  // Add SVGR support
  const svgRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test(".svg")
  );
  svgRule.exclude = path.resolve(__dirname, "src/assets/images");

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
    include: path.resolve(__dirname, "src/assets/images"), // Update the path to match your SVG files location
  });

  return config;
};
