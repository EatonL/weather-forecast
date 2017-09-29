var webpack = require('webpack');
module.exports = {
    //插件项
    entry: {
        index : './get.js'
    },
    //入口文件输出配置
    output: {
        path: './js-webpack',
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.js?$/, loaders: ['babel-loader']}
        ]
    },
    //其它解决方案配置
    resolve: {
}}