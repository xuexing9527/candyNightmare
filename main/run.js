const
    http_send = require("./module/http_send")
    ,$html = require("./model/$html")
    // ,http_confirm = require("./module/http_confirm")
;
const opts = {url: "http://www.time-stone.cn"};
// const opts = {url: "http://www.icbc.com"};





//启动MQservice
// amqp.connect("amqp://user:password@127.0.0.1/my_vhost").then(function(conn) {
// amqp.connect("amqp://admin:admin@127.0.0.1/my_vhost").then(function(conn) {
// amqp.connect("amqp://guest:guest@localhost:5672").then(function(conn) {
// amqp.connect("amqp://test:123@localhost/test_host").then(function(conn) {
//
//     try {
//         process.once('SIGINT', function() { conn.close(); });
//         return conn.createChannel().then(function(ch) {
//             var ok = ch.assertQueue('QUE_xx', {arguments:{durable: true}});
//             ok = ok.then(function(_qok) {
//
//                 return ch.consume('QUE_xx', function(msg) {
//                     console.log(msg)
//                 }, {noAck: true});
//
//             });
//
//             return ok.then(function(_consumeOk) {
//                 console.log(' [*] Waiting for messages. To exit press CTRL+C');
//             });
//
//         });
//     } catch (err) {
//         err.msg = "服务启动错误";
//         console.log(err);
//     }
// }).catch(console.warn);






var q = 'QUE_xx';
const open = require('amqplib').connect('amqp://test:123@localhost/test_host');

// Publisher
open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q).then(function(ok) {
        var someJson = '{msg:"Hello World!"}'
        return ch.sendToQueue(q, new Buffer(someJson));
    });
}).catch(console.warn);

// Consumer
open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q).then(function(ok) {
        return ch.consume(q, function(msg) {

            if (msg !== null) {
                console.log(msg.content.toString());
                ch.ack(msg);
            }

        });
    });
}).catch(console.warn);







// const candy = function (opts) {
//
//     http_send(opts); //需要判断一个状态 检测send结束 有了 html数据
//
//     var timer = setInterval(function () {
//
//         if($html.status === 1){
//
//             console.log("- begin -");
//             console.log($html.$("title").text());
//             clearInterval(timer);
//
//         }else if($html.status === 101){
//
//             console.log("err");
//             clearInterval(timer);
//         }
//
//     },500);
//
// }
//
// candy(opts);