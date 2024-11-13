/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/edc",
        destination: "https://docs.google.com/spreadsheets/d/1iNvxIq26vOTbI3qhXYcD8VTJ0SYfYCiIh4mZ0YwJCjM/edit?usp=sharing",
        permanent: false,
        basePath: false
      }
    ]
  },
  images: {
    domains: ['cdn.hunterparcells.com'],
  }
}

module.exports = nextConfig
