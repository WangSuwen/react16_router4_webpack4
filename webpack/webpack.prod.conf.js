var webpackConf = require('./webpack.base.conf');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


webpackConf.mode = 'production';
webpackConf.plugins.push(
  /**
   *  把这个抽到 prod.config 中是为了能在 dev环境下 进行浏览器端代码调试，不知道这是为啥。
   */
  new UglifyJSPlugin({
    uglifyOptions: {
      // 压缩优化
      compress: {
        warnings: false,
        keep_fargs: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true, // 剔除代码中的console.*
        drop_debugger: true, // 剔除代码中的 debugger
      }
    }
  }),
);
// 这个 理论上不应该要
/* webpackConf.devServer = {
	contentBase: path.resolve(__dirname, '..', 'build/dist'),
	port: 9000,
}; */
module.exports = webpackConf;