const
    https = require('https')
    ,http_confirm = require("./../http/http_confirm")
    ,unload_data_print = require("./../print/unload_data_print")
;
function http_end(opts) {




    //伪装浏览器







    https
        .get(opts.url, (res) => {
            http_confirm(opts,res);// 此处应当判断status
        })
        .on('error', (err) => {
            unload_data_print(opts,err)
        });

}
module.exports = http_end;

