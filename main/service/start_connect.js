 /******************************************************
 *                                                     *
 * start connect , return connect door and queue name .*
 *                                                     *
 ******************************************************/

const amqp = require('amqplib');

// 建立连接
const start_connect = (open) => {
    const q = 'QUE_xx';
    open = amqp.connect('amqp://admin:123@localhost/test_host');
    return {open:open,q:q};
}

// 返回连接入口及队列名称
const connect = () => {
    var conDoor_qeName = false;
    return function () {
        if(!conDoor_qeName) conDoor_qeName = start_connect(); //将 del 移到构造函数中去
        return conDoor_qeName;
    }
}

module.exports = connect();
