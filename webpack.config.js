var webpack = require('webpack');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var path=require("path");

module.exports={
    entry:{app:"./src/js/index.js"},
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"[name].[hash].bundle.js"
        //filename:"[name].[chunkhash:8].bundle.js"
    },
    module:{
        rules :[{
            test:/\.css$/,
            use:[
                {
                    loader: 'style-loader',
                    // loader: 'style-loader/useable',
                    options:{
                        transform:'./src/css/transform.js'
                    }
                    //loader: 'style-loader/url'
                },
                {
                    loader: 'css-loader'
                    //loader: 'file-loader'
                }
            ]
        }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'平台',
            filename:"index.html",
            template:"./index.html",
            minify: {collapaseWhitespace:true},
            hash:false
        })
    ],
    devServer:{
        port:9099
    }
}