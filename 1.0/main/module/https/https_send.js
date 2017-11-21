const https = require('https')
    ,http_confirm = require("./../http/http_confirm")
    ,unload_data_print = require("./../print/unload_data_print")
;

function https_end(opts,opts__proto__) {

    //伪装浏览器 ?

    if(true){ //URL
        https
            .get(opts.targetUrl, (res) => {
                http_confirm(opts,res,opts__proto__);// 此处应当判断status
            })
            .on('error', (err) => {
                err = JSON.stringify(err);
                unload_data_print(opts,err)
                logger.error(err,opts);
            });
    }else{ //host
        https
            .get(opts, (res) => {
                http_confirm(opts,res,opts__proto__);// 此处应当判断status
            })
            .on('error', (err) => {
                unload_data_print(opts,err)
                logger.error(err,opts);
            });
    }

}
module.exports = https_end;
