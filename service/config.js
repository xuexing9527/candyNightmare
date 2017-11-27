const config = {
    //rabbitmq connect host
    amqpHost: 'amqp://guest:guest@localhost/',
    //berkeleydb
    BDB: 'waiting...',
    //单条等待时间
    wait: 1000,
    //queue 并发 ,暂定 10以内
    queues: 10,
    // queue name first word   q0,q1 ...
    queueName: 'test2.0',
}
module.exports = config;
