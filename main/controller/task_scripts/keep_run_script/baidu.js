"use strict"
const publisher = require("./../../../service/publisher");
const baidu = (opts,$)=>{

    //执行 持续抓取规则 ， 获取新消息 msg



    console.log("---------- keep_run ----------")
    console.log($("title").text());







    //发布 消息msg
    // const del = start_connect(); //将 del 移到构造函数中去
    // publisher(del,msg);


}


module.exports = baidu;