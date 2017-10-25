"use strict"
const achieve_360 = (opts,$)=>{

    console.log("---------- achieve ----------")
    console.log($("title").text());
    // $(".res-list").each(function (i) {
        // if(i===0){ //归属地
        //     if(($(".mh-detail").text()).match(/[\u4e00-\u9fa5]|\d/g) !== null){
        //         console.log(($(".mh-detail").text()).match(/[\u4e00-\u9fa5]|\d/g).join(""));
        //     }
        // }else{
        //     console.log($(this).text());
        // }
    // })

    console.log($("body").text());
}


module.exports = achieve_360;