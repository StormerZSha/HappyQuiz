const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bunndle.js"
    },
    plugin:[
        new HtmlWebpackPlugin({template:'index.html'})
    ]
}