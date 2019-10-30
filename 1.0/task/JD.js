
"use strict"

function REG007() {

    const obj = {
        url: "https://www.jd.com" // 根 url
        ,data: require("./json10000/JD").arr
        ,recursion_status: 0 // 递归状态
        ,send_method: 2 // 1 是 http || superagent ; 2 是  nightmare
        ,logFile: "data/JD/JD.txt" // 日志目录
        ,queueName: 'que_xx_JD'
        ,waitTime: 10000
    }

    for(let k in obj){
        this[k] = obj[k];
    }
}

REG007.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/Search?keyword=" + this.data[i].keyword
            ,id: i
        };
        for(let k in this){
            if(k!=='data'){
                target[k] = this[k];
            }else{
                target.keyword = this.data[i].keyword;
            }
        }
        arr.push(target);
    }
    return arr; // 返回一个可供直接使用的 目标数组
}

REG007.prototype.keep_run = function (){
    return "no keep_run"
}

REG007.prototype.data_list = function ($) { // 格式化数据
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
REG007.prototype.init = function () {
    return this.urlRule() // 包含 初始 url ，目标 url ,id 基本信息 和 详细信息
}
REG007.prototype.steps = function (nightmare, callback) {
    nightmare
        .goto('https://www.jd.com')
        .type('#key', '美的燃气罩')
        .click('#search .form button')
        // .type('#signin_password','work1234')
        // .click('#signin_form [type="submit"]')
        // .wait(1000)
        .then(()=>{
            callback();
        })
        .catch((err)=>{
            console.log(err);
            console.log(`开启页面 故障 失败 consumer.js  ： ${err}`);
        })
}

module.exports = REG007;
