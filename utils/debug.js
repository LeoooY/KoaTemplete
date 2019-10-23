const DebugModule = require('debug');
const path = require('path');

const Debug = (FileName) => {

    const fileName = path.parse(FileName).name;
    const debugModule = DebugModule(`${fileName}.ts：`)
    debugModule.enabled = true;

    const hackDebug = (...values) => {
        /**
         * @values 为每次log的参数，传到服务器作为日志
         */

        debugModule(...values)
    }

    return hackDebug
}

/**
 * @测试用例
 */

// const a={a:'22'}
// debug('ascsac \n %O',a)

module.exports=Debug