
"use strict"

function ZHAOHUINI() {

    const obj = {
        url: "http://www.zhaohuini.com" // 根 url
        ,data: require("./../json/1000url.json").arr
        ,recursion_status: 0 // 递归状态
        ,send_method: 2 // 1 是 http || superagent ; 2 是  nightmare
        ,logFile: "data/zhaohuini/zhaohuini.txt" // 日志目录
    }

    this.url = obj.url;
    this.data = obj.data;
    this.recursion_status = obj.recursion_status;
    this.send_method= obj.send_method;
    this.logFile = obj.logFile;
}

ZHAOHUINI.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/Search.php?q=" + this.data[i].phoneNum
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

module.exports = ZHAOHUINI;
