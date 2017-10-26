const
    start_connect = require("./service/start_connect")
    ,publisher = require("./service/publisher")
    ,consumer = require("./service/consumer")
;

//日志
const loggerFun = require("./module/log/log4js");
global.logger = loggerFun("data/baidu/json_resove_lost1.log");


/* test task */
const _1000phoneNum = require("./../json/1000url.json");


// console.log(_1000phoneNum);
var arr = _1000phoneNum.arr;

var i = 0;
// var i = 829;
// var i =500;
const timer = setInterval(function () { //控制时间

    if(i<arr.length){
    // if(i< 500){

        const opts = {
            url: "http://www.baidu.com/s?wd=" + arr[i].phoneNum
            // url: "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=" + arr[i].phoneNum
            // url: "http://www.sogou.com/web?query=" + arr[i].phoneNum
            ,phoneNum: arr[i].phoneNum
            ,id : i
        };

        const del = start_connect(); //将 del 移到构造函数中去

        publisher(del,opts);

        consumer(del,opts);

        i++;

    }else{
        console.log(i);
        logger.info("end send消息共计:",i);
        clearInterval(timer);
    }

},2101);
// },3210);
// },4321);

