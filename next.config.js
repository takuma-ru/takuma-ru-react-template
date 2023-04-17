/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      require('unplugin-auto-import/webpack')({
        /* include: [
        /\.[tj]sx?$/,
      ], */
        exclude: [/node_modules/, /\.git/, /\.stories\.tsx$/],
        imports: [
          'react',
          'jotai',
          'jotai/utils',
          {
            'framer-motion': ['motion', 'AnimatePresence'],
          },
          {
            'next/image': [['default', 'NextImage']],
          },
          {
            'next/router': [['default', 'router'], 'useRouter'],
          },
          {
            'styled-components': [['default', 'styled']],
          },
        ],
        defaultExportByFilename: false,
        dirs: [
          './components/**',
          './hooks/**',
          './atoms/**',
          './scripts/**',
          './styles/**',
          './types/**',
          './layouts/*',
        ],
        dts: './auto-imports.d.ts',
      })
    )
    return config
  },
}

module.exports = nextConfig
