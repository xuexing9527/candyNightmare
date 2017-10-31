// publisher
const publisher = (del,opts) => {
    del.open.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(del.q).then(function(ok) {


            // console.log(` 发送消息json: ${opts}`);

            return ch.sendToQueue(del.q, new Buffer(opts));

        });
    }).catch(console.warn);
}

module.exports = publisher;
