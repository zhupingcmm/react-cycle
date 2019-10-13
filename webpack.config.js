const path = require('path');
const HtmlWebpackPlugin =require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports={
    entry: './index.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_module/,
                use: "babel-loader"
            },
            {
                test:/\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./html/index.html",
            filename:"index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase:'./dist',
        hot:true,
        port:4003,
        open:true
    }
};
