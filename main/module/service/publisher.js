// publisher
const publisher = (open) => {
    open.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(q).then(function(ok) {
            var someJson = '{msg:"Hello World!"}'
            return ch.sendToQueue(q, new Buffer(someJson));
        });
    }).catch(console.warn);
}

module.exports = publisher;
