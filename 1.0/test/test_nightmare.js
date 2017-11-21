"use strict";


const nightmareCloser = (function () {

    var nightmare = null;

    return function () {

        var Nightmare = require('nightmare');
        nightmare = Nightmare({show: true});

        console.log("-----------")
        nightmare.goto('https://www.reg007.com/')
            .click("#nav_btn_signin")
            .type(
                '#m_signin_email','15313350626'
            )
            .type(
                '#m_signin_password', 'work1234'
            )
            .click("#m_signin_form .btn-success")
            .cookies.get({}, (error, cookies) => {
                console.log("--------cookies------------")
                console.log(error, cookies)
            console.log("--------cookies end------------")
            })
            .wait(2000)
            .click('#tlogo')
            .wait(2000)
        return nightmare;
    }

}());

const nightmare = nightmareCloser();

function testOnePage(nightmare) {

    var i = 0;
    const arr = [
        "15313350626"
        ,"13301317002"
        ,"18511888741"
    ];
    function callback() {

        if(i<3){

            nightmare

                .type('#e_m', '')
                .type('#e_m', arr[i])
                .click("#tsb")
                .evaluate(function () {
                    return document.getElementsByTagName("html")[0].innerHTML;
                })
                .then(function (result) {
                    console.log(result);
                })
                .catch(function (error) {
                    console.error('Search failed:', error);
                });
            i++
        }else{

            nightmare

                .type('#kw', '')
                .type('#kw', '任务执行完毕!')
                .click('#su')
                .wait(3000)
                .evaluate(function () {
                    return document.getElementsByTagName("HTML")[0].innerHTML;
                })
                .wait(2000)
                .then(function (result) {
                    console.log(result);
                })
                .catch(function (error) {
                    console.error('Search failed:', error);
                });

            clearInterval(timer);
        }
    }



    var timer = setInterval(callback,18888);
}


testOnePage(nightmare);


// nightmare
//     .goto("https://baidu.com")
//     // .end(() => document.getElementsByTagName("body")[0])
//     .end(() => "x")
//     //prints "some value"
//     .then((value) => console.log(value));


// nightmare.goto('http://www.zhaohuini.com/Search.php?q=15313350626')
//     .cookies.set({
//     "__cfduid":"dbebed02e75aebae6e521273fc9d655581509677529"
//     ,
//     "UM_distinctid":"15f7fcb00650-0f1da590f35832-24414032-1fa400-15f7fcb0066c76"
//     ,"yjs_id":"TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBVYnVudHUgQ2hyb21pdW0vNjIuMC4zMjAyLjYyIENocm9tZS82Mi4wLjMyMDIuNjIgU2FmYXJpLzUzNy4zNnx3d3cuemhhb2h1aW5pLmNvbXwxNTA5Njc3NTMxNDE0fA"
//     ,"ctrl_time":"1"
//     ,"ASP.NET_SessionId":"xmvumdwvaieevf50kkhuudab"
//     ,".ASPXAUTH":"6D95792EABE3400DE379D3D2A90EF2E0979B6CE5B6F6D228F327D4DF6EFAC9066181953AE35981F34A8BD1ABEB9EC827C7F7064879208AB6BF963281ADFBCFE0DD5447367879C970DC99D45B6B5015E75F214B4CBA4A38EFA0CB140A72D50AEB0EA3A66F98292CCF242C4FD248FE822B5B49E48169F9C0B067484DE9FAAB894E874B67F5D567A232943888AF9DADC32D64A0FB68D27D15E09F366288A244FA4D936BDE6D615460000A01A991A1238167CC891C32E4FB77E8052A709975DE9AA417DCDE5C2E9DAEA12816EBEB920520ED83689C1FEB7B7C49CDAC9C84A4811E265EA55F3A3E2D34C320E55BC36EF9B8D8D228A8269AE0BFF3FFB8997BFA1FBA63A7E5EC141DEEA08D74286ED15A8D9FD49131E22D848096ED8FF034FB5FDC0D8220DD47F861DADD9F0662201982E5B36F9C80902369A9A4274F627185E1C66BB5A505CB371B93C89601C9AFFE387F5C7D3AC1D551BD3F45C669DD0BEC3E7D1503D831E64CD01DB892C6ED26BEEFE3DDD8BD49FD1DCEEA98CFFD7AC5C89EB22F8F"
//     ,secure: true
//     })
//     .evaluate(function(){
//         return document.getElementsByTagName("html")[0].innerHTML;
//     })
//     .end()
//     .then(function(html){
//         console.log(html);
//     })

// nightmare
//     // .goto(`http://weixin.sogou.com/weixin?type=2&s_from=input&query=15921390127&ie=utf8&_sug_=n&_sug_type_=`).wait(18888)
//     .goto(``).wait(10688)
//     .cookies.clearAll()
//     .evaluate(function(){
//         return document.getElementsByTagName("html")[0].innerHTML;
//     })
//     .end()
//     .then(function(html){
//         console.log(html);
//     });

