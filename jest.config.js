process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''
require('react-scripts/config/env')

const path = require('path')
const createJestConfig = require('react-scripts/scripts/utils/createJestConfig')

module.exports = {
  ...createJestConfig(
    relativePath => require.resolve(path.join('react-scripts', relativePath)),
    __dirname,
    false,
  ),
  ...{
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/mocks/**',
      '!src/serviceWorker.js',
      '!**/index.js',
    ],
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
    coverageReporters: ['text'],
  },
}
