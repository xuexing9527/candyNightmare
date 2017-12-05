
"usr strict"

const loggerFun = require("./../module/log/log4js");

const achieve = (opts,$,opts__proto__,nightmare) => {
    console.log("--achieve--");
    /**
     * 需要抓取信息的脚本 执行规则   落日志
     *
     */
    var data = {
        phone_num: opts.phoneNum
        ,id : opts.id
        ,whole_text: $("html").text()
        ,content_list: opts__proto__.data_list($)
    }
    data = JSON.stringify(data);
    const log = loggerFun(opts.logFile); // 日志打印目录
    log.info(data);
    console.log("--end--")
}

module.exports = achieve;
