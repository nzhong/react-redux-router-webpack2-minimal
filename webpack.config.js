var config = require('config'),
    path = require('path'),
    webpack = require('webpack');

var configuration = {
    entry: {
        app: "./src/index.js",
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux'
        ]
    },
    resolve: {
        extensions: ['.json', '.jsx', '.js'],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['react', 'es2015'] }
            },
            {
                include: /\.json$/,
                loaders: ["json-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        proxy: {
            '/login*': {
                target: 'http://localhost:9000/',
                secure: false,
            },
            '/logout*': {
                target: 'http://localhost:9000/',
                secure: false,
            },
            '/api/*': {
                target: 'http://localhost:9000/',
                secure: false,
            }
        }
    }
};

module.exports = configuration;