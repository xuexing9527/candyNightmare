"use strict";
const controller = require("./../controller/controller");
const consumer = (conDoor_qeName,opts__proto__,opts) => {
    function ready() {
        console.log("-----   准备完毕  -----")

        conDoor_qeName.open.then(function(conn) {
            return conn.createChannel();
        }).then(function(ch) {
            return ch.assertQueue(conDoor_qeName.q).then(function(ok) {
                return ch.consume(conDoor_qeName.q, function(msg) {
                    if (msg !== null) {
                        // 打印消息
                        console.log(`消费消息：${ msg.content }`);

                        //判断上个消息是否消费完毕
                        // 消费消息
                        controller(JSON.parse(msg.content),opts__proto__,nightmare);
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

    if(opts.send_method ===2 ){
        var Nightmare = require('nightmare');
        var nightmare = Nightmare({show: true});
            if(opts.queueName === 'que_xx_REG007'){
                nightmare
                    .goto('https://www.reg007.com/account/signin')
                    .type('#signin_email','15313350626')
                    .type('#signin_password','work1234')
                    .click('#signin_form [type="submit"]')
                    .wait(1000)
                    .then(()=>{
                        ready();
                    })
                    .catch((err)=>{
                        console.log(`开启页面 故障 失败 consumer.js  ： ${err}`);
                    })
            }
            if(opts.queueName === 'que_xx_zhaohuini'){
                nightmare
                    .goto("http://www.zhaohuini.com/Login.php")
                    .type('#signup_email','15313350626')
                    .type('#signup_password','work123')
                    .wait(8000)
                    .click("#btn_signup")
                    .wait(1000)
                    .then(()=>{
                        ready();
                    })
                    .catch((err)=>{
                        console.log(`开启页面 故障 失败 consumer.js  ： ${err}`);
                    })
            }
            if(opts.queueName !== 'que_xx_REG007'&&opts.queueName !== 'que_xx_zhaohuini'){
                logger.error(`队列名称判断出错，请查看consumer -> ${e}`);
                return
            }
    }else
    if(opts.send_method ===1 ){
        conDoor_qeName.open.then(function(conn) {
            return conn.createChannel();
        }).then(function(ch) {
            return ch.assertQueue(conDoor_qeName.q).then(function(ok) {
                return ch.consume(conDoor_qeName.q, function(msg) {
                    if (msg !== null) {
                        // 打印消息
                        console.log(`消费消息：${ msg.content }`);
                        // 消费消息
                        // controller(JSON.parse(msg.content),opts__proto__,nightmare);
                        controller(JSON.parse(msg.content),opts__proto__);
                        ch.ack(msg); //标记已被使用 ?
                    }else{
                        logger.error("消息队列接受异常");
                        console.log(msg);
                        ch.ack(msg); //标记已被使用 ?
                    }
                });
            });
        }).catch(console.warn);
    }
}
module.exports = consumer;
