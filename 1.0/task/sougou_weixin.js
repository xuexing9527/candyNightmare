"use strict"
function SOUGOU_WEIXIN() {

    const obj = {
        url: "http://weixin.sogou.com" // 根 url
        ,data: require("./json10000/9000.json").arr
        ,recursion_status: 0 // 递归状态
        ,send_method: 2 // 1 是 http || superagent ; 2 是  nightmare
        ,logFile: "data/sougou_weixin/sougou_weixin.txt" // 日志目录
        ,queueName: 'que_xx_REG007'
        ,waitTime: 18000
    }

    for(let k in obj){
        this[k] = obj[k];
    }
}



SOUGOU_WEIXIN.prototype.urlRule = function (){ // url处理函数
    var arr = [];
    for(let i = 0,len = this.data.length;i < len ;i ++){

        let target = {
            targetUrl: this.url + "/weixin?type=2&query=" + this.data[i].phoneNum + "&ie=utf8&s_from=input&_sug_=n&_sug_type_="
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
SOUGOU_WEIXIN.prototype.keep_run = function (){
    return "no keep_run"
}
SOUGOU_WEIXIN.prototype.data_list = function ($) { // 格式化数据
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
SOUGOU_WEIXIN.prototype.init = function () {
    return this.urlRule() // 包含 初始 url ，目标 url ,id 基本信息 和 详细信息
}


module.exports = SOUGOU_WEIXIN;
