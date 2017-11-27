function TASK(obj) {
    this.url = obj.url;
    this.data = obj.data;
    this.recursion_status = obj.recursion_status;
    this.send_method= obj.send_method;
    this.logFile = obj.logFile;
    this.queueName= obj.queueName;
}
module.exports = TASK;
