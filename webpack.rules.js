var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: false,
                    sourceMap: true,
                    import: true
                }
            },
            'postcss-loader'
        ]
    }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: false,
                    sourceMap: true,
                    import: true
                }
            },
            'sass-loader',
            'postcss-loader'
        ]
    }, {
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		use: 'file-loader'
	}, {
		test: /\.(woff|woff2)$/,
		exclude: /node_modules/,
		use: 'url-loader?prefix=font/&limit=5000'
	}, {
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=application/octet-stream'
	}, {
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/svg+xml'
	}, {
		test: /\.gif/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/gif'
	}, {
		test: /\.jpg/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/jpg'
	}, {
		test: /\.png/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/png'
	}
];
