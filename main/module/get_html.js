var $html = require("../model/$html");
const cheerio = require('cheerio')
    ,iconv = require('iconv-lite')//解析gb2312格式
    ,BufferHelper = require('bufferhelper')
;//辅助解析gb2312

const getHtml = function (opts,res) {

    var bufferHelper = new BufferHelper();
    var html = "";

    res
        .on('data', (chunk) => {
            bufferHelper.concat(chunk);
            html += chunk;
        })
        .on('end', () => {

            $html.status = 1;
            $html.text = html;

            const gbk_html =  iconv.decode(bufferHelper.toBuffer(),'GBK')
                ,_$ = cheerio.load(gbk_html) //GBK
                ,$ = cheerio.load(html); //UTF-8
            var obj = {};

            if(false){ //此处获得html 存到model , $html
                obj = _$;
            }else{
                obj = $;
            }
            $html.$ = obj;
        });
}

module.exports = getHtml;