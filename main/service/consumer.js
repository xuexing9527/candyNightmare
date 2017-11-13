"use strict";
const controller = require("./../controller/controller");
const go_nightmare = require("./../controller/go_nightmare");
// consumer
const consumer = (conDoor_qeName,opts__proto__,opts) => {

    /******nightmare page*******/


    var Nightmare = require('nightmare');
    var nightmare = Nightmare({show: true});

    nightmare
        .goto(opts.url)
        /*sougou_weixin*/
        /*zhaohuini*/
        // .goto("http://www.zhaohuini.com/Login.php")
        // .type('#signup_email','15313350626')
        // .type('#signup_password','work123')
        // .wait(8000)
        // .click("#btn_signup")
        /*zhaohuini end*/
        //.goto('https://www.reg007.com/account/signin')
        //.type('#signin_email','15313350626')
        //.type('#signin_password','work1234')
        //.click('#signin_form [type="submit"]')
        .wait(1688)
        .then(()=>{

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

        })
        .catch((err)=>{
            console.log(`开启页面 故障 失败 consumer.js  ： ${err}`);
        })

    // conDoor_qeName.open.then(function(conn) {
    //     return conn.createChannel();
    // }).then(function(ch) {
    //     return ch.assertQueue(conDoor_qeName.q).then(function(ok) {
    //         return ch.consume(conDoor_qeName.q, function(msg) {
    //             if (msg !== null) {
    //                 // 打印消息
    //                 console.log(`消费消息：${ msg.content }`);
    //                 // 消费消息
    //                 var nightmare = null;
    //                 var Nightmare = require('nightmare');
    //                 nightmare = Nightmare({show: true});
    //
    //                 nightmare
    //                     .goto(opts.url)
    //                     .click("#nav_btn_signin")
    //                     .type(
    //                         '#m_signin_email','15313350626'
    //                     )
    //                     .type(
    //                         '#m_signin_password', 'work1234'
    //                     )
    //                     .click("#m_signin_form .btn-success")
    //                     .wait(1688)
    //                     .then(()=>{
    //                         controller(JSON.parse(msg.content),opts__proto__,nightmare);
    //                     })
    //
    //                 ch.ack(msg); //标记已被使用 ?
    //             }else{
    //                 console.log(JSON.parse( msg.content ));
    //                 logger.error("消息队列接受异常", JSON.parse( msg.content ));
    //                 ch.ack(msg); //标记已被使用 ?
    //             }
    //         });
    //     });
    // }).catch(console.warn);


    /*** end ****/

    // conDoor_qeName.open.then(function(conn) {
    //     return conn.createChannel();
    // }).then(function(ch) {
    //     return ch.assertQueue(conDoor_qeName.q).then(function(ok) {
    //         return ch.consume(conDoor_qeName.q, function(msg) {
    //             if (msg !== null) {
    //                 // 打印消息
    //                 console.log(`消费消息：${ msg.content }`);
    //                 // 消费消息
    //                 controller(JSON.parse(msg.content),opts__proto__,nightmare);
    //                 ch.ack(msg); //标记已被使用 ?
    //             }else{
    //                 console.log(JSON.parse( msg.content ));
    //                 logger.error("消息队列接受异常", JSON.parse( msg.content ));
    //                 ch.ack(msg); //标记已被使用 ?
    //             }
    //         });
    //     });
    // }).catch(console.warn);
}
module.exports = consumer;
