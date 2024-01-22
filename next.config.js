/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require("./package.json").dependencies;
const nextConfig = {
    webpack(config, options) {
      if (!options.isServer) {
        config.plugins.push(
          new NextFederationPlugin({
            name: 'remote',
            remotes: {
            },
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
              './nextjs-remote-page': './pages/index.tsx',
            },
            shared: {
              ...deps,
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },
              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
            },
          }),
        );
      }
      return config;
    },
}

module.exports = nextConfig
