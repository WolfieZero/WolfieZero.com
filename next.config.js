/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const plugins = [[optimizedImages, {}]];

const settings = {
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')],
  },
  trailingSlash: true,
  target: 'serverless',
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = withPlugins(plugins, settings);
