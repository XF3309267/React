export  const add = (x,y) =>{
    console.log(`${ x } + ${ y } = ${ x+y }` )  
}
//  可以将  webpack.config.js  分成很多份
//  对 开发环境  和  生产环境 ， 使用同的 webpack.config03.js， 如下：
//  当然，也有一些两者都需要的 配置信息，就可以存于  base.config.js(这是我取的名字而已)  里 

//  webpack-merge   可.以将 多个 webpack.config.js  合并到一起
//   ***** 例如：  将  base.config.js   和 一些开发环境所需要的 合并到一起给 开发环境使用
//  可 在 npm 官网 搜索  webpack-merge

// "scripts": {              使用了  --config 便可以任意  指定  文件（名字随你取）
//     "build": "webpack --mode development --config scripts/webpack.config01.js",  
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "webpack-dev-server --mode development --config scripts/webpack.config02.js"
//   },


