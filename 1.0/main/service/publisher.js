// publisher
const publisher = (conDoor_qeName,arr,opts__proto__,callback) => {
   conDoor_qeName.open.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(conDoor_qeName.q).then(function(ok) {
            function send(someJson) {
                console.log(` 发送消息json: ${someJson}`);
                return ch.sendToQueue(conDoor_qeName.q, new Buffer(someJson));
            }
            callback(arr,send);
        });
    }).catch(console.warn);
}

module.exports = publisher;

