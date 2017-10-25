
"use strict";
// consumer
const consumer = (del) => {
    del.open.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(del.q).then(function(ok) {
            return ch.consume(del.q, function(msg) {

                if (msg !== null) {
                    console.log(msg.content.toString());
                    ch.ack(msg);
                }

            });
        });
    }).catch(console.warn);
}

module.exports = consumer;
