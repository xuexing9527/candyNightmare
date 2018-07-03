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
        // 队列并发
        this.queueArr = (function(){
            var queueArr = [];
            for(let i=1; i<=conf.QUEUES; i++){
                queueArr.push(conf.TASK_MAX+i);
            }
            return queueArr;
        }());
        // 任务最大值
        this.TASK_MAX = {
            COUNT: 10,
            // queue name first word   q0,q1 ... ;
            QUEUE_FIRST_NAME: ['test0','test1','test2','test3','test4','test5','test6','test7','test8','test9'],
        }
        this.TASK_NUM = 0;
    };
    bail(err){
        console.log(err);
    }
    publisher(conn) {
        var _this = this;
        conn.createChannel(on_open);
        function on_open(err, ch) {
            if (err != null) _this.bail(err);

            /**
             * BREAKPOINT
             *
             * Every queue has a array ,which of them from a big array . pop
             * Array = [
             *      [queue1...],
             *      [queue2...]
             * ]
             * if(queue1[i] achieve success){
             *      queue1.pop(queue1[i]);
             * }
             * if(queue1.length === 0){
             *      Array.pop(queue1);
             *      Array.push(new queue);
             *  }
             *
             */

            var Array = [
                [],
                [],
                []
            ];

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
            if (err != null) _this.bail(err);
            for(let i=0; i<_this.queueArr.length; i++){
                ch.assertQueue(_this.queueArr[i]);
                ch.consume(_this.queueArr[i], function(msg) {
                    if (msg !== null) {
                        console.log(msg.content.toString());
                        ch.ack(msg);
                    }
                    // if(i === _this.queueArr.length){
                    //     conn.close();
                    // }
                });
            }
        }
    };
    start(){
        var _this = this;
        // 控制同时执行任务个数
        if(_this.TASK_NUM < _this.TASK_MAX.COUNT){
            _this.TASK_NUM ++;
        }else{
            _this.TASK_NUM ++;
            console.log("等待执行...")
        }
        require('amqplib/callback_api')
            .connect(this.conf.amqpHost, function(err, conn) {
                if (err != null) _this.bail(err);
                _this.publisher(conn);
                _this.consumer(conn);
            });
    }
}

var service = new Service();

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
