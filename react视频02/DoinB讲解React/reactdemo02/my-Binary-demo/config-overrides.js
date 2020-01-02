// module.exports=(config){
//     return config
// }
// npm install react-app-rewired --save-dev

// 更改 packge.json 文件的内容
// "scripts": {
//     "start": "react-app-rewired start",
//     "build": "react-app-rewired build",
//     "test": "react-app-rewired test",
//     "eject": "react-scripts eject"
//   },

// npm install customize-cra --save-dev

//在 config-overrides.js  文件下 写入如下
const {override,addDecoratorsLegacy} = require('customize-cra')

module.exports = override(
    addDecoratorsLegacy()
)