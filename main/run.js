const http_send = require("./module/http_send");
;
var model = {};
const opts = {url: "http://www.time-stone.cn"}
http_send(opts,model); //需要判断一个状态 检测send结束 有了 html数据

setInterval(function () {
    console.log("- begin -");
    console.log(model.$html("title").text());
},4000);

function CANDY() {
    this.model = {a:1};
    this.main = function (opts,callback) {
        console.log(this.model);
        callback(opts,this.model);
    }
}

var candy = new CANDY();
candy.main(opts,http_send);
