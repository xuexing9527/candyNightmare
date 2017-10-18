const amqp = require('amqplib');

const start_connect = () => {

    var q = 'QUE_xx';
    const open = require('amqplib').connect('amqp://test:123@localhost/test_host');

}

module.exports = start_connect;
