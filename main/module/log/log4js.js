const log4js = require('log4js');

const logger = (fileName) => {
    log4js.configure({
        appenders: {
            cheese: {
                type: 'file' //文件形式 输出
                ,filename: fileName  //日志输出目录
                // , maxLogSize: 1896986
            }
        },
        categories: {
            default: {
                appenders: ['cheese']
                ,level: 'info'
            }
        }
        // appenders: {
        //     everything:{
        //         type: 'fileSync'
        //         , filename: fileName
        //         // , maxLogSize: 1896986
        //     }
        // },
        // categories: {
        //     default: { appenders: [ 'everything' ], level: 'info' }
        // }
    });
    return log4js.getLogger('cheese');
}

module.exports = logger;
