const config = {
    //rabbitmq connect host
    AMQP_HOST: 'amqp://guest:guest@localhost/',
    //msg 并发
    QUEUES: 10,
    //单条等待时间
    wait: 1000,
    //mySql
    mySql:{

    }
}
module.exports = config;
