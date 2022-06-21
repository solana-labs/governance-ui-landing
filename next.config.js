/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/api/mp/lib.min.js',
        destination: 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js',
      },
      {
        source: '/api/mp/lib.js',
        destination: 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.js',
      },
      {
        source: '/api/mp/decide',
        destination: 'https://decide.mixpanel.com/decide',
      },
      {
        source: '/api/mp/:slug',
        destination: 'https://api.mixpanel.com/:slug',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/realms/:page*',
        destination: 'https://app.realms.today/realms/:page*',
        permanent: true,
      },
      {
        source: '/dao/:page*',
        destination: 'https://app.realms.today/dao/:page*',
        permanent: true,
      },
    ];
  },
};
