"use strict";
const
    http_send = require("./../module/http/http_send")
    ,https_send = require("./../module/https/https_send")
    // ,http_confirm = require("./../module/http/http_confirm")
    // ,get_html = require("./../module/http/get_html")
;

const controller = (opts)=>{
    // http_send(opts);
    https_send(opts);
}


module.exports = controller;
