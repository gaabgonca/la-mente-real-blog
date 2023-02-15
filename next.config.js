module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      images: {
        unoptimized: true
      }
    }
    return nextConfig
  }