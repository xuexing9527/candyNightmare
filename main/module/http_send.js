const
    http = require('http')
    ,http_confirm = require("./http_confirm")
    ,unload_data_prints = require("./unload_data_print")
;
function http_end(opts,model) {

    http
        .get(opts.url, (res) => {
            http_confirm(opts,model,res);// 此处应当判断status
        })
        .on('error', (err) => {
            unload_data_prints(opts,err)
        });

}
module.exports = http_end;
