'use strict'
// var $html = require("../../model/$html");
const
    cheerio = require('cheerio')
    ,iconv = require('iconv-lite')//解析gb2312格式
    ,BufferHelper = require('bufferhelper')//解析gb2312
    ,achieve = require("./../../controller/achieve")
    ,keep_run = require("./../../controller/keep_run")
;

const getHtml = function (opts,res) {

    var bufferHelper = new BufferHelper();
    var html = "";

    res
        .on('data', (chunk) => {
            bufferHelper.concat(chunk);
            html += chunk;
        })
        .on('end', () => {

            // $html.status = 1;
            // $html.text = html;

            const gbk_html =  iconv.decode(bufferHelper.toBuffer(),'GBK')
                ,_$ = cheerio.load(gbk_html) //GBK
                ,$ = cheerio.load(html); //UTF-8

            if(false){  //此处获得html 存到model , $html
                achieve(opts,_$);
                keep_run(opts,_$);
            }else{
                achieve(opts,$);
                keep_run(opts,$);
            }
            // $html.$ = obj;
        });
}

module.exports = getHtml;