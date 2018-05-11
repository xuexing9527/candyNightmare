
"use strict"

function ZHAOHUINI() {

    const obj = {
        url: "http://www.zhaohuini.com" // 根 url
        ,data: require("./json10000/9000.json").arr
        ,recursion_status: 0 // 递归状态
        ,send_method: 2 // 1 是 http || superagent ; 2 是  nightmare
        ,logFile: "data/zhaohuini/zhaohuini999.txt" // 日志目录
        ,queueName: 'que_xx_zhaohuini'
        ,waitTime: 30000
    }

    for(var k in obj){
        this[k] = obj[k];
    }
}

ZHAOHUINI.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/Search.php?q=" + this.data[i].phoneNum
            ,id: i
        };
        for(let k in this){
            if(k!=='data'){
                target[k] = this[k];
            }else{
                target.phoneNum= this.data[i].phoneNum;
            }
        }
        arr.push(target);
    }
    return arr; // 返回一个可供直接使用的 目标数组
}

ZHAOHUINI.prototype.keep_run = function (){
    return "no keep_run"
}

ZHAOHUINI.prototype.data_list = function ($) { // 格式化数据
    var arr = [];
    $("#site_list").each(function (i) {
        arr.push({
            title: $(this).find("li.site h4").text()
            ,target: $(this).find("a.sitename").attr("href")
            ,text: $(this).text()
        })
    });
    return arr;
}
ZHAOHUINI.prototype.init = function () {
    return this.urlRule() // 包含 初始 url ，目标 url ,id 基本信息 和 详细信息
}
ZHAOHUINI.prototype.steps = (nightmare, callback) => {
    nightmare
        .goto("http://www.zhaohuini.com/Login.php")
        .type('#signup_email','15313350626')
        .type('#signup_password','work123')
        .wait(8000)
        .click("#btn_signup")
        .wait(1000)
        .then(()=>{
            callback();
        })
        .catch((err)=>{
            console.log(`开启页面 故障 失败 consumer.js  ： ${err}`);
        })
}

module.exports = ZHAOHUINI;
