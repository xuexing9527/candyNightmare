"usr strict"
const baidu = require("./task_scripts/baidu/achieve");
const _360 = require("./task_scripts/360/achieve");
const sogou = require("./task_scripts/sogou/achieve");

const achieve = (opts,$) => {

    //需要抓取信息的脚本 执行规则   落日志


    baidu(opts,$); //baidu 执行规则



    // _360(opts,$); //360 执行规则



    // sogou(opts,$); //sogou 执行规则



}


module.exports = achieve;
