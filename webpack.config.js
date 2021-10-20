const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'docs'),
		clean: true
	},
	plugins: [
		new htmlWebpackPlugin({
			title: '首页',
			template: './public/index.html'
		}),
		new VueLoaderPlugin()
	],
	devServer: {
		static: './docs'
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	}
}
