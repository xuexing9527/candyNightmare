
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

// 任务
// const TASK = require("../task/REG007");
 const TASK = require("../task/zhaohuini");

const opts = new TASK();
//统一消息格式
const arr = opts.init();
//const taskArr = arr.splice(450,762);

// 日志
const loggerFun = require("./module/log/log4js");
// 日志打印目录
global.logger = loggerFun(opts.logFile);

// var conDoor_qeNames = [];
// var Arrs = [];
// for(let i=0;i<500;i++){

    const conDoor_qeName = start_connect('que_xx_zhaohuini')(); //建立连接
 // const conDoor_qeName = start_connect('que_xx_REG007')(); //建立连接
    // conDoor_qeNames.push(conDoor_qeName);
    // Arrs.push(arr.splice(0,20));
// }
/**
 * 数组类型的任务，采用定时器回调,频率发送消息
 * @param arr
 * @param send
 */
function mc(arr,send) {
    setTimeout(function () {

        var i = 0;
        function go() {
            if(i< arr.length){
                send(JSON.stringify( arr[i] ));
                i++;
            }else{
                console.log(i);
                logger.info("end send消息共计:",i);
                clearInterval(timer);
            }
        }
        const timer = setInterval(go,30000);

    },10000)

}

 publisher(conDoor_qeName,arr,opts.__proto__,mc);

 consumer(conDoor_qeName,opts.__proto__,opts);
