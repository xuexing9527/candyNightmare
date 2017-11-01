const get_html = require("./get_html");

const http_confirm = function (opts,res,opts__proto__) {
    const { statusCode } = res;
    // const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
        error = new Error('请求失败。\n' + `状态码: ${statusCode}`);
    }
    if (error) {
        console.error(error.message);
        logger.error(error.message,opts);
        // 消耗响应数据以释放内存
        res.resume();
        return;
    }

    get_html(opts,res,opts__proto__);
}

module.exports = http_confirm;