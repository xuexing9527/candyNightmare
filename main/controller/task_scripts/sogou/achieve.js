"use strict"
// const loggerFun = require("./../../../module/log/log4js");
// const logger = loggerFun("data/baidu/json.log")();
const sogou = (opts,$)=>{

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


module.exports = sogou;