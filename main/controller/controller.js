"use strict";
const
    http_send = require("./../module/http/http_send")
    ,https_send = require("./../module/https/https_send")
    // ,http_confirm = require("./../module/http/http_confirm")
    // ,get_html = require("./../module/http/get_html")
;
// const loggerFun = require("./../module/log/log4js");
// const logger = loggerFun("data/common/json.log")();

const controller = (opts,opts__proto__)=>{



    var i = 0;

    if(JSON.stringify( opts.targetUrl ).match(/http/) !== null) i = 1;
    if(JSON.stringify( opts.targetUrl ).match(/https/) !== null) i = 2;

    if(i===1){ // i 判断 1 http 还是 https

        http_send(opts,opts__proto__);

    }else if(i===2){

        https_send(opts,opts__proto__);

    }else{
        console.log("不是有效的url ",opts);
        logger.error("不是有效的url",opts);
    }
}


module.exports = controller;
