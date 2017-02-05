var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[local]__[name]___[hash:base64:5]',
                    sourceMap: true
                }
            },
            'postcss-loader'
        ]
        /*use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[local]__[name]___[hash:base64:5]',
                    sourceMap: true
                }
            }
        })*/ // Add for production later
    }
];
