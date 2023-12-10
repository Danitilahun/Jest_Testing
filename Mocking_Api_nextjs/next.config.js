/** @type {import('next').NextConfig} */

module.exports = {
  publicRuntimeConfig: config,
  serverRuntimeConfig: config,
  webpack(config, options = {}) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: "react-svg-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      }
    );
    return config;
  },
};
