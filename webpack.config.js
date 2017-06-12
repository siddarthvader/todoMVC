const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./app/app.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.css$/,
            // use: ['style-loader', 'css-loader']
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ]

}