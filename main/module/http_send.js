const
    http = require('http')
    ,http_confirm = require("./http_confirm")
    ,unload_data_print = require("./unload_data_print")
;
function http_end(opts) {

    http
        .get(opts.url, (res) => {
            http_confirm(opts,res);// 此处应当判断status
        })
        .on('error', (err) => {
            unload_data_print(opts,err)
        });
}
module.exports = http_end;

