/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  distDir: "build",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/calendar/images/ext/gc_button1_pt-BR.gif",
      },
    ],
  },
};

module.exports = nextConfig;
