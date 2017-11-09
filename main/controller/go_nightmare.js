'use strict'
const loggerFun = require("./../module/log/log4js");


const go_nightmare = (opts,opts__proto__) => {

    const Nightmare = require('nightmare');
    var nightmare = Nightmare({ show: true });
    nightmare
        .goto(opts.url).wait(3000)
        // .type('[uigs=search_article]','#query')
        // .click('[uigs=search_article]')
        // .wait('[uigs=search_article]')
        .goto(opts.targetUrl)
        .evaluate(function(){
            return document.getElementsByTagName('HTML')[0].innerHTML;
        })

        // .end()
        .then(function(html){
            const cheerio = require('cheerio');
            var $ = cheerio.load(html);
            var data = {
                phone_num: opts.phoneNum
                ,id : opts.id
                ,whole_text: $("html").text()
                ,content_list: opts__proto__.data_list($)
            }
            data = JSON.stringify(data);
            const log = loggerFun(opts.logFile); // 日志打印目录
            log.info(data);
            console.log(data);
        }).catch((err)=>{

        const log = loggerFun(opts.logFile); // 日志打印目录
        log.error(`nightmare then 错误 ： ${err}`);
    })
    //     .then(function ($) {
    //
    //     console.log("--achieve--");
    //     /**
    //      * 需要抓取信息的脚本 执行规则   落日志
    //      *
    //      */
    //     var data = {
    //         phone_num: opts.phoneNum
    //         ,id : opts.id
    //         ,whole_text: $("html").text()
    //         ,content_list: opts__proto__.data_list($)
    //     }
    //     data = JSON.stringify(data);
    //
    //     const log = loggerFun(opts.logFile); // 日志打印目录
    //     log.info(data);
    //
    //     // console.log($("html").text())
    //     console.log("--end--")
    //
    // })

    ;
    // nightmare

}

module.exports = go_nightmare;