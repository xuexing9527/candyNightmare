"use strict"
function _360() {

    const obj = {
        url: "https://www.so.com" // 根 url
        ,data: require("./json10000/9000.json").arr
        ,recursion_status: 0 // 递归状态
        ,send_method: 1 // 1 是 http || superagent ; 2 是  nightmare
        ,logFile: "data/360/360.txt" // 日志目录
    }

    this.url = obj.url;
    this.data = obj.data;
    this.recursion_status = obj.recursion_status;
    this.send_method= obj.send_method;
    this.logFile = obj.logFile;
}

_360.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/s?ie=utf-8&fr=none&src=home_www&q=" + this.data[i].phoneNum
            ,url:this.url
            ,send_method: this.send_method
            ,id: i
            ,phoneNum: this.data[i].phoneNum
            ,logFile: this.logFile
        };
        target.__proto__ =this;
        arr.push(target);
    }

    return arr; // 返回一个可供直接使用的 目标数组
}
_360.prototype.keep_run = function (){
    return "no keep_run"
}
_360.prototype.data_list = function ($) { // 格式化数据
    var arr = [];
    $(".res-list").each(function (i) {
        arr.push({
            title: $(this).find("h3").text()
            ,target: $(this).find("h3 a").attr("href")
            ,text: $(this).text()
        })
    });
    return arr;
}
_360.prototype.init = function () {
    return this.urlRule() // 包含 初始 url ，目标 url ,id 基本信息 和 详细信息
}


module.exports = _360;
