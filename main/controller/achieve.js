"usr strict"
const baidu = require("./task_scripts/baidu/achieve");
const _360 = require("./task_scripts/360/achieve");
const sogou = require("./task_scripts/sogou/achieve");

const achieve = (opts,$) => {

    /**
     * 需要抓取信息的脚本 执行规则   落日志
     * 暂时 一次一个规则 执行 ，需手动更改日志目录,以便区分 ，待修正 17.10.26
     */

    baidu(opts,$); //baidu 执行规则  ,  手动更改  run.js  日志打印目录



    // _360(opts,$); //360 执行规则  ,  手动更改  run.js  日志打印目录



    // sogou(opts,$); //sogou 执行规则  ,  手动更改  run.js  日志打印目录



}


module.exports = achieve;
