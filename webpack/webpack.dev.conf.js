var path = require('path');
var webpackConf = require('./webpack.base.conf');
webpackConf.mode = 'development';
webpackConf.devtool = 'source-map';
webpackConf.devServer = {
	contentBase: path.resolve(__dirname, '..', 'build/dist'),
	port: 9000,
};

module.exports = webpackConf;