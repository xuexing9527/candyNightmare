"use strict"
function SOUGOU() {
    const obj = {
        // 根 url
        url: "http://www.sogou.com"
        ,data: require("./json10000/9000.json").arr
        // 递归状态
        ,recursion_status: 0
        // 1 是 http || superagent ; 2 是  nightmare
        ,send_method: 1
        // 日志目录
        ,logFile: "data/sougou/sougou.txt"
        //队列名称
        ,queueName: 'que_xx_sougou'
        //单条等待时间
        ,waitTime: 12000
    }
    for(let k in obj){
        this[k] = obj[k];
    }
}
// url处理函数
SOUGOU.prototype.urlRule = function (){
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/web?query=" + this.data[i].phoneNum
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
    // 返回一个可供直接使用的 目标数组
    return arr;
}
SOUGOU.prototype.keep_run = function (){
    return "no keep_run"
}
// 格式化数据
SOUGOU.prototype.data_list = function ($) {
    var arr = [];
    $(".rb").each(function (i) {
        arr.push({
            title: $(this).find("h3").text()
            ,target: $(this).find("h3 a").attr("href")
            ,text: $(this).text()
        })
    });
    return arr;
}
// 包含 初始 url ，目标 url ,id 基本信息 和 详细信息
SOUGOU.prototype.init = function () {
    return this.urlRule()
}
module.exports = SOUGOU;
