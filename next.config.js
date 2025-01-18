/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using a custom domain, uncomment and update this
  // basePath: '/your-repo-name',
}

module.exports = nextConfig 