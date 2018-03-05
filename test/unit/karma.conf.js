var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig (config) {
  config.set({
    browsers: ['PhantomJS'],
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
