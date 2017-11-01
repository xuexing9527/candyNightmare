"use strict";
const controller = require("./../controller/controller");
// consumer
const consumer = (conDoor_qeName,opts__proto__) => {
    conDoor_qeName.open.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(conDoor_qeName.q).then(function(ok) {
            return ch.consume(conDoor_qeName.q, function(msg) {
                if (msg !== null) {
                    // 打印消息
                    console.log(JSON.parse( msg.content ));
                    // 消费消息
                    controller(JSON.parse(msg.content),opts__proto__);
                    ch.ack(msg); //标记已被使用 ?
                }else{
                    console.log(JSON.parse( msg.content ));
                    logger.error("消息队列接受异常", JSON.parse( msg.content ));
                    ch.ack(msg); //标记已被使用 ?
                }
            });
        });
    }).catch(console.warn);
}
module.exports = consumer;
