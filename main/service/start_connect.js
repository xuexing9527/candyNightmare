const amqp = require('amqplib');

const start_connect = (open) => {

    const q = 'QUE_xx';

    open = amqp.connect('amqp://admin:123@localhost/test_host');

    return {open:open,q:q};
}

module.exports = start_connect;
