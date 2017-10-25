const amqp = require('amqplib');

const start_connect = (open) => {

    const q = 'QUE_xx';

    open = require('amqplib').connect('amqp://test:123@localhost/test_host');

    return {open:open,q:q};
}

module.exports = start_connect;
