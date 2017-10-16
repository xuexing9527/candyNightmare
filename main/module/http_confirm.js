const
    get_html = require("./get_html")
    ,unload_data_prints = require("./unload_data_print")
    ,ERR = require("./err")
    ;

const http_confirm = function (opts,model,res) {

    //状态异常，return
    if(false){
        const err = {
            errMsg : "httpStatus异常 : " + "404"
            ,errStatus : "101"
        };
        const msg = new ERR (err);
        unload_data_prints(opts,msg);
        return;
    }else{
        // 状态正常
        get_html(opts,model,res);
    }
}

module.exports = http_confirm;