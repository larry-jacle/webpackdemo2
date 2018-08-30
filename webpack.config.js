var webpack = require('webpack');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var path=require("path");


/**
 * babel-loader: 负责es6语法转化
 * babel-preset-env: 包含es6、7等版本的语法转化规则
 * babel-polyfill: es6内置方法和函数转化垫片
 * babel-plugin-transform-runtime: 避免polyfill污染全局变量
 * 更多资料：
 * polyfill引入：https://www.babeljs.cn/docs/usage/polyfill/
 * babel-preset-env配置：https://www.babeljs.cn/docs/plugins/preset-env/
 */
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
        },{
            test :/(\.jsx|\.js)$/,
            exclude : /node_modules/,
            loader :'babel-loader',
            options:{
                presets:[
                    "env"
                ]
            }
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