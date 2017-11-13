
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
//  const TASK = require("./../task/weibo");
const TASK = require("./../task/sougou_weixin");

const opts = new TASK();
//统一消息格式
const arr = opts.init();
//const taskArr = arr.splice(450,762);

// 日志
const loggerFun = require("./module/log/log4js");
// 日志打印目录
global.logger = loggerFun(opts.logFile);

const conDoor_qeName1 = start_connect('que_xx1')(); //建立连接
//const conDoor_qeName2 = start_connect('que_xx2')(); //建立连接
//const conDoor_qeName3 = start_connect('que_xx3')(); //建立连接
//const conDoor_qeName4 = start_connect('que_xx4')(); //建立连接
//const conDoor_qeName5 = start_connect('que_xx5')(); //建立连接
//const conDoor_qeName6 = start_connect('que_xx6')(); //建立连接
//const conDoor_qeName7 = start_connect('que_xx7')(); //建立连接
//const conDoor_qeName8 = start_connect('que_xx8')(); //建立连接
//const conDoor_qeName9 = start_connect('que_xx9')(); //建立连接
//const conDoor_qeName0 = start_connect('que_xx0')(); //建立连接
/**
 * 数组类型的任务，采用定时器回调,频率发送消息
 * @param arr
 * @param send
 */
function mc(arr,send) {
    // setTimeout(function () {

        var i = 881;
        // var i = 86;
        function go() {
            // if(i< arr.length){
                if(i < 901){
                send(JSON.stringify( arr[i] ));
                i++;
            }else{
                console.log(i);
                logger.info("end send消息共计:",i);
                clearInterval(timer);
            }
        }
        const timer = setInterval(go,18000);

    // },30000)

}
publisher(conDoor_qeName1,arr,opts.__proto__,mc);
//publisher(conDoor_qeName2,taskArr.splice(0,60),opts.__proto__,mc);
//publisher(conDoor_qeName3,taskArr.splice(0,60),opts.__proto__,mc);
//publisher(conDoor_qeName4,taskArr.splice(0,60),opts.__proto__,mc);
//publisher(conDoor_qeName5,taskArr.splice(0),opts.__proto__,mc);
//publisher(conDoor_qeName6,arr.splice(0,30),opts.__proto__,mc);
//publisher(conDoor_qeName7,arr.splice(0,30),opts.__proto__,mc);
//publisher(conDoor_qeName8,arr.splice(0,30),opts.__proto__,mc);
//publisher(conDoor_qeName9,arr.splice(0,30),opts.__proto__,mc);
//publisher(conDoor_qeName0,arr.splice(0),opts.__proto__,mc);

consumer(conDoor_qeName1,opts.__proto__,opts);
//consumer(conDoor_qeName2,opts.__proto__,opts);
//consumer(conDoor_qeName3,opts.__proto__,opts);
//consumer(conDoor_qeName4,opts.__proto__,opts);
//consumer(conDoor_qeName5,opts.__proto__,opts);
//consumer(conDoor_qeName6,opts.__proto__,opts);
//consumer(conDoor_qeName7,opts.__proto__,opts);
//consumer(conDoor_qeName8,opts.__proto__,opts);
//consumer(conDoor_qeName9,opts.__proto__,opts);
//consumer(conDoor_qeName0,opts.__proto__,opts);
