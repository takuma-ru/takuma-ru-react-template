/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(require('unplugin-auto-import/webpack')({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: [
        'react',
        {
          'framer-motion': [
            'motion'
          ]
        },
        {
          'next/image': [
            ['default', 'NextImage'],
          ]
        },
        {
          'next/router': [
            ['default', 'router'],
            'useRouter'
          ]
        },
        {
          'styled-components': [
            ['default', 'styled']
          ]
        },
      ],
      defaultExportByFilename: false,
      dirs: [
        './components/**',
        './hooks/**',
        './scripts/**',
        './styles/**',
        './types/**',
        './layouts/**'
      ]
    }))
    return config
  },
}

module.exports = nextConfig
