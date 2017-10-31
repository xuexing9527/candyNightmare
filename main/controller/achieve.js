"usr strict"
const achieve = (opts,$,opts__proto__) => {
    /**
     * 需要抓取信息的脚本 执行规则   落日志
     *
     */
    // console.log(`---------- achieve ----------\n${$("title").text()}\n${$("body").text()}`);
    //     console.log(opts.del);
    var data = {
        phone_num: opts.phoneNum
        ,id : opts.id
        ,whole_text: $("html").text()
        ,content_list: opts__proto__.data_list($)
    }
    data = JSON.stringify(data);
    logger.info(data);
    console.log("--end--")
}

module.exports = achieve;
