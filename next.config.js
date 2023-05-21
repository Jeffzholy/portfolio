const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

const nextConfig = {
  // images: {
  //   domains: ['images.unsplash.com']
  // }
}

module.exports = withNextra(nextConfig)
