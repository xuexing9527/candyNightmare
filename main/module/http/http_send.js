const
    http = require('http')
    ,http_confirm = require("./http_confirm")
    ,unload_data_print = require("../print/unload_data_print")
;
// const loggerFun = require("./../log/log4js");
// const logger = loggerFun("data/common/json.log")();
function http_end(opts) {

    http
        .get(opts.url, (res) => {
            http_confirm(opts,res);// 此处应当判断status
        })
        .on('error', (err) => {
            err = JSON.stringify(err);
            unload_data_print(opts,err)
            logger.error(opts,err);
        });
}
module.exports = http_end;

