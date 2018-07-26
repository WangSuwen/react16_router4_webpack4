var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
			{
				test: /\.(less|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
		]
  },
  plugins: [
    // 自动将入口js 文件插入到Html页面中。
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.html'),
    }),
		
    new MiniCssExtractPlugin({ filename: 'style.css' }),
	],

	entry: {
		app: './src/app.js'
	},

	output: {
		filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  optimization: {
    // minimize: true, // 压缩js，4.0 替换掉了 UglifyJsPlugin
    splitChunks: {
      chunks: "async",
      minSize: 3000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        /**
         * 将 node_modules 中的代码 压缩成一个 叫 vendors 的js文件中。
         * 用于缓存
         * 我们自己的代码 打入到 entry 选项 配置的js 中。
         */
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    alias: (function (src) {
      var fs = require('fs');
      var moduleAlias = {
        '@root': src
      };
      return fs
        .readdirSync(src)
        .filter(function (dir) {
          try {
            return fs.statSync(path.resolve(src, dir)).isDirectory();
          } catch (e) {
            return false;
          }
        })
        .reduce(function (moduleAlias, dir) {
          moduleAlias['@' + dir] = path.resolve(src, dir);
          return moduleAlias;
        }, moduleAlias);
    })(path.resolve(__dirname, '../src'))
  },
};