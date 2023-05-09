const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    basePath: path.join(__dirname, 'styles')
  }
}

module.exports = nextConfig
