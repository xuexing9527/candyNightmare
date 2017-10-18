const
    get_html = require("./get_html")
    ,unload_data_print = require("./unload_data_print")
    ,ERR = require("./err")
    ;
var $html = require("../model/$html");

const http_confirm = function (opts,res) {



    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;

    if (statusCode !== 200) {
        error = new Error('请求失败。\n' +
            `状态码: ${statusCode}`);
        // } else if (!/^application\/json/.test(contentType)) {
    }

    if (error) {
        $html.status = 100;
        console.error(error.message);
        // 消耗响应数据以释放内存
        res.resume();
        return;
    }

    get_html(opts,res);


    /* xx */
    //状态异常，return
    // console.log(res.statusCode);
    // if( res.statusCode === 200 ){
    //     // 状态正常
    //     get_html(opts,res);
    // }else if( res.statusCode === 404 ){
    //     const err = {
    //         errMsg : "httpStatus异常 : " + "404"
    //         ,errStatus : "101"
    //     };
    //     const msg = new ERR (err);
    //     unload_data_print(opts,msg);
    //     return;
    // }else{
    //     const err = {
    //         errMsg : "httpStatus异常 : " + res.statusCode
    //         ,errStatus : "101"
    //     };
    //     const msg = new ERR (err);
    //     unload_data_print(opts,msg);
    //     return;
    // }
    /* xx */

}

module.exports = http_confirm;