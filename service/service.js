/******************************************************
 *                                                     *
 * start connect , return connect door and queue name .*
 *                                                     *
 ******************************************************/
"use strict";
class Service {
    constructor() {
        const conf = require('./config');
        //配置引入
        this.conf = conf;
        //队列并发
        this.queueArr = (function(){
            var queueArr = [];
            for(let i=1; i<=conf.queues; i++){
                queueArr.push(conf.queueName+i);
            }
            return queueArr;
        }());
    };
    publisher(conn) {
        var _this = this;
        conn.createChannel(on_open);
        function on_open(err, ch) {
            if (err != null) bail(err);
            for(let i=0; i<_this.queueArr.length; i++){
                ch.assertQueue(_this.queueArr[i]);
                ch.sendToQueue(_this.queueArr[i], new Buffer(`something to do${i}`));
            }
        }
    };
    consumer(conn) {
        var _this = this;
        var ok = conn.createChannel(on_open);
        function on_open(err, ch) {
            if (err != null) bail(err);
            for(let i=0; i<_this.queueArr.length; i++){
                ch.assertQueue(_this.queueArr[i]);
                ch.consume(_this.queueArr[i], function(msg) {
                    if (msg !== null) {
                        console.log(msg.content.toString());
                        ch.ack(msg);
                    }
                });
            }
        }
    };
    start(){
        var _this = this;
        require('amqplib/callback_api')
            .connect(this.conf.amqpHost, function(err, conn) {
                if (err != null) bail(err);
                _this.publisher(conn);
                _this.consumer(conn);
            });
    }
}

var service = new Service();

console.log(service);
service.start();














//
// // Publisher
// function publisher(conn,queueArr) {
//     conn.createChannel(on_open);
//     function on_open(err, ch) {
//         if (err != null) bail(err);
//         for(let i=0; i<queueArr.length; i++){
//             ch.assertQueue(queueArr[i]);
//             ch.sendToQueue(queueArr[i], new Buffer(`something to do${i}`));
//         }
//     }
// }
//
// // Consumer
// function consumer(conn,queueArr) {
//     var ok = conn.createChannel(on_open);
//     function on_open(err, ch) {
//         if (err != null) bail(err);
//         for(let i=0; i<queueArr.length; i++){
//             ch.assertQueue(queueArr[i]);
//             ch.consume(queueArr[i], function(msg) {
//                 if (msg !== null) {
//                     console.log(msg.content.toString());
//                     ch.ack(msg);
//                 }
//             });
//         }
//     }
// }
//
// //启动服务
// require('amqplib/callback_api')
//     .connect(conf.amqpHost, function(err, conn) {
//         if (err != null) bail(err);
//         consumer(conn,queueArr);
//         publisher(conn,queueArr);
//     });
