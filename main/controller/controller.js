"use strict";

const http_send = require("./../module/http/http_send")
    ,https_send = require("./../module/https/https_send")
    ,go_nightmare = require('./../controller/go_nightmare');
;

const controller = (opts,opts__proto__,nightmare)=>{
    try{

        console.log("进入了controller...");

        switch (opts.send_method){
            case 1 : // http(s) 请求
                var i;
                (JSON.stringify( opts.targetUrl ).match(/http/) !== null)
                    ? i = 1
                    : (JSON.stringify( opts.targetUrl ).match(/https/) !== null)
                    ? i = 2
                    :i=0;
                switch (i){
                    case 1:
                        http_send(opts,opts__proto__);
                        break;
                    case 2:
                        https_send(opts,opts__proto__);
                        break;
                    default:
                        console.log(`不是有效的url ->  ${opts}`);
                        logger.error(`不是有效的url ->  ${opts}`);
                }
                break;
            case 2: // nightmare 封装请求
                // switch (){
                // }
                go_nightmare(opts,opts__proto__,nightmare);
                break;
            default:
                console.log(`暂未定义的 发送规则，请检查opts实例 send_method 属性 \n`);
                logger.error(`暂未定义的 发送规则，请检查opts实例 send_method 属性 \n`);
        }
    }catch(e){
        logger.error(`容错处理： ${e}`);
    }
}

module.exports = controller;
