/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "bellu.ch",
          },
        ],
        destination: "https://www.bellu.ch",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
