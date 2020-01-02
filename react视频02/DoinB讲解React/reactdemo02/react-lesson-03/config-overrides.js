// module.exports = (config) =>{

//     //  如果没有使用   Customize-cra ，就要在这配置

//     return config
// }
const {override,addDecoratorsLegacy} = require('customize-cra')

module.exports = override(
    addDecoratorsLegacy()
)


