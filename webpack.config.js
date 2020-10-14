const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
/**
 * Objeto de configuración para webpack
 */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.(js|jsx|ts)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/env", {
                                "corejs": 3.6,
                                "useBuiltIns": "usage",
                                "targets": "> 0.10%, not dead, ie >= 11"
                            }], "@babel/react"
                        ]
                    }
                },
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx', '.ts']
                },

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}