"use strict"
const start_connect = require("./../../../service/start_connect");
const publisher = require("../../../service/publisher");
const keep_run_360 = (opts,$)=>{

    //执行 持续抓取规则 ， 获取新消息 msg


    console.log("----------  no keep_run ----------")

    // console.log("---------- keep_run ----------")
    // console.log($("title").text());

    // $("#warper .res-list").each(function (i) {
    //     if(i===0){ //归属地
    //     }else{
    //
    //         console.log($(this).find("h3 a").attr("href"));
    //
    //         const msg = {url:$(this).find("h3 a").attr("href")};
    //         //发布 消息msg
    //         const del = start_connect(); //将 del 移到构造函数中去
    //         publisher(del,msg);
    //
    //     }
    // })









}


module.exports = keep_run_360;