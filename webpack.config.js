const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'docs'),
		clean: true
	},
	plugins: [
		new VueLoaderPlugin(),
		new htmlWebpackPlugin({
			template: 'public/index.html',
			title: `Seb's`,
			favicon: 'public/favicon.ico'
		})
	],
	devServer: {
		static: { directory: path.join(__dirname, 'docs') }
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.md$/,
				use: [
					{ loader: 'vue-loader' },
					{
						loader: 'vue-markdown-loader/lib/markdown-compiler',
						options: {
							raw: true
						}
					}
				]
			}
		]
	}
}
