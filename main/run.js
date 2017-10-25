const
    // http_send = require("./module/http/http_send")
    // ,$html = require("./model/$html")
    // ,http_confirm = require("./module/http_confirm")
    // ,
    start_connect = require("./service/start_connect")
    ,publisher = require("./service/publisher")
    ,consumer = require("./service/consumer")
;






// const opts = {url: "http://www.icbc.com"};

// const opts = {url: "http://www.time-stone.cn"};

// const opts = {url: "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=13724780780"};
// const opts = {url: "https://www.baidu.com"};
// const opts = {url: "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=13724780780"};

// const opts = {url: "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=13724780780"};

// 13585927500    360 有数据 ，百度没有
// const opts = {url: "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=13585927500"};


// const opts = {url: "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=18662846599"};
// const opts = {url: "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=15021295864"};
//
//
// const del = start_connect(); //将 del 移到构造函数中去
//
// publisher(del,opts);
//
// consumer(del,opts);










/* test task */
const _1000phoneNum = require("./../json/1000url.json");

// console.log(_1000phoneNum);
var arr = _1000phoneNum.arr;


// for(var i=0;i<arr.length;i++){
//
//     const opts = {url: "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=" + arr[i].phoneNum};
//
//
//     const del = start_connect(); //将 del 移到构造函数中去
//
//     publisher(del,opts);
//
//     consumer(del,opts);
// }



var i = 0;
const timer = setInterval(function () { //控制时间

    if(i<arr.length){

        const opts = {url: "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=" + arr[i].phoneNum};
        i++;

        const del = start_connect(); //将 del 移到构造函数中去

        publisher(del,opts);

        consumer(del,opts);
    }else{
        clearInterval(timer);
    }

},1000);



