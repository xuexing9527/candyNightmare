
const
    http = require('http')
    ,superagent = require('superagent')
    ,http_confirm = require("./http_confirm")
    ,unload_data_print = require("../print/unload_data_print")
;

function http_send(opts,opts__proto__) {

    console.log("进入了http_send...");

    http
        .get(opts.targetUrl, (res) => {
            console.log("发送了请求...");
            http_confirm(opts,res,opts__proto__);// 此处应当判断status
        })
        .on('error', (err) => {
            err = JSON.stringify(err);
            logger.error(opts,err);
        });

    /**
     * superagent start
     */
    // superagent
    //     .get(opts.targetUrl)
    //     .set('Cookie', '__cfduid=dbebed02e75aebae6e521273fc9d655581509677529; UM_distinctid=15f7fcb00650-0f1da590f35832-24414032-1fa400-15f7fcb0066c76; yjs_id=TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBVYnVudHUgQ2hyb21pdW0vNjIuMC4zMjAyLjYyIENocm9tZS82Mi4wLjMyMDIuNjIgU2FmYXJpLzUzNy4zNnx3d3cuemhhb2h1aW5pLmNvbXwxNTA5Njc3NTMxNDE0fA; ctrl_time=1; ASP.NET_SessionId=dgjt4vjktxecwc5rrp2wzkae; .ASPXAUTH=0DB5AD852D901C0A501A96CD4BD48C9C0C16EB94FD2EDB96D8FAA4DA74615B1FB3B9B283150EAF60BB4B0FBA208C42B38ADFD2F8AD8C9A2C74F1BF5265E6CB5DCCC098AE1F50C8BBC028C753E44E6E5DB5D509BCF4B26EE2FFC5404E65383C6EBF24F39B863F4C6E9170B534F2233A158CEEE246875364948C03CB749D3CF1DC452C78E54CA8F0BDEE03239ED13D04DBF6B4F231485C4A299048DA1BADF83CFEC14D8DE62D7FFF5C91259C2FD22163CD983246F7FA019BA4A6A883B3B21565FEE0D0F176172C7012A571BB54BE60584373B7ADD12847CB5FA01082CC662BC91F71DC2A4EDFC54ABAC7B21B3E17CF8E52ADB95891839EA326EFE701427446E0705715A0985C577077BF27F511FE16C18F20994B0CC8E4625FA7423681510E3E32AB47194AF63BE927436554D2CFEA42C0876F4DEFFAD10F7257AE0C6F43006DB99BCB20967F3126E3147E97D0AB8D185905D01A0DA24E44ECB55BE7E1F355F58FF4D99760601976A057055E2E1AD8E850E38C51678FADABC9417C224D24893AED')
    //     .end(function (err, res) { // callback
    //         // 常规的错误处理
    //         if (err) {
    //             console.error(err);
    //         }
    //
    //         http_confirm(opts,res,opts__proto__);
    //
    //         const
    //             cheerio = require('cheerio')
    //             ,iconv = require('iconv-lite')//解析gb2312格式
    //             ,BufferHelper = require('bufferhelper')//解析gb2312
    //             ,achieve = require("./../../controller/achieve")
    //             ,keep_run = require("./../../controller/keep_run")
    //         ;
    //
    //
    //         var bufferHelper = new BufferHelper();
    //         var html = "";
    //         var end_status = false;
    //         var get_data_num = 0;
    //         res
    //             .on('data', (chunk) => {
    //                 bufferHelper.concat(chunk);
    //                 html += chunk;
    //                 get_data_num++;
    //             })
    //
    //             .on('error', (e) => {
    //                 console.error(`错误: ${e.message}`);
    //                 logger.error(`错误: ${e.message},${opts}`);
    //             })
    //             // .on('end', () => {
    //             //     console.log(`触发了end事件,累加了 ${get_data_num} 次data`);
    //             //     end_status = true;
    //             //     const gbk_html =  iconv.decode(bufferHelper.toBuffer(),'GBK')
    //             //         ,_$ = cheerio.load(gbk_html) //GBK
    //             //         ,$ = cheerio.load(html); //UTF-8
    //             //
    //             //     if(false){  //此处获得html 存到model , $html
    //             //         achieve(opts,_$,opts__proto__);
    //             //         keep_run(opts,_$,opts__proto__);
    //             //     }else{
    //             //         achieve(opts,$,opts__proto__);
    //             //         keep_run(opts,$,opts__proto__);
    //             //     }
    //             // })
    //         $ = cheerio.load(res.text); //UTF-8
    //         achieve(opts,$,opts__proto__);
    //
    //
    //     });
    /**
     * superagent end
     */
}

module.exports = http_send;
