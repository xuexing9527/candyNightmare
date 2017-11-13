'use strict'
const loggerFun = require("./../module/log/log4js");

const go_nightmare = (opts,opts__proto__,nightmare) => {

    console.log("进入了 nightmare 搜索页面 ... ");

    nightmare
         // .goto(opts.url)
         // .type('[name="q"]', '')
         // .type('[name="q"]', opts.phoneNum)
         // .click('[type="submit"]')
        /*re007*/
        //.goto(opts.url)
        //.type('#e_m', '')
        //.type('#e_m', opts.phoneNum)
        //.click("#tsb")
        /*re007end*/
        /* sougou_weixin */
        .type('#query', '')
        .type('#query', opts.phoneNum)
        .click('[uigs="search_article"]')
        /* sougou_weixin end */
        .wait(12888)
        .evaluate(function () {
            return document.getElementsByTagName("html")[0].innerHTML;
        })
        // .end()
        .then(function (html) {

            console.log("进入了 html cheerio load 页面阶段 ... ");

            const cheerio = require('cheerio');
            const achieve = require('./../controller/achieve');
            var $ = cheerio.load(html);
            achieve(opts,$,opts__proto__);
        })
        .catch(function (error) {
            console.error('Search failed:', error);
        });

    /**********  nightmare load url  ************/



    // const Nightmare = require('nightmare');
    // var nightmare = Nightmare({ show: true });
    //
    //
    // nightmare
    //     // .goto(opts.url).wait(3888)
    //     .goto(opts.targetUrl).wait(16888)
    //     .evaluate(function(){
    //         return document.getElementsByTagName('HTML')[0].innerHTML;
    //     })
    //     .end()
    //     .then(function(html){
    //         const cheerio = require('cheerio');
    //         const achieve = require('./../controller/achieve');
    //         var $ = cheerio.load(html);
    //
    //         achieve(opts,$,opts__proto__);
    //
    //     }).catch((err)=>{
    //
    //     const log = loggerFun(opts.logFile); // 日志打印目录
    //     log.error(`nightmare then 错误 ： ${err}`);
    // }).catch((err)=>{
    //     const log = loggerFun(opts.logFile); // 日志打印目录
    //     log.error(`nightmare加载错误 ， see： ${err}`);
    // })
    // ;

    /*********************  nightmare load url end  *********************/
}

module.exports = go_nightmare;