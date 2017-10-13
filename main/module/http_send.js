const
    http = require('http')
    ,http_confirm = require("./http_confirm");
;
function http_end(opts,model) {

    http
        .get(opts.url, (res) => {
            http_confirm(opts,model,res);// 此处应当判断status
        })
        .on('error', (err) => {
            console.log(err);
        });

}
module.exports = http_end;
