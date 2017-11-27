"use strict"
function WEIBO() {

    const obj = {
        url: "http://s.weibo.com" // 根 url
        ,data: require("./json10000/9000.json").arr
        ,recursion_status: 0 // 递归状态
        ,send_method: 2 // 1 是 http || superagent ; 2 是  nightmare
        ,logFile: "data/weibo/weibo.txt" // 日志目录
        ,queueName: 'que_xx_REG007'
        ,waitTime: 30000
    }

    for(let k in obj){
        this[k] = obj[k];
    }
}
WEIBO.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/weibo/" + this.data[i].phoneNum
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
WEIBO.prototype.keep_run = function (){
    return "no keep_run"
}
WEIBO.prototype.data_list = function ($) { // 格式化数据
    var arr = [];
    $(".search_feed .feed_list .WB_cardwrap").each(function (i) {
        arr.push({
            title: $(this).find("a.W_texta").text()
            ,target: $(this).find("a.W_texta").attr("href")
            ,text: $(this).text()
        })
    });
    return arr;
}
WEIBO.prototype.init = function () {
    return this.urlRule() // 包含 初始 url ，目标 url ,id 基本信息 和 详细信息
}

module.exports = WEIBO;
