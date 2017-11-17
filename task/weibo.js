"use strict"
function WEIBO() {

    const obj = {
        url: "http://s.weibo.com" // 根 url
        ,data: require("./json/1000url.json").arr
        ,recursion_status: 0 // 递归状态
        ,send_method: 2 // 1 是 http || superagent ; 2 是  nightmare
        ,logFile: "data/weibo/weibo.txt" // 日志目录
    }

    this.url = obj.url;
    this.data = obj.data;
    this.recursion_status = obj.recursion_status;
    this.send_method= obj.send_method;
    this.logFile = obj.logFile;
}
WEIBO.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/weibo/" + this.data[i].phoneNum
            ,url:this.url
            ,send_method: this.send_method
            ,id: i
            ,phoneNum: this.data[i].phoneNum
            ,logFile: this.logFile
        };
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
