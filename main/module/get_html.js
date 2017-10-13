var $html = require("../model/$html");
const cheerio = require('cheerio')
    ,iconv = require('iconv-lite')//解析gb2312格式
    ,BufferHelper = require('bufferhelper')
;//辅助解析gb2312

const getHtml = function (opts,model,res) {

    var bufferHelper = new BufferHelper();
    var utf_8_html = "";

    res
        .on('data', (chunk) => {
            bufferHelper.concat(chunk);
            utf_8_html += chunk;
        })
        .on('end', () => {

            const html =  iconv.decode(bufferHelper.toBuffer(),'GBK')
                ,_$ = cheerio.load(html) //GBK
                ,$ = cheerio.load(utf_8_html); //UTF-8

            if(false){ //此处获得html 存到model
                $html = _$;
            }else{
                $html = $;
            }
            model.$html = $html;
        });
}

module.exports = getHtml;