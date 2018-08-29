var webpack = require('webpack');

module.exports={
    entry:"./src/js/index.js",
    output:{
        path:__dirname+"/dist",
        filename:"[name].bundle.js",
        chunkFilename: '[name].chunk.js'
    },
    module:{
        rules :[{
            test:/\.css$/,
            use:[
                {
                    loader: 'style-loader',
                    options:{
                        transform:"./src/utils/transform.js"
                    }
                    //loader: 'style-loader/url'
                },
                {
                    loader: 'css-loader'
                    //loader: 'file-loader'
                }
            ]
        }]
    },
    devServer:{
        port:9099
    }
}