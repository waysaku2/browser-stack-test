module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'browserify'],
    files: [
      'test/test.js'
    ],
    preprocessors: {
      'test/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [ ['babelify', {presets: ["@babel/preset-env"]}] ],
    },

    // global config of your BrowserStack account
    browserStack: {
      username: 'yusaku1',
      accessKey: 'WBqBR2KyNhXj92WWGTZp'
    },

    // define browsers
    customLaunchers: {
      android71: {
        base: 'BrowserStack',
        device: 'Google Pixel',
        os: 'android',
        os_version: '7.1'
      },
      bs_iphone8: {
        base: 'BrowserStack',
        device: 'iPhone 8',
        os: 'ios',
        os_version: '11.0'
      }
    },
    singleRun: true,
    browsers: ['android71', 'bs_iphone8']
    //browsers: ['Chrome']
  })
}
