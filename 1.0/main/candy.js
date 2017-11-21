function CANDY() {

}
CANDY.prototype.main = function () {

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