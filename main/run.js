const
    http_send = require("./module/http/http_send")
    ,$html = require("./model/$html")
    // ,http_confirm = require("./module/http_confirm")
    ,start_connect = require("./module/service/start_connect")
    ,publisher = require("./module/service/publisher")
    ,consumer = require("./module/service/consumer")
;










// const opts = {url: "http://www.icbc.com"};
const opts = {url: "http://www.time-stone.cn"};

const del = start_connect(); //将 del 移到构造函数中去

publisher(del,opts);

consumer(del,opts);





















// var q = 'QUE_xx';
// const open = require('amqplib').connect('amqp://test:123@localhost/test_host');
//
// // Publisher
// open.then(function(conn) {
//     return conn.createChannel();
// }).then(function(ch) {
//     return ch.assertQueue(q).then(function(ok) {
//         var someJson = '{msg:"Hello World!"}'
//         return ch.sendToQueue(q, new Buffer(someJson));
//     });
// }).catch(console.warn);
//
// // Consumer
// open.then(function(conn) {
//     return conn.createChannel();
// }).then(function(ch) {
//     return ch.assertQueue(q).then(function(ok) {
//         return ch.consume(q, function(msg) {
//
//             if (msg !== null) {
//                 console.log(msg.content.toString());
//                 ch.ack(msg);
//             }
//
//         });
//     });
// }).catch(console.warn);
//



