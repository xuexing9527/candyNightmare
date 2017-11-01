"use strict";

const
    http_send = require("./../module/http/http_send")
    ,https_send = require("./../module/https/https_send")
;

const controller = (opts,opts__proto__)=>{
    try{

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

    }catch(e){
        logger.error(`容错处理： ${e}`);
    }
}

module.exports = controller;
