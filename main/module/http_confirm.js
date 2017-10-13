const get_html = require("./get_html");

const http_confirm = function (opts,model,res) {

    //状态异常，return
    if(false){
        return;
    }else{
        // 状态正常
        get_html(opts,model,res);
    }
}

module.exports = http_confirm;