const log4js = require('log4js');

const logger = (fileName) => {
    log4js.configure({
        /**
        appenders: {   // 丢日志啊 ，丢日志 ...
            cheese: {
                type: 'file' //文件形式 输出
                ,filename: fileName  //日志输出目录（相对路径？）
                , maxLogSize: 1896986
            }
        },
        categories: {
            default: {
                appenders: ['cheese']
                ,level: 'info'  //输出日志等级，info以下输出，以上不输出
            }
        }
         **/
        appenders: {
            everything: {
                type: 'fileSync'
                , filename: fileName
                // , maxLogSize: 1896986
            }
        },
        categories: {
            default: { appenders: [ 'everything' ], level: 'info' }
        }
    });

    return log4js.getLogger('info');

}


// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');


module.exports = logger;
