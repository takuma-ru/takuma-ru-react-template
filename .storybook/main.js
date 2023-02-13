const AutoImport = require('unplugin-auto-import/vite')
const path = require('path')
const TsconfigPathsPlugin = require('vite-tsconfig-paths');
const { mergeConfig } = require('vite')

module.exports = {
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: false
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode'
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
  viteFinal: async (config) => {
    console.log("Run viteFinal")
    return mergeConfig(config, {
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../'),
          "next/router": "next-router-mock",
        }
      },
      plugins: [
        AutoImport({
          include: [
            /\.[tj]sx?$/,
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
          dirs: [
            'components/**',
            'hooks/**',
            'scripts/**',
            'styles/**',
            'types/**',
            'layouts/**'
          ],
          dts: '.storybook/types/auto-imports.d.ts',
        })
      ],
    })
  }
}