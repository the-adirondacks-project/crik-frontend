var webpackConfig = require('../../build/webpack.test.conf')

process.env.CHROMIUM_BIN = require('puppeteer').executablePath();

module.exports = function karmaConfig (config) {
  config.set({
    browsers: ['ChromiumNoSandbox'],
    customLaunchers: {
      ChromiumNoSandbox: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap', 'coverage']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: '../../coverage',
      reporters: [
        { type: 'text-summary' }
      ]
    }
  })
}
