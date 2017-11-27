'use strict'
const loggerFun = require("./../module/log/log4js");

const go_nightmare = (opts,opts__proto__,nightmare) => {
    console.log("进入了 nightmare 搜索页面 ... ");

    function ready(html,opts,opts__proto__) {
        console.log("进入了 html cheerio load 页面阶段 ... ");

        const cheerio = require('cheerio');
        const achieve = require('./../controller/achieve');
        var $ = cheerio.load(html);
        achieve(opts,$,opts__proto__);
    }
    try{
        if(opts.queueName === 'que_xx_REG007'){
            nightmare
                .goto(opts.url)
                .type('#e_m', '')
                .type('#e_m', opts.phoneNum)
                .click("#tsb")
                .wait(opts.waitTime-3112)
                .evaluate(function () {
                    return document.getElementsByTagName("html")[0].innerHTML;
                })
                .then(function (html) {
                    ready(html,opts,opts__proto__);
                })
                .catch(function (error) {
                    console.error('Search failed go_nightmare:', error);
                });
        }
        if(opts.queueName === 'que_xx_zhaohuini'){
            nightmare
                .goto(opts.url)
                .type('[name="q"]', '')
                .type('[name="q"]', opts.phoneNum)
                .click('[type="submit"]')
                .wait(opts.waitTime-3112)
                .evaluate(function () {
                    return document.getElementsByTagName("html")[0].innerHTML;
                })
                .then(function (html) {
                    ready(html,opts,opts__proto__);
                })
                .catch(function (error) {
                    console.error('Search failed go_nightmare::', error);
                });
        }
        if(opts.queueName === 'que_xx_sougou_weixin'){
            nightmare
                .type('#query', '')
                .type('#query', opts.phoneNum)
                .click('[uigs="search_article"]')
                .wait(opts.waitTime-3112)
                .evaluate(function () {
                    return document.getElementsByTagName("html")[0].innerHTML;
                })
                .then(function (html) {
                    ready(opts,opts__proto__);
                })
                .catch(function (error) {
                    console.error('Search failed go_nightmare::', error);
                });
        }
    }catch(e){
        logger.error(`队列名称判断出错，请查看consumer -> ${e}`);
    }
}

module.exports = go_nightmare;
