// Karma configuration
// Generated on Sun Jul 29 2018 09:03:59 GMT+0900 (Korean Standard Time)

var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry

module.exports = function(config) {
  config.set({
      browsers: ['Chrome'],
      frameworks: ['jasmine'],
      files: ['test/index.js'],
      preprocessors: {
          'test/index.js': ['webpack']
      },
      webpack: webpackConfig,
      webpackServer: {
          noInfo: true
      },
      singleRun: true
  })
}
