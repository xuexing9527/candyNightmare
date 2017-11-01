
const
    http = require('http')
    ,http_confirm = require("./http_confirm")
    ,unload_data_print = require("../print/unload_data_print")
;

function http_send(opts,opts__proto__) {
    console.log("进入了http_send...");
    http
        .get(opts.targetUrl, (res) => {
            console.log("发送了请求...");
            http_confirm(opts,res,opts__proto__);// 此处应当判断status
        })
        .on('error', (err) => {
            err = JSON.stringify(err);
            unload_data_print(opts,err)
            logger.error(opts,err);
        });
}

module.exports = http_send;

