// publisher
const publisher = (del,opts) => {
    del.open.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(del.q).then(function(ok) {

            var someJson = '{url:"'+ opts.url + '"}';

            return ch.sendToQueue(del.q, new Buffer(someJson));

        });
    }).catch(console.warn);
}

module.exports = publisher;
