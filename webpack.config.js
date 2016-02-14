var path = require('path');

module.exports = {
    cache: true,
    entry: {
        'login': './components/login.jsx',
    },
    output: {
        path: path.join(__dirname, '/public/javascripts/build'),
        filename: '[name].js'
    },
    externals: {
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    loaders: [
        path.join(__dirname, "/components"),
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }]
    }
}

