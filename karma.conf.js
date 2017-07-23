var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {main: __dirname + '/test/unitTestEntry.js'};
webpackConfig.devtool = 'nline-source-map';

//jshint strict: false
module.exports = function (config) {
    config.set({

        files: [
            './test/unitTestEntry.js'
        ],

        webpack: webpackConfig,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        reporters: ['spec'],
        specReporter: { maxLogLines: 5 },
        port: 9876,
        captureTimeout: 120000,
        browserNoActivityTimeout: 10000,
        singleRun: false,

        preprocessors: {
            'test/unitTestEntry.js': ['webpack']
        }
    });
};
