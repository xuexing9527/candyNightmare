"use strict"
function BAIDU() {

    const obj = {
        url: "http://weixin.sogou.com" // 根 url
        ,data: require("./../json/1000url.json").arr
        ,recursion_status: 0 // 递归状态
        ,logFile: "data/sougou_weixin/sougou_weixin.txt" // 日志目录
    }

    this.url = obj.url;
    this.data = obj.data;
    this.recursion_status = obj.recursion_status;
    this.logFile = obj.logFile;
}



BAIDU.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/weixin?type=2&query=" + this.data[i].phoneNum
            ,url:this.url
            ,id: i
            ,phoneNum: this.data[i].phoneNum
            ,logFile: this.logFile
        };
        arr.push(target);
    }
    return arr; // 返回一个可供直接使用的 目标数组
}
BAIDU.prototype.keep_run = function (){
    return "no keep_run"
}
BAIDU.prototype.data_list = function ($) { // 格式化数据
    var arr = [];
    $(".news-list li").each(function (i) {
        arr.push({
            title: $(this).find("h3").text()
            ,target: $(this).find("h3 a").attr("href")
            ,text: $(this).text()
        })
    });
    return arr;
}
BAIDU.prototype.init = function () {
    return this.urlRule() // 包含 初始 url ，目标 url ,id 基本信息 和 详细信息
}


module.exports = BAIDU;
