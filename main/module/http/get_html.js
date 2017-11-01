'use strict'

const
    cheerio = require('cheerio')
    ,iconv = require('iconv-lite')//解析gb2312格式
    ,BufferHelper = require('bufferhelper')//解析gb2312
    ,achieve = require("./../../controller/achieve")
    ,keep_run = require("./../../controller/keep_run")
;

const getHtml = function (opts,res,opts__proto__) {
    console.log("进入了get_html...");
    var bufferHelper = new BufferHelper();
    var html = "";

    var end_status = false;
    var get_data_num = 0;
    res
        .on('data', (chunk) => {
            bufferHelper.concat(chunk);
            html += chunk;
            get_data_num++;
        })

        .on('error', (e) => {
            console.error(`错误: ${e.message}`);
            logger.error(`错误: ${e.message},${opts}`);
        })
       .on('end', () => {
           console.log(`触发了end事件,累加了 ${get_data_num} 次data`);
           end_status = true;
           const gbk_html =  iconv.decode(bufferHelper.toBuffer(),'GBK')
               ,_$ = cheerio.load(gbk_html) //GBK
               ,$ = cheerio.load(html); //UTF-8

           if(false){  //此处获得html 存到model , $html
               achieve(opts,_$,opts__proto__);
               keep_run(opts,_$,opts__proto__);
           }else{
               achieve(opts,$,opts__proto__);
               keep_run(opts,$,opts__proto__);
           }
       })

         /*********************************************************
         *                                                        *
         *    莫名 原因 导致不触发 end， 用定时器 容错处理 17.11.01     *
         *                                                        *
         **********************************************************/
        setTimeout(function () {

            if(end_status) return;

            console.log(`!!! 任务异常 >> -- 10s 内 累加了 ${get_data_num} 次data ,但未触发end事件 任务 : ${JSON.stringify(opts)}  -- !!!`);
            const gbk_html =  iconv.decode(bufferHelper.toBuffer(),'GBK')
                ,_$ = cheerio.load(gbk_html) //GBK
                ,$ = cheerio.load(html); //UTF-8

            if(false){  //此处获得html 存到model , $html
                achieve(opts,_$,opts__proto__);
                keep_run(opts,_$,opts__proto__);
            }else{
                achieve(opts,$,opts__proto__);
                keep_run(opts,$,opts__proto__);
            }

        },10000);
    ;
}

module.exports = getHtml;