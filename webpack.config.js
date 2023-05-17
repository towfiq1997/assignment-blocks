const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const version = '1.0';
const config = {
    ...defaultConfig,
    entry: {
        usertable: path.resolve(__dirname, 'src/usertable/index.js'),
    },
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [...defaultConfig.plugins],
}

module.exports = config;