"use strict"


// const log4js = require('log4js');
// log4js.configure({
//     appenders: { cheese: { type: 'file', filename: 'data/360.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'info' } }
// });
//
// const logger = log4js.getLogger('cheese');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');




// const loggerFun = require("./../../../module/log/log4js");

// const logger = loggerFun("data/360/json.log")();
const achieve_360 = (opts,$)=>{

    console.log("---------- achieve ----------")
    console.log($("title").text());
    console.log($("body").text());
    var data = {
        id : opts.id
        ,phoneNum: opts.phoneNum
        ,text: $("html").text()
        // ,html: $("html").html()
    }
    data = JSON.stringify(data);
    logger.info(data);
}


module.exports = achieve_360;