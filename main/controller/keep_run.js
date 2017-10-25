"use strict"

const baidu = require("./task_scripts/baidu/keep_run");
const _360 = require("./task_scripts/360/keep_run");
const keep_run = (opts,$) => {


    /*

    baidu(opts,$); // 百度规则

    */


    _360(opts,$); // 360规则




}

module.exports = keep_run;