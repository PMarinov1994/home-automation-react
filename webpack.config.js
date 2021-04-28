const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif|mp4)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },

            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: "index.html",
            template: "./public/index.html",
            favicon: "./public/icon.png"
        }),
        new MiniCssExtractPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000
    }
}