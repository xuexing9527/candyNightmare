// import async from 'async-es';
// const async = require("async");
// const http = require("http");

// var array = [0,1,false,true,'','1'];
//
// asyn
// // (array,'filter')(Boolean)
// ([],'filter')(Boolean)
// (http.get)({host:'www.baidu.com',port:80,path:'/'},asyn)
//
//     .end(function(asyn){
//         console.log(asyn)
//         console.log(asyn[0]);
//         asyn[1][0].on('data',function(chunk){
//             console.log('BODY:'+chunk)
//         })
//     })




// async.waterfall([
//     function(callback) {
//         getSomething(options, function (err, result) {
//             if (err) {
//                 callback(new Error("failed getting something:" + err.message));
//                 // we should return here
//             }
//             // since we did not return, this callback still will be called and
//             // `processData` will be called twice
//             callback(null, result);
//         });
//     },
//     processData
// ], done);




