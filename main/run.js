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
const opts = {url: "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=13724780780"};


const del = start_connect(); //将 del 移到构造函数中去

publisher(del,opts);

consumer(del,opts);













