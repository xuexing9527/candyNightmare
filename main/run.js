"use strict";
const
    start_connect = require("./service/start_connect")
    ,publisher = require("./service/publisher")
    ,consumer = require("./service/consumer")
;


const TASK = require("./../task/baidu"); // 百度
// const TASK = require("./../task/_360"); // 360
// const TASK = require("./../task/sougou"); // 搜狗


const opts = new TASK();


var i = 0;
function main() {
    //日志
    const loggerFun = require("./module/log/log4js");
    global.logger = loggerFun(opts.logFile); // 日志打印目录
    var del = false;
    return function () {
        function go() {
            if(!del) del = start_connect(); //将 del 移到构造函数中去
            const arr = opts.init();
            if(i<arr.length){
                publisher(del,JSON.stringify( arr[i] ));
                consumer(del,opts.__proto__);
                i++;
            }else{
                console.log(i);
                logger.info("end send消息共计:",i);
                clearInterval(timer);
                del = null; // 释放del ，以免泄漏内存
            }
        }
        const timer = setInterval(go,2500);
    }
}
main()();








//////////////////////////////////////////////////
//日志
// const loggerFun = require("./module/log/log4js");
// global.logger = loggerFun("data/baidu/json_resove_lost8.txt"); // 日志打印目录    百度
// // global.logger = loggerFun("data/360/json_resove_lost1.txt"); // 日志打印目录     360
// // global.logger = loggerFun("data/sougou/json_resove_lost1.txt"); // 日志打印目录    搜狗
//
//
// /* test task */
// const _1000phoneNum = require("./../json/1000url.json");
// const arr = _1000phoneNum.arr;
//
//
// // var i = 559; // url标记id  INDEX
// var i = 700;
//
// function main() {
//
//     var del = false;
//
//     return function () {
//
//         if(!del) del = start_connect(); //将 del 移到构造函数中去
//
//
//         // if(i<arr.length){
//         if(i < 800){
//             // if(i == 595){
//
//             const opts = {
//                 url: "http://www.baidu.com/s?wd=" + arr[i].phoneNum   // 百度
//                 // url: "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=" + arr[i].phoneNum // 360
//                 // url: "http://www.sogou.com/web?query=" + arr[i].phoneNum // 搜狗
//                 ,phoneNum: arr[i].phoneNum
//                 ,id : i
//             };
//
//
//             publisher(del,opts);
//
//             consumer(del,opts);
//
//             i++;
//
//         }else{
//             console.log(i);
//             logger.info("end send消息共计:",i);
//             clearInterval(timer);
//         }
//
//     }
//
// }
// const timer = setInterval(main(),2343);

