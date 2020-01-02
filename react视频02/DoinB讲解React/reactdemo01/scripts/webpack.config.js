
// 作用： 向外 暴露一个 node 的配置
const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports= {
    entry: {
        main: "./src/index.js"
        // about: "./src/about.js"  
        //  这里的  ./ 是代表当前目录   / 表示当前站点的根目录   ../ 表示上一级目录
    },  // 入口文件 , 可以是一个对象，里面包含很多 入口文件
    
    output:{
        path: path.resolve(process.cwd(),"dist"),
        // process.cwd()
        // 表示返回运行当前脚本的工作目录的路径（应该就是指 当前 项目的根目录）
        filename: 'js/[name].[chunkhash:8].js'
        //  filename  输出文件
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'postcss-loader',
              ],
               
          },
          {
            test: /\.less$/,
            //  use  用以存放  loader,是个 loader 数组
            use:[
              MiniCssExtractPlugin.loader, 
              //  MiniCssExtractPlugin.loader  将 css样式 单独的抽出建立一个文件，
              //   不然的话，会将你的样式 放入 index.html中，以 内联样式呈现
              'css-loader',
              'postcss-loader',
              'less-loader',// compiles Less to CSS
              // loader 的第二种写法，以对象的形式，如下(这种写法就可以在里面加参数)
              // {
              //   loader: 'less-loader',
              //   options:{
              //      
              //   }
              // }
           
            ]
          
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              // {
              //   loader: 'file-loader',
              //   options: {
              //     name: 'static/images/[name].[ext]',
              //     publicPath:'/',
              //   },
              // },
              {
                loader: 'url-loader',  
                // url-loader 里面包含  file-loader 
                //  所以  对于上面 对 图片路径的存储，可以直接写在 url-loader 的 options 里
                options: {
                  limit: 8192,
                  // 限制图片大小，当 图片小于 8912 就会转换为  base64
                  name: 'images/[name].[ext]',
                  publicPath:'/',
                  
                },
              },
            ],
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ],
      },

    plugins: [
        new HtmlWebpackPlugin({
          title: 'My App',
          template: './public/index.html'
          // template   输入的 html 文件
          //  因为在这没有  输出  html  文件 ，所以 它存放的位置，会跟随 入口 js 文件一起存放
          // 所以要么 
          //      1.  在这 对 html 的输出文件进行设置
          //      2.   在此不对  html 的输出文件进行设置，而是更改 入口 js 的文件名。如上 
          //        入口 js 文件， 默认存入  根目录下的 dist文件下
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'css/[name].[chunkhash:8].css',
            // chunkFilename: '[id].css',
            // ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CopyPlugin([
          { from: path.resolve(process.cwd(),'src/static/'), to:  path.resolve(process.cwd(),'dist/static/') },
        ]),
    ],
    devServer: {
      // contentBase: path.join(__dirname, 'dist'),
      open: true,
      port: 3000
    }
    
}