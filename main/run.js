
 /******************************************************
 *                                                     *
 *               Control how to play                   *
 *                                                     *
 ******************************************************/

"use strict";
const
    publisher = require("./service/publisher")
    ,consumer = require("./service/consumer")
    ,start_connect = require("./service/start_connect")
;

// 百度
const TASK = require("./../task/baidu");
// //360
// const TASK = require("./../task/_360");
//// 搜狗
// const TASK = require("./../task/sougou");

const opts = new TASK();
//统一消息格式
const arr = opts.init();

// 日志
const loggerFun = require("./module/log/log4js");
// 日志打印目录
global.logger = loggerFun(opts.logFile);

const conDoor_qeName = start_connect(); //建立连接
/**
 * 数组类型的任务，采用定时器回调,频率发送消息
 * @param arr
 * @param send
 */
function mc(arr,send) {
    var i = 0 ;
    function go() {
        if(i<arr.length){
            send(JSON.stringify( arr[i] ));
            i++;
        }else{
            console.log(i);
            logger.info("end send消息共计:",i);
            clearInterval(timer);
        }
    }
    const timer = setInterval(go,1000);
}
publisher(conDoor_qeName,arr,opts.__proto__,mc);

consumer(conDoor_qeName,opts.__proto__);

